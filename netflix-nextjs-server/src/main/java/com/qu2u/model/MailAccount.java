package com.qu2u.model;


import lombok.Data;

@Data
public class MailAccount {

    private String host;
    private Integer port;
    private String from;
    private String user;
    private String pass;
    private Boolean auth;
}
