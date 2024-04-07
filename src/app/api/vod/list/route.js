import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url)

        const typeId = searchParams.get('typeId')
        const typeSlug = searchParams.get('typeSlug')
        const vodStatus = searchParams.get('vodStatus')
        const vodName = searchParams.get('vodName')
        const vodLevel = searchParams.get('vodLevel')
        const page = searchParams.get('page')
        const size = searchParams.get('size')



        const { data } = await apiFetch(`/vod/list?typeId=${typeId}&typeSlug=${typeSlug}&vodStatus=${vodStatus}&vodName=${vodName}&vodLevel=${vodLevel}&page=${page}&size=${size}`, {
            method: 'get',
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
