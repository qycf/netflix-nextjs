package com.qu2u.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.qu2u.domain.Payments;
import com.qu2u.service.PaymentsService;
import com.qu2u.mapper.PaymentsMapper;
import org.springframework.stereotype.Service;

/**
* @author qy252
* @description 针对表【payments】的数据库操作Service实现
* @createDate 2024-04-04 21:20:42
*/
@Service
public class PaymentsServiceImpl extends ServiceImpl<PaymentsMapper, Payments>
    implements PaymentsService{

}




