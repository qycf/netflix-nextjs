import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {


        const { data } = await apiFetch(`/user/group`, {
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

        const { data } = await apiFetch(`/user/group`, {
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

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url)

        const groupId = searchParams.get('groupId')

        const { data } = await apiFetch(`/user/group?groupId=${groupId}`, {
            method: 'delete',
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
