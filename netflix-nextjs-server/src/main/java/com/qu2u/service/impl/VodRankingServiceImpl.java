package com.qu2u.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.qu2u.domain.RankingFavorites;
import com.qu2u.domain.Vod;
import com.qu2u.mapper.UserFavoritesMapper;
import com.qu2u.mapper.VodMapper;
import com.qu2u.service.VodRankingService;
import com.qu2u.service.VodService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class VodRankingServiceImpl implements VodRankingService {

    @Resource
    private VodService vodService;

    @Resource
    private VodMapper vodMapper;


    @Override
    public List<HashMap<String, Object>> favoritesRank() {

        // 假设已经通过某种方式获得了收藏次数最多的VOD的ID列表和对应的收藏次数
        List<RankingFavorites> rankingFavorites = vodMapper.rankingFavorites();

// 使用Java 8 Stream API从rankingFavorites中提取所有的VOD ID
        List<Integer> vodIds = rankingFavorites.stream()
                .map(RankingFavorites::getVodId)
                .collect(Collectors.toList());

// 一次性查询所有Vod对象
        List<Vod> vods = vodService.list(new QueryWrapper<Vod>().in("vod_id", vodIds));
        // 将Vod列表转换为以VodId为键，Vod对象为值的Map，以便快速查找
        Map<Integer, Vod> vodMap = vods.stream()
                .collect(Collectors.toMap(Vod::getVodId, Function.identity()));

// 构建结果列表
        List<HashMap<String, Object>> list = rankingFavorites.stream().map(rankingFavorite -> {
            HashMap<String, Object> stringObjectHashMap = new HashMap<>();
            stringObjectHashMap.put("favorites_count", rankingFavorite.getFavoritesCount());
            // 从Map中直接获取Vod对象，避免再次查询数据库
            stringObjectHashMap.put("vod", vodMap.get(rankingFavorite.getVodId()));
            return stringObjectHashMap;
        }).collect(Collectors.toList());

        return list;
    }

    @Override
    public List<Vod> hitsRank() {
        LambdaQueryWrapper<Vod> vodLambdaQueryWrapper = new LambdaQueryWrapper<>();
        vodLambdaQueryWrapper.orderByDesc(Vod::getVodHits);
        vodLambdaQueryWrapper.last("limit 10");
        return vodService.list(vodLambdaQueryWrapper);
    }
}
