package com.qu2u.netflix.test;


import com.qu2u.domain.Type;
import com.qu2u.domain.User;
import com.qu2u.domain.UserGroup;
import com.qu2u.domain.Vod;
import com.qu2u.service.TypeService;
import com.qu2u.service.UserGroupService;
import com.qu2u.service.UserService;
import com.qu2u.service.VodService;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@SpringBootTest
public class InsertTest {

    @Resource
    private UserService userService;

    @Resource
    private UserGroupService userGroupService;

    @Resource
    private PasswordEncoder passwordEncoder;

    @Resource
    private TypeService typeService;

    @Resource
    private VodService vodService;

    @Test
    public void contextLoads() {
//        获取当前时间
        LocalDateTime now = LocalDateTime.now();
        System.out.println(now);
    }

    @Test
    public void insertUser() {
        User user = new User();
        user.setGroupId(1);
        user.setUsername("admin");
        user.setEmail("6201160@gmail.com");
        user.setPassword(passwordEncoder.encode("123456"));
        user.setRegIp("127.0.0.1");
        user.setRegTime(LocalDateTime.now());
        userService.save(user);
    }

    @Test
    public void insertGroup() {
        UserGroup userGroup = new UserGroup();
        userGroup.setGroupId(0);
        userGroup.setGroupName("管理员");
        userGroup.setGroupType("member");
        userGroupService.save(userGroup);

    }

    @Test
    public void insertType() {
        Type type = new Type();
        type.setTypeName("动作");
        type.setTypeSlug("action");
        typeService.save(type);
    }

    @Test
    public void insertTestVod() {
//        随机插入一些Vod数据
        for (int i = 0; i < 100; i++) {
            Vod vod = new Vod();
            vod.setVodName("电影" + i);
            vod.setVodPic("https://sex.nyan.xyz/api/v2/img");
            vod.setVodActor("张三,李四");
            vod.setVodDirector("王五");
            vod.setVodWriter("赵六");
            vod.setVodBlurb("这是一部很好看的电影");
//            随机生成一个类型 1或者2
            vod.setTypeId((int) (Math.random() * 2) + 1);
            vod.setVodLevel((int) (Math.random() * 2) + 1);
            vod.setVodRemarks("HD");
            vod.setVodHits((int) (Math.random() * 1000));
//            获取当前时间戳,精确到秒
            vod.setVodTimeAdd((int) (System.currentTimeMillis() / 1000));
            vod.setVodTime((int) (System.currentTimeMillis() / 1000));
            vod.setVodPlayUrl("1080P$https://vod6.bdzybf7.com/20231122/YBpX6ZjZ/index.m3u8");
            vod.setVodPlayFrom("baidu");

            vodService.save(vod);


        }
    }


}
