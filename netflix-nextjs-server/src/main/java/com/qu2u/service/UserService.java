package com.qu2u.service;

import com.qu2u.domain.User;
import com.baomidou.mybatisplus.extension.service.IService;
import com.qu2u.model.UserResp;

/**
* @author Administrator
* @description 针对表【user】的数据库操作Service
* @createDate 2024-03-16 19:50:29
*/
public interface UserService extends IService<User> {

    User authenticateUser(String account, String password);

    void updateUserLoginInfo(Integer userId, String clientIP);

}
