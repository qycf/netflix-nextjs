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


export default function Signin() {
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

    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [authMsg, setAuthMsg] = useState('');

    const ref = useRef()

    const [verifiedStatus, setVerifiedStatus] = useState(false);

    const handleLogin = async () => {
        if (!account || !password) {
            setAuthMsg('用户名和密码不能为空');
            return;
        }

        if (verifiedStatus !== 'solved') {
            setAuthMsg('验证失败，请刷新页面重试');
            return;
        }
        const result = await signIn('credentials', {
            redirect: false,
            account,
            password,
        });

        setAuthMsg(result.error);
    };

    if (pageLoader) return <CircleLoader />;

    return (
        <div className="bg-cover bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/e3b08071-f218-4dab-99a2-80315f0922cd/LK-en-20221228-popsignuptwoweeks-perspective_alpha_website_small.jpg')] border-gray-800  ">
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
                <div className="bg-[rgba(0,0,0,0.7)] py-12 px-16 mt-4 min-h-[707px] sm:h-[75vh] max-w-[450px] md:w-[80%] m-auto text-white ">
                    {/* flex flex-col items-center justify-center text-cente */}

                    <h1 className="mb-7 font-bold text-[2rem]">
                        登录
                    </h1>
                    <div className="flex flex-col gap-5 h-96" >
                        <MaterialInput id="account" label="用户名或邮箱" value={account} onChange={e => setAccount(e.target.value)} />
                        <MaterialInput id="pwd" label="密码" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <div className="text-red-600">{authMsg}</div>

                        <span className="text-[rgb(89, 89, 89)] -mb-2 text-[rgba(255,255,255,0.7)]">
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
                            className="bg-red-600 hover:bg-[#e50914] px-4 py-2 rounded"
                            onClick={handleLogin}
                        >
                            登录
                        </button>

                        <a className="self-center hover:underline" href="/loginhelp">忘记密码？</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mt-5">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-black border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label className="text-sm font-medium  dark:text-gray-300">记住我</label>
                        </div>
                        <p className="text-[rgba(255,255,255,0.7)]">第一次使用 Netflix？<a className="text-white hover:underline" href="/signup">立即注册</a>。</p>
                    </div>
                </div>
            </div>

        </div >

    );
}
