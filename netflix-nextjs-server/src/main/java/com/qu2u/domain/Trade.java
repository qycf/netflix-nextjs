package com.qu2u.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

/**
 * 
 * @TableName trade
 */
@TableName(value ="trade")
@Data
public class Trade implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer tradeId;

    /**
     * 
     */
    private String tradeName;

    /**
     * 
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private BigDecimal tradeMoney;

    /**
     * 
     */
    private Integer userId;

    /**
     * 
     */
    private String tradeNo;

    /**
     * 
     */
    private String outTradeNo;

    /**
     * 
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;

    /**
     * 
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime payTime;

    /**
     * 
     */
    private String tradeStatus;

    /**
     * 
     */
    private String payMethod;

    /**
     * 
     */
    private String requestIp;


    private String paymentPlatform;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}