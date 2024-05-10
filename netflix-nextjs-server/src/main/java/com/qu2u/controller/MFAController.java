package com.qu2u.controller;


import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.util.RandomUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.common.ResponseResult;
import com.qu2u.domain.User;
import com.qu2u.model.UserResetPwdModel;
import com.qu2u.service.EmailService;
import com.qu2u.service.UserService;
import com.qu2u.utils.RedisUtil;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.GeneralSecurityException;
import java.util.UUID;

@RestController
@RequestMapping("/mfa")
public class MFAController {

    @Resource
    private UserService userService;

    @Resource
    private EmailService emailService;

    @Resource
    private RedisUtil redisUtil;

    @Resource
    private PasswordEncoder passwordEncoder;


    private static final String TOKEN_PATH = "email:verificationCode:token:";


    @PostMapping
    @Operation(summary = "用户获取邮箱验证码")
    @SaCheckLogin
    public Object getEmailCode() throws GeneralSecurityException {
        int loginIdAsInt = StpUtil.getLoginIdAsInt();
//        6位数字验证码
        String code = RandomUtil.randomNumbers(6);
        String userEmailCode = emailService.setUserEmailCode(loginIdAsInt, code);

        if (userEmailCode != null) {
            Boolean isSend = emailService.sendEmail(loginIdAsInt, "邮箱验证", "您的验证码是：" + userEmailCode + "，请在5分钟内输入。");
            if (isSend) {
                return "发送成功";
            } else {
                return "发送失败";
            }
        }

        return "发送失败";
    }

    @GetMapping
    @Operation(summary = "验证邮箱验证码")
    @SaCheckLogin
    public Object checkEmailCode(String emailCode) {
        int loginIdAsInt = StpUtil.getLoginIdAsInt();
        String userEmailCode = emailService.getUserEmailCode(loginIdAsInt);
        if (userEmailCode == null) {
            return ResponseResult.fail("验证码已过期或不存在");
        }
        if (userEmailCode.equals(emailCode)) {
            return ResponseResult.success("验证成功");
        }
        return ResponseResult.fail("验证码已过期或不存在");
    }


    @PostMapping("/email")
    @Operation(summary = "用户绑定邮箱")
    @SaCheckLogin
    public Object bindEmail(@RequestParam String email, @RequestParam String emailCode) {


        int loginIdAsInt = StpUtil.getLoginIdAsInt();

        String userEmailCode = emailService.getUserEmailCode(loginIdAsInt);

        if (userEmailCode == null) {
            return ResponseResult.fail("验证码已过期或不存在");
        }
        if (!userEmailCode.equals(emailCode)) {
            return ResponseResult.fail("验证码错误");
        }
        emailService.removeUserEmailCode(loginIdAsInt);
        User user = userService.getById(loginIdAsInt);
        user.setEmail(email);
        userService.saveOrUpdate(user);


        return ResponseResult.success("修改成功", email);
    }


    @PostMapping("/pwd")
    @Operation(summary = "用户修改密码")
    @SaCheckLogin
    public Object changePwd(@RequestBody User user) {
        int loginIdAsInt = StpUtil.getLoginIdAsInt();
        String newPwd = user.getPassword();
        User byId = userService.getById(loginIdAsInt);
        String encode = passwordEncoder.encode(newPwd);
        byId.setPassword(encode);
        userService.saveOrUpdate(byId);
        return ResponseResult.success("修改成功");
    }

    @PostMapping("/pwd/forget")
    @Operation(summary = "用户忘记密码")
    public Object forgetPwd(@RequestParam String email) throws GeneralSecurityException {

        LambdaQueryWrapper<User> eqEmail = new LambdaQueryWrapper<User>().eq(User::getEmail, email);
        User byEmail = userService.getOne(eqEmail);

        if (byEmail == null) {
            return ResponseResult.fail("邮箱不存在");
        }

        //32位数字验证码
        String code = RandomUtil.randomString(32);

        String userEmailCode = emailService.setToken(code, byEmail.getUserId());

        if (userEmailCode == null) {
            return ResponseResult.fail("验证码发送失败");
        }

        String resetPwdUrl = "http://localhost:3000/resetPwd?code=" + userEmailCode + "&email=" + email;

        Boolean b = emailService.sendEmail(byEmail.getUserId(), "重设密码请求", "访问链接重设你的密码：" + resetPwdUrl);

        if (b) {
            return ResponseResult.success("包含密码重置方法说明的电子邮件已发送至 " + email + "。");
        } else {
            return ResponseResult.fail("发送失败");
        }
    }

    @PostMapping("/pwd/reset")
    @Operation(summary = "用户重设密码")
    public Object resetPwd(@RequestBody UserResetPwdModel userResetPwdModel) {
        System.out.println(userResetPwdModel);

//        验证邮箱是否存在
        LambdaQueryWrapper<User> eqEmail = new LambdaQueryWrapper<User>().eq(User::getEmail, userResetPwdModel.getEmail());
        User user = userService.getOne(eqEmail);
        if (user == null) {
            return ResponseResult.fail("信息验证错误");
        }
//      如果邮箱存在再验证token是否存在
        String userIdAsStr = emailService.getToken(userResetPwdModel.getCode());

        if (userIdAsStr == null) {
            return ResponseResult.fail("验证码已过期或不存在");
        }

//      如果token存在则验证token是否匹配用户ID
        int userId = Integer.parseInt(userIdAsStr);
        if (userId != user.getUserId()) {
            return ResponseResult.fail("信息验证错误");
        }
//      验证通过则允许修改密码
        String password = userResetPwdModel.getPassword();
        String encode = passwordEncoder.encode(password);
        user.setPassword(encode);
        userService.saveOrUpdate(user);
        return ResponseResult.success("修改成功");
    }

}

