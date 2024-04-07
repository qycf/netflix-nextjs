package com.qu2u.scheduler;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.qu2u.domain.Trade;
import com.qu2u.service.TradeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;



import java.time.LocalDateTime;
import java.util.List;

@EnableScheduling
@Component
public class tradeStatusScheduler {

    private final TradeService tradeService;

    Logger logger = LoggerFactory.getLogger(tradeStatusScheduler.class);


    public tradeStatusScheduler(TradeService tradeService) {
        logger.info("订单状态定时任务启动");
        this.tradeService = tradeService;
    }

    @Scheduled(fixedRate = 180 * 1000)
    public void updateTradeStatus() {

        LocalDateTime now = LocalDateTime.now();

        LambdaQueryWrapper<Trade> tradeLambdaQueryWrapper = new LambdaQueryWrapper<>();
        tradeLambdaQueryWrapper.eq(Trade::getTradeStatus, "WAIT_BUYER_PAY");
        tradeLambdaQueryWrapper.ge(Trade::getCreateTime, now.minusMinutes(15));
        tradeLambdaQueryWrapper.le(Trade::getCreateTime, now);

        List<Trade> list = tradeService.list(tradeLambdaQueryWrapper);
        list.forEach(trade -> {
            trade.setTradeStatus("TRADE_TIMEOUT");
            tradeService.updateById(trade);
            logger.info("用户{}订单超时，订单号：{}", trade.getUserId(),trade.getTradeNo());
        });
    }

}
