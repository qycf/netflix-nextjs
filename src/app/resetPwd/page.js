/* eslint-disable @next/next/no-img-element */
"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import MaterialInput from "@/components/materialInput";
import { useSession } from "next-auth/react";
import CircleLoader from "@/components/circle-loader";
import { GlobalContext } from "@/context";
import { useContext } from "react";
import { useParams } from 'next/navigation'
import { set } from "mongoose";

export default function ResetPwdPage(req) {
    const {
        loggedInAccount,
        mediaData,
        setMediaData,
        setPageLoader,
        pageLoader,
    } = useContext(GlobalContext);
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            setPageLoader(true);
            router.push("/");
        } else {
            setPageLoader(false);
        }
    }, [session, router, setPageLoader]);


    const { searchParams } = req
    const { email, code } = searchParams


    const [authMsg, setAuthMsg] = useState('');
    const pwdRef = useRef()
    const pwdConfirmRef = useRef()
    const [pwdConfirm, setPwdConfirm] = useState(false)

    const pwdConfirmOnchange = () => {
        if (pwdRef.current.value !== pwdConfirmRef.current.value) {
            setAuthMsg('两次密码输入不一致');
            setPwdConfirm(false);
            return;
        }
        setAuthMsg('');
        setPwdConfirm(true);
    }


    const [verifiedStatus, setVerifiedStatus] = useState(false);

    const handleSave = async () => {



        const pwd = pwdRef.current.value;
        const body = {
            email,
            password: pwd,
            code
        }

        const res = await fetch(`/api/mfa/pwd/reset`, { method: 'POST', body: JSON.stringify(body) })

        const result = await res.json();

        setAuthMsg(result.message);
        if (result.code !== 200) return;
        // 1秒后跳转到登录页面
        setTimeout(() => {
            router.push("/signin");
        }, 1000);


    };

    if (pageLoader) return <CircleLoader />;

    return (
        <div className="bg-cover bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg')] border-gray-800  ">
            <div
                className=" bg-opacity-50 h-[100vh]
"
            >
                <div className="flex items-center justify-between ">
                    <img
                        src="https://qu2u-com-1305976148.cos.ap-guangzhou.myqcloud.com/Netflix_2015_logo.svg"
                        alt="netflix"
                        width={120}
                        height={120}
                        className="w-28 sm:w-36 ml-[20%] pt-4"
                        onClick={() => router.push("/")}
                    />
                </div>
                <div className="bg-[#F3F3F3] py-12 px-16 mt-4 max-w-[450px] md:w-[80%] m-auto text-white ">
                    <h1 className="mb-7 font-bold text-[2rem] text-[#333]">
                        重置密码
                    </h1>
                    <div className="flex flex-col gap-5 text-[#333]" >
                        <input value={email} disabled type="text" className="bg-green-50 border border-[#b3b3b3]  placeholder-[#b3b3b3]  text-sm rounded-lg  block w-full p-2.5 " placeholder="name@example.com" />

                        <input ref={pwdRef} type="password" className="bg-green-50 border border-[#b3b3b3]  placeholder-[#b3b3b3]  text-sm rounded-lg  block w-full p-2.5 " placeholder="新密码" />
                        <input ref={pwdConfirmRef} onChange={pwdConfirmOnchange} type="password" className="bg-green-50 border border-[#b3b3b3]  placeholder-[#b3b3b3]  text-sm rounded-lg  block w-full p-2.5 " placeholder="确认新密码" />

                        <span className="text-red-500">{authMsg}</span>

                        <button
                            disabled={!pwdConfirm}
                            className="bg-[#007CF7] hover:bg-[#2490FD] px-4 py-2 rounded text-white"
                            onClick={handleSave}
                        >
                            保存
                        </button>
                    </div>

                </div>
            </div>

        </div >

    );
}
