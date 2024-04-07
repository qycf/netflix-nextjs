package com.qu2u.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;
import lombok.Data;

/**
 * 
 * @TableName plans
 */
@TableName(value ="plans")
@Data
public class Plans implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer planId;

    /**
     * 
     */
    private String planName;

    /**
     * 
     */
    private Integer planDurationDays;

    /**
     * 
     */
    private String planDescription;

    /**
     * 
     */
    private BigDecimal planPrice;

    /**
     * 
     */
    private Integer planStatus;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}