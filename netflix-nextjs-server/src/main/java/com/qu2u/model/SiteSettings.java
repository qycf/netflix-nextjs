package com.qu2u.model;


import lombok.Data;

@Data
public class SiteSettings {

    private String siteUrl;

    private String siteTitle;

    private String siteDescription;

    private Boolean siteRegisterStatus;

    private String siteLogo;

    private String siteFavicon;

    private String siteKeywords;

}
