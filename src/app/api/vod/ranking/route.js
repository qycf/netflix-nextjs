

import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = 'force-dynamic'

export async function GET(req) {

    try {
        const { searchParams } = new URL(req.url)

        const rankingType = searchParams.get('rankingType')

        const { data } = await apiFetch(`/vod/ranking?rankingType=${rankingType}`, {
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
            message: "data.message",
        });
    } catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong e e e ",
        });
    }
}