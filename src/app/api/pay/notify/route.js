import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";


export async function GET(req) {

    const { searchParams } = new URL(req.url)

    // 解析请求体
    // const { pid, trade_no, out_trade_no, type, name, money, trade_status, sign } = searchParams;
    const pid = searchParams.get('pid');
    const trade_no = searchParams.get('trade_no');
    const out_trade_no = searchParams.get('out_trade_no');
    const type = searchParams.get('type');
    const name = searchParams.get('name');
    const money = searchParams.get('money');
    const trade_status = searchParams.get('trade_status');
    const sign = searchParams.get('sign');
    const sign_type = searchParams.get('sign_type');
    const params = {
        pid,
        trade_no,
        out_trade_no,
        type,
        name,
        money,
        trade_status,
        sign,
        sign_type
    }

    if (trade_status === 'TRADE_SUCCESS') {
        console.log('支付成功');
        console.log(params);
        return new NextResponse('success');
    } else {
        return NextResponse.json({
            success: false,
            message: "支付失败",
            params
        });
    }
}