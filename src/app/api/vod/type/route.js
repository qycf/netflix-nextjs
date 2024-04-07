import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {

        const { searchParams } = new URL(req.url)

        const typeStatus = searchParams.get('status')

        const { data } = await apiFetch(`/vod/type/list?typeStatus=${typeStatus}`, {
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

        const { data } = await apiFetch(`/vod/type`, {
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

        const typeId = searchParams.get('typeId')

        const { data } = await apiFetch(`/vod/type?typeId=${typeId}`, {
            method: 'DELETE',
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
