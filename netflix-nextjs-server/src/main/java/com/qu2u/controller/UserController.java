package com.qu2u.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.plugins.pagination.PageDTO;
import com.qu2u.domain.User;
import com.qu2u.mapper.UserMapper;
import com.qu2u.model.UserResp;
import com.qu2u.model.VodResp;
import com.qu2u.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import static cn.hutool.extra.servlet.JakartaServletUtil.getClientIP;

@RestController
@RequestMapping("/user")
public class UserController {

    @Resource
    private UserService userService;

    @Resource
    private UserMapper userMapper;

    @Resource
    private PasswordEncoder passwordEncoder;

    @GetMapping("/list")
    @Operation(summary = "查询用户列表")
    public PageDTO<UserResp> list(
            @RequestParam(value = "username", required = false) String username,
            @RequestParam(value = "email", required = false) String email,
            @RequestParam(value = "status", required = false, defaultValue = "") Integer status,
            @RequestParam(value = "groupId", required = false) String groupId,
            @RequestParam(value = "page", required = false, defaultValue = "1") Integer page,
            @RequestParam(value = "size", required = false, defaultValue = "10") Integer size

    ) {

        IPage<UserResp> userByFiltersWithPaged = userMapper.getUserByFiltersWithPaged(new Page<>(page, size), username, email, status, groupId);

        PageDTO<UserResp> listPageDTO = new PageDTO<>();
        listPageDTO.setCurrent(userByFiltersWithPaged.getCurrent());
        listPageDTO.setSize(userByFiltersWithPaged.getSize());
        listPageDTO.setTotal(userByFiltersWithPaged.getTotal());
        listPageDTO.setRecords(userByFiltersWithPaged.getRecords());

        return listPageDTO;
    }


    @PostMapping()
    @Operation(summary = "新增/更新用户")
    public boolean saveOrUpdate(@RequestBody User user, HttpServletRequest request) {

        if ("".equals(user.getPassword())){
            user.setPassword(null);
        }

        if (user.getPassword() != null) {
            user.setRegIp(getClientIP(request));
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }

        return userService.saveOrUpdate(user);
    }


}
