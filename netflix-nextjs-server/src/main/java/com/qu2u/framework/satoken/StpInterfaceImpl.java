package com.qu2u.framework.satoken;

import java.util.ArrayList;
import java.util.List;

import com.qu2u.mapper.UserGroupMapper;
import com.qu2u.mapper.UserMapper;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Component;

import cn.dev33.satoken.stp.StpInterface;

/**
 * 自定义权限认证接口扩展，Sa-Token 将从此实现类获取每个账号拥有的权限码
 */
@Component	// 打开此注解，保证此类被springboot扫描，即可完成sa-token的自定义权限验证扩展
public class StpInterfaceImpl implements StpInterface {

    @Resource
    private UserMapper userMapper;

    /**
     * 返回一个账号所拥有的权限码集合
     */
    @Override
    public List<String> getPermissionList(Object loginId, String loginType) {

        return null;
    }

    /**
     * 返回一个账号所拥有的角色标识集合
     */
    @Override
    public List<String> getRoleList(Object loginId, String loginType) {

        return userMapper.selectGroupTypeByUserId((Integer) loginId);
    }

}
