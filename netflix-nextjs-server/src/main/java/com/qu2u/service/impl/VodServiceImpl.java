package com.qu2u.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.qu2u.domain.UserFavorites;
import com.qu2u.domain.Vod;
import com.qu2u.domain.WatchHistory;
import com.qu2u.model.VodResp;
import com.qu2u.service.UserFavoritesService;
import com.qu2u.service.VodService;
import com.qu2u.mapper.VodMapper;
import com.qu2u.service.WatchHistoryService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
* @author qy252
* @description 针对表【vod】的数据库操作Service实现
* @createDate 2024-03-21 23:19:50
*/
@Service
public class VodServiceImpl extends ServiceImpl<VodMapper, Vod>
    implements VodService{

    @Override
    public List<Vod> hitsRank() {
        LambdaQueryWrapper<Vod> vodLambdaQueryWrapper = new LambdaQueryWrapper<>();
        vodLambdaQueryWrapper.orderByDesc(Vod::getVodHits);
        vodLambdaQueryWrapper.last("limit 10");
        return this.list(vodLambdaQueryWrapper);
    }
}




