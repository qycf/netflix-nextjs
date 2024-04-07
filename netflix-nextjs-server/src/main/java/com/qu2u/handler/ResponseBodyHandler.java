package com.qu2u.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qu2u.common.ResponseResult;
import org.springframework.core.MethodParameter;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

@RestControllerAdvice
public class ResponseBodyHandler implements ResponseBodyAdvice<Object> {

    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public boolean supports(MethodParameter returnType, Class<? extends HttpMessageConverter<?>> converterType) {
        return true;
    }

    @Override
    public Object beforeBodyWrite(Object body, MethodParameter returnType, MediaType selectedContentType, Class<? extends HttpMessageConverter<?>> selectedConverterType, ServerHttpRequest request, ServerHttpResponse response) {

        if (body instanceof ResponseResult) {
            return body;
        }

//        body类型是java.util.LinkedHashMap,判断是否是异常
        if (body instanceof java.util.LinkedHashMap) {
            java.util.LinkedHashMap map = (java.util.LinkedHashMap) body;
            if (map.containsKey("status") && map.containsKey("error") ) {
                return ResponseResult.fail(HttpStatus.INTERNAL_SERVER_ERROR.value(), map.get("error").toString());
            }
        }

        ResponseResult<Object> successResult = ResponseResult.success(body);

        if (body instanceof String) {
            try {
                return mapper.writeValueAsString(successResult);
            } catch (Exception e) {
                System.err.println("Error converting ResponseResult to String: " + e.getMessage());
                throw new RuntimeException("Failed to process response body", e);
            }
        }

        return successResult;
    }
}

