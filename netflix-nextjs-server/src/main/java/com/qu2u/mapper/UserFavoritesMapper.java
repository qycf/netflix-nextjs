package com.qu2u.mapper;

import com.qu2u.domain.UserFavorites;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.qu2u.domain.Vod;

import java.util.List;

/**
* @author qiuyue
* @description 针对表【user_favorites】的数据库操作Mapper
* @createDate 2024-04-07 19:29:34
* @Entity com.qu2u.domain.UserFavorites
*/
public interface UserFavoritesMapper extends BaseMapper<UserFavorites> {


    List<Vod> listUserFavoritesByUserId(Integer userId);
}




