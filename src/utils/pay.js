

export const getTrade = async (type, out_trade_no, planId) => {
    try {
        const res = await fetch(`/api/pay/trade?type=${type}&out_trade_no=${out_trade_no}&planId=${planId}`, {
            method: "POST",
        });
        const data = await res.json();
        return data;
    } catch (e) {
    }
}