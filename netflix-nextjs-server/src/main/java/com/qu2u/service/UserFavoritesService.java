package com.qu2u.service;

import com.qu2u.domain.UserFavorites;
import com.baomidou.mybatisplus.extension.service.IService;
import com.qu2u.domain.Vod;

import java.util.HashMap;
import java.util.List;

/**
* @author qy252
* @description 针对表【user_favorites】的数据库操作Service
* @createDate 2024-04-10 19:57:39
*/
public interface UserFavoritesService extends IService<UserFavorites> {


    List<HashMap<String, Object>> favoritesRank();
}
