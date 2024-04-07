package com.qu2u.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.domain.Type;
import com.qu2u.service.TypeService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vod/type")
public class TypeController {


    @Resource
    private TypeService typeService;

    @GetMapping("/list")
    public Object list(@RequestParam(value = "typeStatus", required = false, defaultValue = "-1") Integer typeStatus) {

        LambdaQueryWrapper<Type> typeLambdaQueryWrapper = new LambdaQueryWrapper<>();
//        按照typeRank排序，typeRank越大，排序越靠前
        if (typeStatus != -1) {
            typeLambdaQueryWrapper.eq(Type::getTypeStatus, typeStatus);
        }
        typeLambdaQueryWrapper.orderByDesc(Type::getTypeRank);

        return typeService.list(typeLambdaQueryWrapper);
    }


    @PostMapping()
    @Operation(summary = "新增/更新分类")
    public boolean add(@RequestBody Type type) {


        return typeService.saveOrUpdate(type);
    }

    @DeleteMapping()
    @Operation(summary = "删除分类")
    public boolean delete(@RequestParam("typeId") Integer typeId) {
        return typeService.removeById(typeId);
    }


}
