package com.qu2u.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.qu2u.domain.RankingFavorites;
import com.qu2u.domain.UserFavorites;
import com.qu2u.model.VodResp;

import java.util.List;

/**
* @author qiuyue
* @description 针对表【user_favorites】的数据库操作Mapper
* @createDate 2024-04-07 19:29:34
* @Entity com.qu2u.domain.UserFavorites
*/
public interface UserFavoritesMapper extends BaseMapper<UserFavorites> {


    List<VodResp> listUserFavoritesByUserId(Integer userId);

    List<RankingFavorites> rankingFavorites();
}




