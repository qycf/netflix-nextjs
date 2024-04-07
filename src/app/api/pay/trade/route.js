import { NextResponse } from "next/server";
import * as utility from 'utility';
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";


export async function POST(req) {

    try {

        const { searchParams } = new URL(req.url)

        const requestIp = req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for") || req.nextUrl.hostname;

        const type = searchParams.get('type');
        const out_trade_no = searchParams.get('out_trade_no');
        const planId = searchParams.get('planId');

        // const name = searchParams.get('name');
        // const money = searchParams.get('money');

        // const { data: payConfig } = await apiFetch(`/payments?payMethod=${type}`, {
        //     method: 'GET',
        // });




        const { data } = await apiFetch(`/trade?planId=${planId}`, {
            method: 'POST',
            body: {
                payMethod: type,        // 支付方式
                tradeNo: out_trade_no, // 自己生成的订单号
                tradeStatus: 'WAIT_BUYER_PAY', // 订单状态初始化为等待付款
                requestIp           // 请求IP
            },

        });

        const payConfig = data.data.payConfig
        const plan = data.data.plan

        const params = outcome(payConfig.epayKey, payConfig.paymentUrl,
            {
                pid: payConfig.pid,
                type: payConfig.payMethod,
                out_trade_no,
                notify_url: "http://localhost:3000/api/pay/notify",
                return_url: `http://localhost:3000/pay/checked?trade_no=${out_trade_no}`,
                name: plan.planName,
                money: plan.planPrice
            })


        return NextResponse.json({
            success: true,
            payUrl: params,
        });

    } catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong",
        });
    }
}

export async function GET(req) {

    try {
        const { searchParams } = new URL(req.url)
        const tradeNo = searchParams.get('tradeNo');
        const { data } = await apiFetch(`/trade?tradeNo=${tradeNo}`, {
            method: 'GET',
        });

        return NextResponse.json({
            code: 200,
            message: data.message,
        });
    }
    catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong",
        });
    }
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

    let sign = utility.md5(prestr + akey);

    let result = `${url}submit.php?${prestr}&sign=${sign}&sign_type=MD5`

    return result
}
