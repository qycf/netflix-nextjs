import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";


export async function POST(req) {

    try {
        const body = await req.json();

        const { data } = await apiFetch(`/mfa/pwd`, {
            method: 'POST',
            body: body,
        })
        if (data.code === 200) {
            return NextResponse.json({
                message: data.message,
                code: data.code,
            });

        } else {
            return NextResponse.json({
                code: data.code,
                message: data.message,
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