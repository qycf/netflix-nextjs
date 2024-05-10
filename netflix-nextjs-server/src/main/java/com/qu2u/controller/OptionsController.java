package com.qu2u.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.domain.Options;
import com.qu2u.service.OptionsService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("options")
public class OptionsController {

    @Resource
    private OptionsService optionsService;


    @GetMapping
    public Options getOptions(@RequestParam String key) {

        LambdaQueryWrapper<Options> optionsLambdaQueryWrapper = new LambdaQueryWrapper<>();
        optionsLambdaQueryWrapper.eq(Options::getOptionKey, key);
        return optionsService.getOne(optionsLambdaQueryWrapper);
    }


    @PostMapping
    public Boolean saveOrUpdateOptions(@RequestBody Options options) {
        return optionsService.saveOrUpdate(options);
    }

}
