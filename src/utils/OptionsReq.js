


export const getOptions = async (key) => {
    try {
        const res = await fetch(`/api/options?key=${key}`, {
            method: "GET",
        });
        const data = await res.json();
        return data && data.data;
    } catch (e) {
    }
}

export const updateOptions = async (body) => {
    try {
        const res = await fetch(`/api/options`, {
            method: "POST",
            body: JSON.stringify(body)
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}