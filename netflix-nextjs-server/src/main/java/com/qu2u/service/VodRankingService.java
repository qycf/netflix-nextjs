package com.qu2u.service;

import com.qu2u.domain.Vod;

import java.util.HashMap;
import java.util.List;

public interface VodRankingService {


    List<HashMap<String, Object>> favoritesRank();

    List<Vod> hitsRank();


}
