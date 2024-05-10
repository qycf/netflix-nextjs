package com.qu2u.service;


import org.springframework.transaction.annotation.Transactional;

import java.security.GeneralSecurityException;

public interface EmailService {


    String setUserEmailCode(Integer userId ,String code);

    String setToken(String token, Integer userId);

    String getToken(String token);

    @Transactional(rollbackFor = Exception.class)
    String getUserEmailCode(Integer userId);

    void removeUserEmailCode(Integer userId);

    Boolean sendEmail(Integer UserId,String title, String content) throws GeneralSecurityException;
}
