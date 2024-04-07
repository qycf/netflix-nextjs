package com.qu2u.netflix.test;


import cn.hutool.http.HttpRequest;
import cn.hutool.json.JSONArray;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.qu2u.domain.MacVod;
import com.qu2u.domain.Vod;
import com.qu2u.service.VodService;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ProvideTest {

    @Resource
    private VodService vodService;


    @Test
    public void getDataTest() {
        String api = "https://api.apibdzy.com/api.php/provide/vod/?ac=list&ac=videolist&t=11&pg=&h=&ids=&wd=";
//        请求数据
        String res = HttpRequest.get(api)
                .timeout(20000)//超时，毫秒
                .execute().body();
//      将res转换为json对象
        JSONObject jsonObject = JSONUtil.parseObj(res);
        String list = jsonObject.get("list").toString();
        JSONArray array = JSONUtil.parseArray(list);
        List<MacVod> macVodList = JSONUtil.toList(array, MacVod.class);
        for (MacVod macVod : macVodList) {
            Vod vod = getVod(macVod);
            vodService.save(vod);
        }

    }

    private static Vod getVod(MacVod macVod) {
        Vod vod = new Vod();
        vod.setVodName(macVod.getVodName());
        vod.setVodWriter(macVod.getVodWriter());
        vod.setVodActor(macVod.getVodActor());
        vod.setVodPlayFrom(macVod.getVodPlayFrom());
        vod.setVodPlayUrl(macVod.getVodPlayUrl());
        vod.setVodBlurb(macVod.getVodBlurb());
        vod.setVodPic(macVod.getVodPic());
        vod.setVodWriter(macVod.getVodWriter());
        vod.setVodRemarks(macVod.getVodRemarks());
        vod.setVodTime(macVod.getVodTime());
        vod.setVodTimeAdd(macVod.getVodTimeAdd());
        vod.setVodDirector(macVod.getVodDirector());
        vod.setVodState(macVod.getVodState());
        vod.setTypeId(macVod.getTypeId());
        return vod;
    }

}
