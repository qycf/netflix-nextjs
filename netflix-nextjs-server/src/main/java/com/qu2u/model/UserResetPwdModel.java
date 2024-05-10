package com.qu2u.model;


import lombok.Data;

@Data
public class UserResetPwdModel {


    private String email;
    private String code;
    private String password;

}
