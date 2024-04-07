
// api/user?username&email&status=0&groupId&page=1&size=5
export const getUserList = async (username, email, status, groupId, page = 1, size = 10) => {
    try {
        const res = await fetch(`/api/user?username=${username}&email=${email}&status=${status}&groupId=${groupId}&page=${page}&size=${size}`, {
            method: "GET",
        });
        const data = await res.json();
        return data && data.data;
    } catch (e) {
    }
}

export const saveOrUpdateUser = async (body) => {
    try {
        const res = await fetch('/api/user', {
            method: "POST",
            body: body,
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}
