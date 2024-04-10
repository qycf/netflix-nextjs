package com.qu2u.mapper;

import com.qu2u.domain.WatchHistory;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.qu2u.model.VodWatchHistoryResp;

import java.util.List;

/**
 * @author qy252
 * @description 针对表【watch_history】的数据库操作Mapper
 * @createDate 2024-04-10 14:40:43
 * @Entity com.qu2u.domain.WatchHistory
 */
public interface WatchHistoryMapper extends BaseMapper<WatchHistory> {

    List<VodWatchHistoryResp> listUserWatchHistoryByUserId(Integer userId);

}




