package com.kob.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

//front; backend; separate
@RestController
@RequestMapping("/pk/")
public class BotInfoController {
    @RequestMapping("getBotInfo/")
    public Map<String,String> getBotInfo() {
//        List<String> list = new LinkedList<>();
//        list.add("sword");
//        list.add("tiger");
//        list.add("apple");
//        return list;
        Map<String, String> map = new HashMap<>();
        map.put("name","tiger");
        map.put("rating","1500");
        return map;
//        List<Map<String, String>> list = new LinkedList<>();
//        Map<String,String> bot1 = new HashMap<>();
//        bot1.put("name", "tiger");
//        bot1.put("rating","1500");
//        Map<String,String> bot2 = new HashMap<>();
//        bot2.put("name", "apple");
//        bot2.put("rating","1800");
//        list.add(bot1);
//        list.add(bot2);
//        return list;





    }
}
