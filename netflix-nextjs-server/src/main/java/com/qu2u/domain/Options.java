package com.qu2u.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 
 * @TableName options
 */
@TableName(value ="options")
@Data
public class Options implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer optionId;

    /**
     * 
     */
    private String optionKey;

    /**
     * 
     */
    private String optionValue;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}