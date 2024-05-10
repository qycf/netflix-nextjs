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
import { Turnstile } from '@marsidev/react-turnstile'

export default function LoginHelpPage() {
    const {
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

    const [authMsg, setAuthMsg] = useState('');
    const emailRef = useRef()
    const ref = useRef(null);

    const [verifiedStatus, setVerifiedStatus] = useState(false);

    // 邮箱正则
    const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    const [emailValid, setEmailValid] = useState(false);

    const emailOnChange = (e) => {
        if (!emailReg.test(e.target.value)) {
            setAuthMsg('请输入有效的电子邮件地址');
            setEmailValid(false);
            return;
        }
        setAuthMsg('');
        setEmailValid(true);
    };


    const handleSend = async () => {
        const email = emailRef.current.value;

        if (verifiedStatus !== 'solved') {
            setAuthMsg('验证失败，请刷新页面重试');

            return;
        }
        const res = await fetch(`/api/mfa/pwd/forget?email=${email}`, { method: 'POST' })

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
                className="bg-black bg-opacity-50 h-[100vh]
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
                        忘记密码？
                    </h1>
                    <div className="flex flex-col gap-5 text-[#333]" >
                        您喜欢以什么方式重置密码？

                        <div className="flex items-center">
                            <input defaultChecked type="radio" value="" name="default-radio" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2" />
                            <label className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">电子邮件</label>
                        </div>

                        <input ref={emailRef} onChange={emailOnChange} type="text" className="bg-green-50 border border-[#b3b3b3]  placeholder-[#b3b3b3]  text-sm rounded-lg  block w-full p-2.5 " placeholder="name@example.com" />

                        <span className="text-red-500">{authMsg}</span>

                        <span className="text-[rgb(89, 89, 89)] -mb-2 ">
                            告诉我们您是人类
                        </span>

                        <Turnstile
                            ref={ref}
                            siteKey='0x4AAAAAAAVo-zGz5dTF7H1j'
                            onError={() => setVerifiedStatus('error')}
                            onExpire={() => setVerifiedStatus('expired')}
                            onSuccess={() => setVerifiedStatus('solved')}
                        />


                        <button
                            disabled={!emailValid}
                            className="bg-[#007CF7] hover:bg-[#2490FD] px-4 py-2 rounded text-white"
                            onClick={handleSend}
                        >
                            给我发送邮件
                        </button>
                    </div>

                </div>
            </div>

        </div >

    );
}
