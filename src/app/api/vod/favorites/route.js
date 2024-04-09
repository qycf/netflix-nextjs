import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(req) {
    try {
        const { searchParams } = new URL(req.url)

        const vodId = searchParams.get('vodId')

        const { data } = await apiFetch(`/vod/favorites?vodId=${vodId}`, {
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
            message: "data.message",
        });
    } catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong e e e ",
        });
    }
}


export async function GET(req) {
    try {
        const { data } = await apiFetch(`/vod/favorites`, {
            method: 'GET',
        });

        if (data.code === 200) {
            return NextResponse.json({
                success: true,
                data: data.data,
            });
        }
    } catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong e e e ",
        });
    }



}