package com.qu2u.mapper;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.qu2u.domain.RankingFavorites;
import com.qu2u.domain.Vod;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.qu2u.model.VodResp;

import java.util.List;

/**
 * @author qy252
 * @description 针对表【vod】的数据库操作Mapper
 * @createDate 2024-03-21 23:19:50
 * @Entity com.qu2u.domain.Vod
 */
public interface VodMapper extends BaseMapper<Vod> {

    List<VodResp> listVodByType(Integer typeId);

    List<VodResp> VodRespListQuery(IPage<VodResp> page, Integer typeId, String vodName, Integer vodLevel, Integer vodStatus);

    IPage<VodResp> getVodByFiltersWithPaged(IPage<?> page, Integer typeId, String vodName, Integer vodLevel, Integer vodStatus);


    List<RankingFavorites> rankingFavorites();

}




