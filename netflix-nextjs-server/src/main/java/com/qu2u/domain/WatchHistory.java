package com.qu2u.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;
import lombok.Data;

/**
 * 
 * @TableName watch_history
 */
@TableName(value ="watch_history")
@Data
public class WatchHistory implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer watchId;

    /**
     * 
     */
    private Integer vodId;

    /**
     * 
     */
    private Integer userId;

    /**
     * 
     */
    private LocalDateTime createTime;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}