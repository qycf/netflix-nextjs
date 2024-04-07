export const getTradeList = async (tradeStatus, page = 1, size = 10) => {
    try {
        const res = await fetch(`/api/trade?tradeStatus=${tradeStatus}`, {
            method: "GET",
        });
        const data = await res.json();
        return data && data.data;
    } catch (e) {
    }
}