package com.qu2u.model;

import com.qu2u.domain.Vod;

public class VodResp extends Vod {
    private String typeName;

    private String typeSlug;

    private Integer isFavorite;

    public String getTypeSlug() {
        return typeSlug;
    }

    public Integer getIsFavorite() {
        return isFavorite;
    }

    public void setIsFavorite(Integer isFavorite) {
        this.isFavorite = isFavorite;
    }

    public void setTypeSlug(String typeSlug) {
        this.typeSlug = typeSlug;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
}
