import { compare } from "bcryptjs";
import { NextResponse } from "next/server";
import { signIn } from '@/services/auth';

export async function POST(req) {
    try {
        const { account, password } = await req.json();
        const { data, headers } = await signIn({ account, password });
        const response = NextResponse.json(data);
        response.headers.set("Authorization", headers.get("Authorization"));
        return response;

    } catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong",
        });
    }
}
