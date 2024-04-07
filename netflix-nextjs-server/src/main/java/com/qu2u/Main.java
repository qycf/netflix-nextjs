package com.qu2u;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
//@MapperScan("com.qu2u.mapper")
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);

    }
}
