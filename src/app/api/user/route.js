import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {

        const { searchParams } = new URL(req.url)
        // const { username, email, status, groupId, page, size } = searchParams;
        const username = searchParams.get('username');
        const email = searchParams.get('email');
        const status = searchParams.get('status');
        const groupId = searchParams.get('groupId');
        const page = searchParams.get('page');
        const size = searchParams.get('size');



        const { data } = await apiFetch(`/user/list?username=${username}&email=${email}&status=${status}&groupId=${groupId}&page=${page}&size=${size}`, {
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

export async function POST(req) {
    try {
        // 获取表单数据
        const body = await req.json();

        const { data } = await apiFetch(`/user`, {
            method: 'POST',
            body: body,
        });

        if (data.code === 200) {
            return NextResponse.json({
                success: true,
                data: data.message,
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
