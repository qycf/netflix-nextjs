import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';

export const dynamic = "force-dynamic";

export async function POST(req) {


    try {
        const { data } = await apiFetch(`/mfa`, {
            method: 'POST',
        })

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

export async function GET(req) {

    const { searchParams } = new URL(req.url)
    const emailCode = searchParams.get('emailCode')

    try {
        const { data } = await apiFetch(`/mfa?emailCode=${emailCode}`, {
            method: 'GET',
        })
        if (data.code === 200) {

            return NextResponse.json({
                code: data.code,
                message: data.message,
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