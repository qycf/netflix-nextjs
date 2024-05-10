package com.qu2u.netflix.test;


import cn.hutool.extra.mail.Mail;
import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.domain.Options;
import com.qu2u.domain.UserFavorites;
import com.qu2u.domain.WatchHistory;
import com.qu2u.mapper.VodMapper;
import com.qu2u.model.MailAccount;
import com.qu2u.model.SiteSettings;
import com.qu2u.model.VodResp;
import com.qu2u.service.*;
import com.qu2u.utils.RedisUtil;
import com.sun.mail.util.MailSSLSocketFactory;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.beans.BeanUtils;
import org.springframework.boot.test.context.SpringBootTest;

import java.security.GeneralSecurityException;
import java.util.List;

@SpringBootTest
public class OpTest {

    @Resource
    private OptionsService optionsService;

    @Resource
    private EmailService emailService;


    @Resource
    private RedisUtil redisUtils;



    @Test
    void mapTest() {
        SiteSettings siteSettings = new SiteSettings();
        siteSettings.setSiteUrl("http://localhost:3000");
        siteSettings.setSiteTitle("Netflix for Next.js");
        siteSettings.setSiteLogo("https://qu2u-com-1305976148.cos.ap-guangzhou.myqcloud.com/Netflix_2015_logo.svg");
        siteSettings.setSiteFavicon("http://localhost:3000/favicon.ico");
        siteSettings.setSiteDescription("在线观赏 Netflix（网飞）电影与节目，或直接串流至智能电视、游戏机、PC、Mac、手机、平板电脑等多种装置。");
        siteSettings.setSiteKeywords("观赏电影, 线上电影, 观赏电视, 线上电视, 线上节目, 观赏节目, 串流电影, 串流电视, 即时串流, 电影, 观赏电影, 在线观赏电视, 不必下载, 完整电影");

        String json = JSONUtil.toJsonStr(siteSettings);

        Options options = new Options();
        options.setOptionKey("site_settings");
        options.setOptionValue(json);
        optionsService.save(options);


    }

    @Test
    public void sendEmail() throws GeneralSecurityException {
        LambdaQueryWrapper<Options> optionsLambdaQueryWrapper = new LambdaQueryWrapper<>();
        optionsLambdaQueryWrapper.eq(Options::getOptionKey, "mail_account");
        Options options = optionsService.getOne(optionsLambdaQueryWrapper);
        String optionKey = options.getOptionValue();
        MailAccount mailAccount = JSONUtil.toBean(optionKey, MailAccount.class);
        cn.hutool.extra.mail.MailAccount mailAccount1 = new cn.hutool.extra.mail.MailAccount();
        BeanUtils.copyProperties(mailAccount, mailAccount1);

        mailAccount1.setSslEnable(true);
        mailAccount1.setAuth(true);
        MailSSLSocketFactory sf = new MailSSLSocketFactory();
        sf.setTrustAllHosts(true);
        mailAccount1.setCustomProperty("mail.smtp.ssl.socketFactory", sf);

        Mail mail = Mail.create(mailAccount1)
                .setTos("527233895@qq.com")
                .setTitle("邮箱验证")
                .setContent("您的验证码是：<h3>2333</h3>")
                .setHtml(true);

        mail.send();


    }


    @Test
    public void getOptionsTest() {
        MailAccount mailAccount = new MailAccount();
        mailAccount.setHost("smtp.qq.com");
        mailAccount.setPort(465);
        mailAccount.setFrom("766479917@qq.com");
        mailAccount.setUser("Netflix<766479917@qq.com>");
        mailAccount.setPass("jbeaiglnstlibchb");
        mailAccount.setAuth(true);

//        将mailAccount转为json字符串
        String json = JSONUtil.toJsonStr(mailAccount);
        Options options = new Options();
        options.setOptionValue("mail_account");
        options.setOptionValue(json);
        optionsService.save(options);

    }


}
