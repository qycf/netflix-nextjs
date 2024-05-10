package com.qu2u.service.impl;

import cn.hutool.extra.mail.Mail;
import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.domain.Options;
import com.qu2u.domain.User;
import com.qu2u.model.MailAccount;
import com.qu2u.service.EmailService;
import com.qu2u.service.OptionsService;
import com.qu2u.service.UserService;
import com.qu2u.utils.RedisUtil;
import com.sun.mail.util.MailSSLSocketFactory;
import jakarta.annotation.Resource;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.security.GeneralSecurityException;

@Service
public class EmailServiceImpl implements EmailService {

    private static final String EMAIL_PATH = "email:verificationCode:";

    @Resource
    private RedisUtil redisUtil;


    @Resource
    private UserService userService;

    @Resource
    private OptionsService optionsService;


    @Override
    public String setUserEmailCode(Integer userId ,String code) {

//        保存到redis的路径
        String key = EMAIL_PATH + userId;

        boolean set = redisUtil.set(key, code, 300);
        if (!set) {
            return "验证码发送失败";
        }
        return code;
    }

    @Override
    public String setToken(String token, Integer userId) {
        String key = EMAIL_PATH + token;

        boolean set = redisUtil.set(key, userId, 300);
        if (!set) {
            return "验证码发送失败";
        }
        return token;
    }

    @Override
    public String getToken(String token) {
        String key = EMAIL_PATH + token;
        if (!redisUtil.hasKey(key)) {
            return null;
        }
        return redisUtil.get(key).toString();
    }

    @Override
    public String getUserEmailCode(Integer userId) {
        String key = EMAIL_PATH + userId;
        if (!redisUtil.hasKey(key)) {
            return null;
        }
        return redisUtil.get(key).toString();
    }

    @Override
    public void removeUserEmailCode(Integer userId) {
        String key = EMAIL_PATH + userId;
        redisUtil.del(key);
    }

    @Override
    public Boolean sendEmail(Integer UserId,String title, String content) {

        User user = userService.getById(UserId);
        String email = user.getEmail();

        LambdaQueryWrapper<Options> optionsLambdaQueryWrapper = new LambdaQueryWrapper<>();
        optionsLambdaQueryWrapper.eq(Options::getOptionKey, "mail_account");
        Options options = optionsService.getOne(optionsLambdaQueryWrapper);
        String optionValue = options.getOptionValue();
        MailAccount mailAccount = JSONUtil.toBean(optionValue, MailAccount.class);

        cn.hutool.extra.mail.MailAccount mailAccount1 = new cn.hutool.extra.mail.MailAccount();


        BeanUtils.copyProperties(mailAccount, mailAccount1);
        mailAccount1.setAuth(true);

        try {
            mailAccount1.setSslEnable(true);
            mailAccount1.setAuth(true);
            MailSSLSocketFactory sf = new MailSSLSocketFactory();
            sf.setTrustAllHosts(true);
            mailAccount1.setCustomProperty("mail.smtp.ssl.socketFactory", sf);

            Mail mail = Mail.create(mailAccount1)
                    .setTos(email)
                    .setTitle(title)
                    .setContent(content)
                    .setHtml(true);

            mail.send();

            return true;
        } catch (GeneralSecurityException e) {
            return false;
        }
    }
}
