
export const getUserGroupList = async () => {
    try {
        const res = await fetch(`/api/user/group`, {
            method: "GET",
        });
        const data = await res.json();
        return data && data.data;
    } catch (e) {
    }

}

export const saveOrUpdateUserGroup = async (body) => {
    try {
        const res = await fetch('/api/user/group', {
            method: "POST",
            body: body,
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}

export const deleteUserGroup = async (groupId) => {
    try {
        const res = await fetch(`/api/user/group?groupId=${groupId}`, {
            method: "DELETE",
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}