import { NextResponse } from "next/server";
import apiFetch from '@/utils/request';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const dynamic = "force-dynamic";


export async function POST(req) {

    const { searchParams } = new URL(req.url);


    const session = await getServerSession(authOptions);
    const emailCode = session.emailCode;

    const email = searchParams.get('email');

    try {
        const { data } = await apiFetch(`/mfa/email?email=${email}&emailCode=${emailCode}`, {
            method: 'POST',
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