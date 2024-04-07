package com.qu2u.domain;

import com.baomidou.mybatisplus.annotation.*;

import java.io.Serializable;
import java.math.BigDecimal;
import lombok.Data;

/**
 * 
 * @TableName vod
 */
@TableName(value ="vod")
@Data
public class Vod implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer vodId;

    /**
     * 
     */
    private Integer typeId;

    /**
     * 
     */
    private Integer groupId;

    /**
     * 
     */
    private String vodName;

    /**
     * 
     */
    private String vodSub;

    /**
     * 
     */
    private String vodEn;

    /**
     * 
     */
    private Integer vodStatus;

    /**
     * 
     */
    private String vodTag;

    /**
     * 
     */
    private String vodClass;

    /**
     * 
     */
    private String vodPic;

    /**
     * 
     */
    private String vodPicThumb;

    /**
     * 
     */
    private String vodPicSlide;

    /**
     * 
     */
    private String vodActor;

    /**
     * 
     */
    private String vodDirector;

    /**
     * 
     */
    private String vodWriter;

    /**
     * 
     */
    private String vodBlurb;

    /**
     * 
     */
    private String vodRemarks;

    /**
     * 
     */
    private String vodPubdate;

    /**
     * 
     */
    private String vodState;

    /**
     * 
     */
    @TableField(updateStrategy = FieldStrategy.IGNORED)
    private Integer vodLevel;

    /**
     * 
     */
    private Integer vodCopyright;

    /**
     * 
     */
    private Integer vodHits;

    /**
     * 
     */
    private Integer vodHitsDay;

    /**
     * 
     */
    private Integer vodHitsWeek;

    /**
     * 
     */
    private Integer vodHitsMonth;

    /**
     * 
     */
    private String vodDuration;

    /**
     * 
     */
    private Integer vodTime;

    /**
     * 
     */
    private Integer vodTimeAdd;

    /**
     * 
     */
    private Integer vodDoubanId;

    /**
     * 
     */
    private BigDecimal vodDoubanScore;

    /**
     * 
     */
    private String vodPlayFrom;

    /**
     * 
     */
    private String vodPlayUrl;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}