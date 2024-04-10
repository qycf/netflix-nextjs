
export const saveOrUpdateVodType = async (body) => {
    try {
        const res = await fetch('/api/vod/type', {
            method: "POST",
            body: body,
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}

export const saveOrUpdateVod = async (body) => {
    try {
        const res = await fetch('/api/vod', {
            method: "POST",
            body: body,
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}


export const getVodTypeList = async (status) => {
    try {
        const res = await fetch(`/api/vod/type?status=${status}`, {
            method: "GET",
        });
        const data = await res.json();
        return data && data.data;
    } catch (e) {
    }

}


export const deleteVodType = async (typeId) => {
    try {
        const res = await fetch(`/api/vod/type?typeId=${typeId}`, {
            method: "DELETE",
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}

export const getVodDetail = async (vodId) => {
    try {
        const res = await fetch(`/api/vod/detail?vodId=${vodId}`, {
            method: "GET",
        });

        const data = await res.json();
        return data && data.data;
    } catch (e) {
    }
}


export const favorites = async (vodId) => {
    try {
        const res = await fetch(`/api/vod/favorites?vodId=${vodId}`, {
            method: "POST",
        });
        const data = await res.json();
        return data && data.data;
    } catch (e) {
    }
}


export const favoritesList = async () => {
    try {
        const res = await fetch(`/api/vod/favorites`, {
            method: "GET",
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}

export const getUserWatchHistory = async () => {
    try {
        const res = await fetch(`/api/vod/watch-history`, {
            method: "GET",
        });
        const data = await res.json();
        return data && data.data;
    } catch (e) {
    }
}


export const watchHistory = async (vodId) => {
    try {
        const res = await fetch(`/api/vod/watch-history?vodId=${vodId}`, {
            method: "POST",
        });
        const data = await res.json();
        return data && data.data;
    } catch (e) {
    }
}