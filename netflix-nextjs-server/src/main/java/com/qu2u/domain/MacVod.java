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
 * @TableName mac_vod
 */
@TableName(value ="mac_vod")
@Data
public class MacVod implements Serializable {
    /**
     * 
     */
    @TableId(type = IdType.AUTO)
    private Integer vodId;

    private String typeName;

    /**
     * 
     */
    private Integer typeId;

    /**
     * 
     */
    private Integer typeId1;

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
    private String vodLetter;

    /**
     * 
     */
    private String vodColor;

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
    private String vodPicScreenshot;

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
    private String vodBehind;

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
    private Integer vodTotal;

    /**
     * 
     */
    private String vodSerial;

    /**
     * 
     */
    private String vodTv;

    /**
     * 
     */
    private String vodWeekday;

    /**
     * 
     */
    private String vodArea;

    /**
     * 
     */
    private String vodLang;

    /**
     * 
     */
    private String vodYear;

    /**
     * 
     */
    private String vodVersion;

    /**
     * 
     */
    private String vodState;

    /**
     * 
     */
    private String vodAuthor;

    /**
     * 
     */
    private String vodJumpurl;

    /**
     * 
     */
    private String vodTpl;

    /**
     * 
     */
    private String vodTplPlay;

    /**
     * 
     */
    private String vodTplDown;

    /**
     * 
     */
    private Integer vodIsend;

    /**
     * 
     */
    private Integer vodLock;

    /**
     * 
     */
    private Integer vodLevel;

    /**
     * 
     */
    private Integer vodCopyright;

    /**
     * 
     */
    private Integer vodPoints;

    /**
     * 
     */
    private Integer vodPointsPlay;

    /**
     * 
     */
    private Integer vodPointsDown;

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
    private Integer vodUp;

    /**
     * 
     */
    private Integer vodDown;

    /**
     * 
     */
    private BigDecimal vodScore;

    /**
     * 
     */
    private Integer vodScoreAll;

    /**
     * 
     */
    private Integer vodScoreNum;

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
    private Integer vodTimeHits;

    /**
     * 
     */
    private Integer vodTimeMake;

    /**
     * 
     */
    private Integer vodTrysee;

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
    private String vodReurl;

    /**
     * 
     */
    private String vodRelVod;

    /**
     * 
     */
    private String vodRelArt;

    /**
     * 
     */
    private String vodPwd;

    /**
     * 
     */
    private String vodPwdUrl;

    /**
     * 
     */
    private String vodPwdPlay;

    /**
     * 
     */
    private String vodPwdPlayUrl;

    /**
     * 
     */
    private String vodPwdDown;

    /**
     * 
     */
    private String vodPwdDownUrl;

    /**
     * 
     */
    private String vodContent;

    /**
     * 
     */
    private String vodPlayFrom;

    /**
     * 
     */
    private String vodPlayServer;

    /**
     * 
     */
    private String vodPlayNote;

    /**
     * 
     */
    private String vodPlayUrl;

    /**
     * 
     */
    private String vodDownFrom;

    /**
     * 
     */
    private String vodDownServer;

    /**
     * 
     */
    private String vodDownNote;

    /**
     * 
     */
    private String vodDownUrl;

    /**
     * 
     */
    private Integer vodPlot;

    /**
     * 
     */
    private String vodPlotName;

    /**
     * 
     */
    private String vodPlotDetail;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}