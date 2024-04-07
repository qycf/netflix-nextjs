package com.qu2u.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.qu2u.domain.User;

import java.util.Date;

public class UserResp extends User {
    private String groupName;

    private String groupType;

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getGroupType() {
        return groupType;
    }

    public void setGroupType(String groupType) {
        this.groupType = groupType;
    }
}
