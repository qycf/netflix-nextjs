import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";


export async function POST(req) {
    try {
        const { searchParams } = new URL(req.url)

        const vodIds = searchParams.get('vodIds')
        const status = searchParams.get('status')

        const { data } = await apiFetch(`/vod/status?vodIds=${vodIds}&status=${status}`, {
            method: 'POST',
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
