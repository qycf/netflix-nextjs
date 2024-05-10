package com.qu2u.controller;


import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.common.ResponseResult;
import com.qu2u.domain.UserFavorites;
import com.qu2u.mapper.UserFavoritesMapper;
import com.qu2u.model.VodResp;
import com.qu2u.service.UserFavoritesService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/vod/favorites")
public class FavoritesController {

    @Resource
    private UserFavoritesService userFavoritesService;

    @Resource
    private UserFavoritesMapper userFavoritesMapper;


    @GetMapping
    @SaCheckLogin
    public Object listUserFavorites() {

        int loginIdAsInt = StpUtil.getLoginIdAsInt();
        List<VodResp> vodResps = userFavoritesMapper.listUserFavoritesByUserId(loginIdAsInt);
        vodResps.forEach(vodResp -> {
            vodResp.setIsFavorite(1);
        });
        return vodResps;
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

        HashMap<String, Object> stringObjectHashMap = new HashMap<>();
        stringObjectHashMap.put("vodId", vodId);

        if (userFavorites != null) {
            userFavoritesService.remove(userFavoritesLambdaQueryWrapper);
            stringObjectHashMap.put("isFavorite", 0);
            return ResponseResult.success(stringObjectHashMap);
        } else {
            userFavorites = new UserFavorites();
            userFavorites.setVodId(vodId);
            userFavorites.setUserId(loginIdAsInt);
            userFavoritesService.save(userFavorites);
            stringObjectHashMap.put("isFavorite", 1);
            return ResponseResult.success(stringObjectHashMap);
        }
    }
}
