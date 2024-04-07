package com.qu2u.controller;


import com.qu2u.domain.Plans;
import com.qu2u.service.PlansService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/plans")
public class PlansController {

    @Resource
    private PlansService plansService;


    @GetMapping()
    @Operation(summary = "查询套餐列表")
    public Object list() {
        return plansService.list();
    }

    @DeleteMapping()
    @Operation(summary = "删除套餐")
    public boolean delete(@RequestParam("plansId") Integer plansId) {
        return plansService.removeById(plansId);
    }

    @PostMapping()
    @Operation(summary = "新增/更新套餐")
    public boolean add(@RequestBody Plans plans) {
        return plansService.saveOrUpdate(plans);
    }


}
