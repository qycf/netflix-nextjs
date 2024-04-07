package com.qu2u.mapper;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.qu2u.domain.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.qu2u.model.UserResp;
import com.qu2u.model.VodResp;

import java.util.List;

/**
 * @author Administrator
 * @description 针对表【user】的数据库操作Mapper
 * @createDate 2024-03-16 19:50:29
 * @Entity com.qu2u.domain.User
 */
public interface UserMapper extends BaseMapper<User> {

    List<String> selectGroupTypeByUserId(Integer userId);

    IPage<UserResp> getUserByFiltersWithPaged(IPage<?> page, String username, String email, Integer status, String groupId);
}




