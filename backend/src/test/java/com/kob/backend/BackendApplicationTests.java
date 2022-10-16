package com.kob.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest
class BackendApplicationTests {

    @Test
    void contextLoads() {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        System.out.println(passwordEncoder.encode("cxy123"));
        System.out.println(passwordEncoder.encode("gyf456"));
//        System.out.println(passwordEncoder.encode("cxy"));
//        System.out.println(passwordEncoder.encode("gyf"));
//        System.out.println(passwordEncoder.matches("cxy123", "$2a$10$H/VLam9APVRUtB3u/zZshOraYeK3mPK72SYEsWeNxEQWdOf0BD7J2"));

    }

}
