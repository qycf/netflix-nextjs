
import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {

        const { searchParams } = new URL(req.url)
        // const { username, email, status, groupId, page, size } = searchParams;
        // const username = searchParams.get('username');
        // const email = searchParams.get('email');
        // const status = searchParams.get('status');
        // const groupId = searchParams.get('groupId');
        // const page = searchParams.get('page');
        // const size = searchParams.get('size');

        const tradeStatus = searchParams.get('tradeStatus');

        const { data } = await apiFetch(`/trade/list?tradeStatus=${tradeStatus}`, {
            method: 'GET',
        });


        if (data.code === 200) {
            return NextResponse.json({
                success: true,
                data: data.data,
            });
        }

        return NextResponse.json({
            success: false,
            message: data.message,
        });

    } catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong",
        });
    }
}