package com.qu2u.controller;


import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.domain.UserFavorites;
import com.qu2u.mapper.UserFavoritesMapper;
import com.qu2u.service.UserFavoritesService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import org.apache.ibatis.annotations.Options;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vod/favorites")
public class FavoritesController {

    @Resource
    private UserFavoritesService userFavoritesService;

    @Resource
    private UserFavoritesMapper userFavoritesMapper;


    @GetMapping
    @SaCheckLogin
    public Object list() {

        int loginIdAsInt = StpUtil.getLoginIdAsInt();
        return userFavoritesMapper.listUserFavoritesByUserId(loginIdAsInt);
    }


    @PostMapping
    @SaCheckLogin
    @Operation(summary = "喜欢或取消喜欢")
    public Object addOrCancel(@RequestParam Integer vodId) {
        int loginIdAsInt = StpUtil.getLoginIdAsInt();

        LambdaQueryWrapper<UserFavorites> userFavoritesLambdaQueryWrapper = new LambdaQueryWrapper<>();
        userFavoritesLambdaQueryWrapper.eq(UserFavorites::getUserId, loginIdAsInt);
        userFavoritesLambdaQueryWrapper.eq(UserFavorites::getVodId, vodId);

        UserFavorites userFavorites = userFavoritesService.getOne(userFavoritesLambdaQueryWrapper);

        if (userFavorites != null) {
            userFavoritesService.remove(userFavoritesLambdaQueryWrapper);
            return "取消成功";
        }else {
            userFavorites = new UserFavorites();
            userFavorites.setVodId(vodId);
            userFavorites.setUserId(loginIdAsInt);
            userFavoritesService.save(userFavorites);
            return "添加成功";
        }
    }
}