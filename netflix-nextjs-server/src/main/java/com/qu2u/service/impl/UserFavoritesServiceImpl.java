package com.qu2u.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.qu2u.domain.UserFavorites;
import com.qu2u.service.UserFavoritesService;
import com.qu2u.mapper.UserFavoritesMapper;
import org.springframework.stereotype.Service;

/**
* @author qiuyue
* @description 针对表【user_favorites】的数据库操作Service实现
* @createDate 2024-04-07 19:29:34
*/
@Service
public class UserFavoritesServiceImpl extends ServiceImpl<UserFavoritesMapper, UserFavorites>
    implements UserFavoritesService{

}




