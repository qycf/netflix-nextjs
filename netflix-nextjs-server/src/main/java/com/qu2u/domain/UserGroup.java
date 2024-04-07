package com.qu2u.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serial;
import java.io.Serializable;
import lombok.Data;

/**
 * 
 * @TableName user_group
 */
@TableName(value ="user_group")
@Data
public class UserGroup implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer groupId;

    /**
     * 
     */
    private String groupName;

    /**
     * 
     */
    private Integer groupStatus;

    /**
     * 
     */
    private String groupType;

    @Serial
    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}