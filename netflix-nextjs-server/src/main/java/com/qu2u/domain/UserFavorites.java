package com.qu2u.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 
 * @TableName user_favorites
 */
@TableName(value ="user_favorites")
@Data
public class UserFavorites implements Serializable {
    /**
     * 
     */
    @TableId
    private Integer favoriteId;

    /**
     * 
     */
    private Integer userId;

    /**
     * 
     */
    private Integer vodId;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}