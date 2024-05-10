package com.qu2u.controller;


import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.common.ResponseResult;
import com.qu2u.domain.UserFavorites;
import com.qu2u.domain.Vod;
import com.qu2u.domain.WatchHistory;
import com.qu2u.model.VodWatchHistoryResp;
import com.qu2u.service.UserFavoritesService;
import com.qu2u.service.VodService;
import com.qu2u.service.WatchHistoryService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/vod/watch-history")
public class WatchHistoryController {


    @Resource
    private WatchHistoryService watchHistoryService;

    @Resource
    private UserFavoritesService userFavoritesService;

    @Resource
    private VodService vodService;

    @GetMapping
    @Operation(summary = "获取用户观看历史")
    public Object listUserWatchHistory() {

// 获取当前登录用户的id
        int loginIdAsInt = StpUtil.getLoginIdAsInt();

// 获取用户观看历史和收藏列表
        LambdaQueryWrapper<WatchHistory> wh = new LambdaQueryWrapper<WatchHistory>().eq(WatchHistory::getUserId, loginIdAsInt);
        List<WatchHistory> watchHistoryList = watchHistoryService.list(wh);
        LambdaQueryWrapper<UserFavorites> uf = new LambdaQueryWrapper<UserFavorites>().eq(UserFavorites::getUserId, loginIdAsInt);
        List<UserFavorites> userFavoritesList = userFavoritesService.list(uf);

// 使用Map优化查找时间
        Map<Integer, UserFavorites> userFavoritesMap = userFavoritesList.stream()
                .collect(Collectors.toMap(UserFavorites::getVodId, Function.identity()));
        Map<Integer, WatchHistory> watchHistoryMap = watchHistoryList.stream()
                .collect(Collectors.toMap(WatchHistory::getVodId, Function.identity()));

// 获取vodIds，并一次性查询所有Vod对象
        List<Integer> vodIds = watchHistoryList.stream().map(WatchHistory::getVodId).distinct().collect(Collectors.toList());
        List<Vod> vods = vodService.listByIds(vodIds);

// 转换和设置属性
        List<VodWatchHistoryResp> vodResps = vods.stream().map(vod -> {
            VodWatchHistoryResp resp = new VodWatchHistoryResp();
            // 直接为对象赋值
            BeanUtils.copyProperties(vod, resp);
            // 设置是否收藏
            resp.setIsFavorite(userFavoritesMap.containsKey(vod.getVodId()) ? 1 : 0);
            // 设置观看时间
            if (watchHistoryMap.containsKey(vod.getVodId())) {
                resp.setWatchTime(watchHistoryMap.get(vod.getVodId()).getCreateTime());
            }
            return resp;
        }).toList();


        return vodResps;
    }


    @PostMapping
    @Operation(summary = "新增用户观看历史")
    @SaCheckLogin
    public ResponseResult<Object> add(@RequestParam Integer vodId) {

// 获取当前登录用户的id
        int loginIdAsInt = StpUtil.getLoginIdAsInt();

// 尝试更新观看时间，如果不存在则插入新记录
        boolean updated = watchHistoryService.lambdaUpdate()
                .eq(WatchHistory::getVodId, vodId)
                .eq(WatchHistory::getUserId, loginIdAsInt)
                .set(WatchHistory::getCreateTime, LocalDateTime.now())
                .update();

        if (!updated) {
            // 如果更新失败（即不存在该观看记录），则插入新记录
            WatchHistory watchHistory = new WatchHistory();
            watchHistory.setVodId(vodId);
            watchHistory.setUserId(loginIdAsInt);
            watchHistory.setCreateTime(LocalDateTime.now());
            watchHistoryService.save(watchHistory);
        }

        return ResponseResult.success();
    }


}
