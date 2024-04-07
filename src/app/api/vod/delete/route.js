
import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";


export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url)

        const vodIds = searchParams.get('vodIds')
        console.log("🚀 ~ DELETE ~ vodIds:", vodIds)

        const { data } = await apiFetch(`/vod?vodIds=${vodIds}`, {
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
