package com.qu2u.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.qu2u.domain.User;
import com.qu2u.service.PlansService;
import com.qu2u.service.UserPlanSubscriptionService;
import com.qu2u.service.UserService;
import com.qu2u.mapper.UserMapper;
import jakarta.annotation.Resource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

/**
 * @author Administrator
 * @description 针对表【user】的数据库操作Service实现
 * @createDate 2024-03-16 19:50:29
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User>
        implements UserService {

    @Resource
    private PasswordEncoder passwordEncoder;

    @Resource
    private UserPlanSubscriptionService userPlanSubscriptionService;

    @Resource
    private PlansService plansService;

    @Override
    public User authenticateUser(String account, String password) {
        User user = getOne(new LambdaQueryWrapper<User>().eq(User::getEmail, account).or().eq(User::getUsername, account));
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
//
//            UserResp userResp = new UserResp();
//            BeanUtils.copyProperties(user, userResp);
//            Integer userId = userResp.getUserId();
////            获取到期时间最近的订阅计划,只取一条
//            UserPlanSubscription ups = userPlanSubscriptionService.getOne(
//                    new LambdaQueryWrapper<UserPlanSubscription>()
//                            .eq(UserPlanSubscription::getUserId, userId)
//                            .orderByAsc(UserPlanSubscription::getEndDate)
//            );

//            if (ups != null) {
//                Plans plan = plansService.getById(ups.getPlanId());
//                userResp.setEndDate(ups.getEndDate());
//                userResp.setPlanName(plan.getPlanName());
//            }


            return user;
        }
        return null;
    }

    @Override
    public void updateUserLoginInfo(Integer userId, String clientIP) {
        User user = getById(userId);
        if (user != null) {
            user.setLastLoginIp(clientIP);
            user.setLastLoginTime(LocalDateTime.now());
            updateById(user);
        }
    }
}




