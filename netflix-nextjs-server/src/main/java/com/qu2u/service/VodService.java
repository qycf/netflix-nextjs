package com.qu2u.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.qu2u.domain.Vod;
import com.baomidou.mybatisplus.extension.service.IService;
import com.qu2u.model.VodResp;

import java.util.List;

/**
 * @author qy252
 * @description 针对表【vod】的数据库操作Service
 * @createDate 2024-03-21 23:19:50
 */
public interface VodService extends IService<Vod> {



    List<Vod> hitsRank();

}
