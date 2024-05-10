package com.qu2u.controller;


import cn.dev33.satoken.annotation.SaCheckLogin;
import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.common.ResponseResult;
import com.qu2u.domain.Payments;
import com.qu2u.domain.Plans;
import com.qu2u.domain.Trade;
import com.qu2u.model.TradeReqModel;
import com.qu2u.service.PaymentsService;
import com.qu2u.service.PlansService;
import com.qu2u.service.TradeService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/trade")
public class TradeController {


    @Resource
    private TradeService tradeService;

    @Resource
    private PaymentsService paymentsService;

    @Resource
    private PlansService plansService;

    @PostMapping
    @Operation(summary = "新增交易订单")
//    @SaCheckLogin
    public Object saveOrUpdateTrade(@RequestBody Trade trade, @RequestParam Integer planId) {

        Plans plan = plansService.getById(planId);

        int loginIdAsInt = StpUtil.getLoginIdAsInt();


        LambdaQueryWrapper<Payments> paymentsLambdaQueryWrapper = new LambdaQueryWrapper<>();
        paymentsLambdaQueryWrapper.eq(Payments::getPayMethod, trade.getPayMethod());

        Payments payConfig = paymentsService.getOne(paymentsLambdaQueryWrapper);

        trade.setUserId(loginIdAsInt);
        trade.setPaymentPlatform(payConfig.getPaymentPlatform());
        trade.setTradeMoney(plan.getPlanPrice());
        trade.setTradeName(plan.getPlanName());
        trade.setCreateTime(LocalDateTime.now());

        tradeService.saveOrUpdate(trade);

        HashMap<String, Object> stringObjectHashMap = new HashMap<>();
        stringObjectHashMap.put("payConfig", payConfig);
        stringObjectHashMap.put("plan", plan);

        return stringObjectHashMap;
    }

    @GetMapping
    @Operation(summary = "获取交易订单")
    @SaCheckLogin
    public Object getTrade(@RequestParam String tradeNo) {

        LambdaQueryWrapper<Trade> tradeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        tradeLambdaQueryWrapper
                .eq(Trade::getTradeNo, tradeNo)
                .eq(Trade::getUserId, StpUtil.getLoginIdAsInt());

        Trade trade = tradeService.getOne(tradeLambdaQueryWrapper);
        if (trade == null) {
            return ResponseResult.fail("TRADE_NOT_FOUND");
        }

        return ResponseResult.success(trade.getTradeStatus());
    }


    @GetMapping("/list")
    @Operation(summary = "获取交易订单列表")
    public Object listTrade(@RequestParam String tradeStatus) {

        LambdaQueryWrapper<Trade> tradeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        tradeLambdaQueryWrapper.orderByDesc(Trade::getCreateTime);

        return tradeService.list(tradeLambdaQueryWrapper);
    }


    @GetMapping("/list/user")
    @Operation(summary = "获取用户交易订单列表")
    @SaCheckLogin
    public Object listUserTrade() {
        LambdaQueryWrapper<Trade> tradeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        tradeLambdaQueryWrapper.eq(Trade::getUserId, StpUtil.getLoginIdAsInt());
        tradeLambdaQueryWrapper.eq(Trade::getTradeStatus,"TRADE_SUCCESS");
        tradeLambdaQueryWrapper.orderByDesc(Trade::getCreateTime);
        tradeLambdaQueryWrapper.last("limit 10");
        List<Trade> list = tradeService.list(tradeLambdaQueryWrapper);

        return list;
    }
}
