import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";

// export async function signIn(data) {
//     return
// }

export async function GET(req) {
    try {
        const { data } = await apiFetch('/vod/level', {
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
            message: data.message,
        });
    } catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong",
        });
    }
}
