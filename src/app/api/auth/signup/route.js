
import { NextResponse } from "next/server";
import { apiFetch } from "@/utils/request";

export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        const { username, email, password } = await req.json();



        const res = await fetch(`http://127.0.0.1:9000/auth/signup`, {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await res.json();

        return NextResponse.json({
            success: data.code === 200,
            message: data.message,
        });


    } catch (e) {
        return NextResponse.json({
            success: false,
            message: "Something Went wrong",
        });
    }
}
