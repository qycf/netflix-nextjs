package com.qu2u.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.qu2u.domain.Type;
import com.qu2u.service.TypeService;
import com.qu2u.mapper.TypeMapper;
import org.springframework.stereotype.Service;

/**
* @author qy252
* @description 针对表【type】的数据库操作Service实现
* @createDate 2024-03-21 22:57:00
*/
@Service
public class TypeServiceImpl extends ServiceImpl<TypeMapper, Type>
    implements TypeService{

}




