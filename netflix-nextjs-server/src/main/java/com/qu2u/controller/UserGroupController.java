package com.qu2u.controller;


import com.qu2u.domain.UserGroup;
import com.qu2u.service.UserGroupService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user/group")
public class UserGroupController {

    @Resource
    private UserGroupService userGroupService;

    @GetMapping()
    @Operation(summary = "查询用户组列表")
    public Object list() {
        return userGroupService.list();
    }

    @PostMapping()
    @Operation(summary = "新增/更新用户组")
    public boolean add(@RequestBody UserGroup userGroup) {
        return userGroupService.saveOrUpdate(userGroup);
    }

    @DeleteMapping
    @Operation(summary = "删除用户组")
    public boolean delete(@RequestParam("groupId") String groupId) {
        return userGroupService.removeById(groupId);
    }


}
