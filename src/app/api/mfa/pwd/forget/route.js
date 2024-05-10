import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";


export async function POST(req) {

    try {
        const { searchParams } = new URL(req.url)

        const email = searchParams.get('email');

        const { data } = await apiFetch(`/mfa/pwd/forget?email=${email}`, {
            method: 'POST'
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