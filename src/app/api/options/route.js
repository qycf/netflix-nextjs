import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
export const dynamic = "force-dynamic";


export async function GET(req) {

    const { searchParams } = new URL(req.url);

    const key = searchParams.get('key');

    try {
        const { data } = await apiFetch(`/options?key=${key}`, {
            method: 'GET',
        })

        if (data.code === 200) {
            return NextResponse.json({
                code: data.code,
                data: data.data,
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

export async function POST(req) {

    try {
        const body = await req.json();
        const { data } = await apiFetch(`/options`, {
            method: 'POST',
            body: body
        })

        if (data.code === 200) {
            return NextResponse.json({
                code: data.code,
                data: data.data,
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