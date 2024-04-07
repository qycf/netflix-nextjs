package com.qu2u.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 
 * @TableName payments
 */
@TableName(value ="payments")
@Data
public class Payments implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer paymentId;

    /**
     * 
     */
    private String name;

    /**
     * 
     */
    private String paymentUrl;

    /**
     * 
     */
    private String payMethod;

    /**
     * 
     */
    private Integer pid;

    /**
     * 
     */
    private String epayKey;

    /**
     * 
     */
    private Integer paymentStatus;

    /**
     * 
     */
    private String paymentPlatform;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}