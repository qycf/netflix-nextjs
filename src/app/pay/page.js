

import { useEffect, useState } from 'react';
import * as utility from 'utility';
import dayjs from "dayjs";

function PayPage() {

    // const [clientip, setClientip] = useState(null); // 保存数据的状态

    const payConfig = {
        url: "http://huohuafu.com/", // 易支付网站地址
        pid: "1094", // 商户ID
        key: "FiwB5pYi5QFbhMfrf9IqeGF91rwKKQwM", // 密钥
    }

    let data = {
        pid: "1094", // 易支付PID
        money: "1", // 金额
        name: "测试商品", // 商品名称
        notify_url: "http://localhost:3000/api/paynotify", // 异步通知地址
        // out_trade_no: order_number(),// 订单号
        out_trade_no: "2024",
        return_url: "http://localhost:3000/",// 跳转通知地址
        type: "wxpay",// 支付方式: alipay:支付宝, wxpay:微信支付, qqpay:QQ钱包,tenpay:财付通
    }

    const params = outcome(payConfig.key, payConfig.url, data)

    return (
        <>
            {/* 输出data */}
            {
                data && (
                    <div>
                        <h1>订单号: {data.out_trade_no}</h1>
                        <h1>金额: {data.money}</h1>
                        <h1>商品名称: {data.name}</h1>
                        <h1>异步通知地址: {data.notify_url}</h1>
                        <h1>跳转通知地址: {data.return_url}</h1>
                        <h1>网站名称: {data.sitename}</h1>
                        <h1>支付方式: {data.type}</h1>
                        {params}
                    </div>
                )
            }
        </>
    );
}


function order_number() {
    const order = dayjs().format("YYYYMMDDHHmmss") + Math.floor(Math.random() * 10)

    return order;
}


function outcome(keys, url, data) {
    var sPara = [];
    if (!data) return null;
    for (var key in data) {
        if ((!data[key]) || key == "sign" || key == "sign_type") {
            continue;
        };
        sPara.push([key, data[key]]);
    }
    sPara = sPara.sort();
    var prestr = '';
    for (var i2 = 0; i2 < sPara.length; i2++) {
        var obj = sPara[i2];
        if (i2 == sPara.length - 1) {
            prestr = prestr + obj[0] + '=' + obj[1] + '';
        } else {
            prestr = prestr + obj[0] + '=' + obj[1] + '&';
        }
    }
    let akey = keys;

    console.log(prestr + akey);
    let sign = utility.md5(prestr + akey);

    let result = `${url}submit.php?${prestr}&sign=${sign}&sign_type=MD5`

    return result
}

export default PayPage
