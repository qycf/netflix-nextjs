package com.qu2u.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 
 * @TableName user_plan_subscription
 */
@TableName(value ="user_plan_subscription")
@Data
public class UserPlanSubscription implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer subscriptionId;

    /**
     * 
     */
    private Integer userId;

    /**
     * 
     */
    private Integer planId;

    /**
     * 
     */
    private Date startDate;

    /**
     * 
     */
    private Date endDate;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}