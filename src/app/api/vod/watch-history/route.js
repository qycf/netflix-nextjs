import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        const { data } = await apiFetch('/vod/watch-history', {
            method: 'get',
        });

        if (data.code === 200) {
            return NextResponse.json({
                success: true,
                data: data.data,
            });
        }


    }
    catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong",
        });
    }
}


export async function POST(req) {
    const { searchParams } = new URL(req.url)

    const vodId = searchParams.get('vodId')

    try {
        const { data } = await apiFetch(`/vod/watch-history?vodId=${vodId}`, {
            method: 'post',
        });

        if (data.code === 200) {
            return NextResponse.json({
                success: true,
                data: data.data,
            });
        }
    }
    catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong",
        });
    }
}