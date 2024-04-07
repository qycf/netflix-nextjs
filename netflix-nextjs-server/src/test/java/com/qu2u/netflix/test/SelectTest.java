package com.qu2u.netflix.test;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.plugins.pagination.PageDTO;
import com.qu2u.mapper.UserMapper;
import com.qu2u.mapper.VodMapper;
import com.qu2u.model.VodResp;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class SelectTest {

    @Resource
    private UserMapper userMapper;

    @Resource
    private VodMapper vodMapper;

    @Test
    public void selectGroupType() {
        List<String> strings = userMapper.selectGroupTypeByUserId(1);
        System.out.println(strings);
    }

    @Test
    public void selectVodByType() {
        IPage<VodResp> vodRespIPage = new Page<>(1, 5);

        List<VodResp> strings = vodMapper.VodRespListQuery(vodRespIPage, null, null, null, null);
        IPage<VodResp> vodRespIPage1 = vodMapper.getVodByFiltersWithPaged(vodRespIPage, null,null, null, null);
        PageDTO<VodResp> vodRespPageDTO = new PageDTO<>();
        vodRespPageDTO.setCurrent(vodRespIPage1.getCurrent());
        vodRespPageDTO.setSize(vodRespIPage1.getSize());
        vodRespPageDTO.setTotal(vodRespIPage1.getTotal());
        vodRespPageDTO.setRecords(strings);
        System.out.println(vodRespPageDTO);

//        System.out.println(strings);
    }

}
