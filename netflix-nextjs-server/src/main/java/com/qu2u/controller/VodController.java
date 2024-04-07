package com.qu2u.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.plugins.pagination.PageDTO;
import com.qu2u.domain.Type;
import com.qu2u.domain.Vod;
import com.qu2u.mapper.VodMapper;
import com.qu2u.model.VodResp;
import com.qu2u.service.TypeService;
import com.qu2u.service.VodService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/vod")
public class VodController {

    @Resource
    private VodService vodService;


    @Resource
    private VodMapper vodMapper;

    @Resource
    private TypeService typeService;


    @PostMapping()
    @Operation(summary = "新增/更新视频")
    public boolean add(@RequestBody Vod vod) {
        vod.setVodTimeAdd((int) (System.currentTimeMillis() / 1000));
//        System.out.println("VodLevel = "+vod.getVodLevel());
//        if (null == vod.getVodLevel()) {
//            vod.setVodLevel(null);
//        }
        return vodService.saveOrUpdate(vod);
    }

    @GetMapping("/level")
    @Operation(summary = "查询推荐位")
    public Vod level() {

        LambdaQueryWrapper<Vod> vodLambdaQueryWrapper = new LambdaQueryWrapper<>();
        vodLambdaQueryWrapper.eq(Vod::getVodLevel, 1);
        Vod vod = vodService.getOne(vodLambdaQueryWrapper);
        return vod;
    }

    @GetMapping("/detail")
    @Operation(summary = "查询视频详情")
    public Vod detail(@RequestParam("vodId") Integer vodId) {
        return vodService.getById(vodId);
    }


    @GetMapping("/list")
    @Operation(summary = "条件查询视频列表")
    public PageDTO<VodResp> list(
            @RequestParam(value = "typeId", required = false) Integer typeId,
            @RequestParam(value = "typeSlug", required = false) String typeSlug,
            @RequestParam(value = "vodStatus", required = false) Integer vodStatus,
            @RequestParam(value = "vodName", required = false) String vodName,
            @RequestParam(value = "vodLevel", required = false) Integer vodLevel,
            @RequestParam(value = "page", required = false, defaultValue = "1") Integer page,
            @RequestParam(value = "size", required = false, defaultValue = "5") Integer size
    ) {
        if (null != typeSlug && !typeSlug.isEmpty()) {
            LambdaQueryWrapper<Type> typeLambdaQueryWrapper = new LambdaQueryWrapper<>();
            typeLambdaQueryWrapper.eq(Type::getTypeSlug, typeSlug);
            Type one = typeService.getOne(typeLambdaQueryWrapper);
            typeId = one.getTypeId();
        }

        IPage<VodResp> vodRespIPage = vodMapper.getVodByFiltersWithPaged(
                new Page<>(page, size),
                typeId,
                vodName,
                vodLevel,
                vodStatus);

        PageDTO<VodResp> listPageDTO = new PageDTO<>();
        listPageDTO.setCurrent(page);
        listPageDTO.setSize(size);
        listPageDTO.setRecords(vodRespIPage.getRecords());
        listPageDTO.setTotal(vodRespIPage.getTotal());

        return listPageDTO;
    }


    @DeleteMapping()
    @Operation(summary = "批量删除视频")
    public boolean delete(@RequestParam("vodIds") Integer[] vodIds) {
        return vodService.removeByIds(Arrays.asList(vodIds));
    }

    @PostMapping("/status")
    @Operation(summary = "批量设置视频状态")
    public boolean setStatus(@RequestParam("vodIds") Integer[] vodIds, @RequestParam("status") Integer status) {
        System.out.println("vodIds:" + vodIds);
        try {
            LambdaQueryWrapper<Vod> in = new LambdaQueryWrapper<Vod>().in(Vod::getVodId, vodIds);
            vodService.list(in).forEach(vod -> {
                vod.setVodStatus(status);
                vodService.updateById(vod);
            });
            return true;
        } catch (Exception e) {
            return false;
        }
    }


}
