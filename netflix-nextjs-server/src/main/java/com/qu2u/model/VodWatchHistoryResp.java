package com.qu2u.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.qu2u.domain.Vod;

import java.time.LocalDateTime;

public class VodWatchHistoryResp extends Vod {
    private String typeName;

    private String typeSlug;

    public String getTypeName() {
        return typeName;
    }

    public LocalDateTime getWatchTime() {
        return watchTime;
    }

    public void setWatchTime(LocalDateTime watchTime) {
        this.watchTime = watchTime;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getTypeSlug() {
        return typeSlug;
    }

    public void setTypeSlug(String typeSlug) {
        this.typeSlug = typeSlug;
    }

    public Integer getIsFavorite() {
        return isFavorite;
    }

    public void setIsFavorite(Integer isFavorite) {
        this.isFavorite = isFavorite;
    }


    private Integer isFavorite;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private LocalDateTime watchTime;


}
