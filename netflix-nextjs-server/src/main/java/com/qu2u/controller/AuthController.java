package com.qu2u.controller;


import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.qu2u.common.ResponseResult;
import com.qu2u.domain.Options;
import com.qu2u.domain.User;
import com.qu2u.model.SiteSettings;
import com.qu2u.model.UserLoginModel;
import com.qu2u.model.UserRegModel;
import com.qu2u.model.UserResp;
import com.qu2u.service.OptionsService;
import com.qu2u.service.PlansService;
import com.qu2u.service.UserPlanSubscriptionService;
import com.qu2u.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Date;

import static cn.hutool.extra.servlet.JakartaServletUtil.getClientIP;


@RestController
@RequestMapping("auth")
public class AuthController {

    @Resource
    private UserService userService;

    @Resource
    private PasswordEncoder passwordEncoder;

    @Resource
    private OptionsService optionsService;


    @PostMapping("signin")
    @Operation(summary = "用户登录")
    public ResponseResult<?> login(@RequestBody UserLoginModel userLoginModel, HttpServletResponse response, HttpServletRequest request) {
        try {
            User userResp = userService.authenticateUser(userLoginModel.getAccount(), userLoginModel.getPassword());

            if (userResp != null) {
                if (userResp.getStatus() == 1) {
                    return ResponseResult.fail("账号已被禁用");
                }
                StpUtil.login(userResp.getUserId());
                response.setHeader("Authorization", "Bearer " + StpUtil.getTokenValue());
                System.out.println("Authorization：" + response.getHeader("Authorization"));
                userService.updateUserLoginInfo(userResp.getUserId(), getClientIP(request));
                return ResponseResult.success(userResp);
            } else {
                return ResponseResult.fail("用户名或密码错误");
            }
        } catch (Exception e) {
            // 根据需要添加日志记录
            return ResponseResult.fail("登录失败");
        }
    }


    @PostMapping("/signup")
    @Operation(summary = "用户注册")
    public ResponseResult<?> signup(@RequestBody UserRegModel userRegModel, HttpServletRequest request) throws JsonProcessingException {

        LambdaQueryWrapper<Options> optionsLambdaQueryWrapper = new LambdaQueryWrapper<>();
        optionsLambdaQueryWrapper.eq(Options::getOptionKey, "site_settings");
        Options siteSettingsOption = optionsService.getOne(optionsLambdaQueryWrapper);

        if (siteSettingsOption != null) {
            String siteSettingsOptionValueStr = siteSettingsOption.getOptionValue();
            ObjectMapper objectMapper = new ObjectMapper();
            SiteSettings siteSettings = objectMapper.readValue(siteSettingsOptionValueStr, SiteSettings.class);
            if (!siteSettings.getSiteRegisterStatus()) {
                return ResponseResult.fail("注册功能已关闭");
            }
        }

        // 检查用户名或邮箱是否已被注册
        boolean userExists = userService.getOne(
                new LambdaQueryWrapper<User>()
                        .eq(User::getEmail, userRegModel.getEmail())
                        .or()
                        .eq(User::getUsername, userRegModel.getUsername())
        ) != null;

        if (userExists) {
            return ResponseResult.fail("用户名或邮箱已存在");
        }

        // 创建新用户
        User newUser = new User();
        newUser.setUsername(userRegModel.getUsername());
        newUser.setEmail(userRegModel.getEmail());
        // 加密密码
        newUser.setPassword(passwordEncoder.encode(userRegModel.getPassword()));
//        newUser.setRegTime(LocalDateTime.now());
        System.out.println("注册时间：" + LocalDateTime.now());
        // 设置注册IP
        newUser.setRegIp(getClientIP(request));
        newUser.setGroupId(2);

        // 保存用户
        userService.save(newUser);

        return ResponseResult.success("注册成功");
    }

    @PostMapping("signout")
    @Operation(summary = "用户登出")
    @SaCheckLogin
    public ResponseResult<?> logout() {
        StpUtil.logout();
        return ResponseResult.success();
    }


}
