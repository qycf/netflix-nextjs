package com.qu2u.controller;


import cn.dev33.satoken.annotation.SaCheckLogin;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.domain.Payments;
import com.qu2u.service.PaymentsService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("payments")
@RestController
public class PaymentsController {


    @Resource
    private PaymentsService paymentsService;


    @GetMapping
    @SaCheckLogin
    @Operation(summary = "获取支付方式")
    public Object getPayments(@RequestParam String payMethod) {

        LambdaQueryWrapper<Payments> paymentsLambdaQueryWrapper = new LambdaQueryWrapper<>();
        paymentsLambdaQueryWrapper.eq(Payments::getPayMethod, payMethod);

        return paymentsService.getOne(paymentsLambdaQueryWrapper);
    }

}
