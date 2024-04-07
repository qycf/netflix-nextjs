package com.qu2u.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 
 * @TableName type
 */
@TableName(value ="type")
@Data
public class Type implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer typeId;

    /**
     * 
     */
    private String typeName;

    /**
     * 
     */
    private String typeSlug;

    /**
     * 
     */
    private Integer typeStatus;

    /**
     * 
     */
    private Integer typeRank;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}