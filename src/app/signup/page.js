/* eslint-disable @next/next/no-img-element */
"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, use } from "react";
import MaterialInput from "@/components/materialInput";
import { useSession } from "next-auth/react";
import CircleLoader from "@/components/circle-loader";
import { GlobalContext } from "@/context";
import { useContext } from "react";
import { Turnstile } from '@marsidev/react-turnstile'


export default function Signup() {
    const {
        setPageLoader,
        pageLoader,
        siteSettings,
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




    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authMsg, setAuthMsg] = useState('');
    const [authStatus, setAuthStatus] = useState(false);


    const ref = useRef()

    const [verifiedStatus, setVerifiedStatus] = useState(false);


    if (!siteSettings?.siteRegisterStatus) {
        return <div>注册功能已关闭</div>
    }



    const handleSignup = async () => {
        // 关闭默认form提交
        event.preventDefault();

        if (!username || !password || !email) {
            setAuthMsg('用户名、邮箱和密码不能为空');
            return;
        }

        // const pwdReg = /^(?=.*\d)(?=.*[$!@%&])[^\s]{8,}$/;
        // const usernameReg = /^[a-zA-Z0-9_]{4,16}$/;

        // if (!usernameReg.test(username)) {
        //     setAuthMsg('用户名只包含字母、数字和下划线，长度为 4 到 16 个字符');
        //     return;
        // }

        // if (!pwdReg.test(password)) {
        //     setAuthMsg('密码格式不正确');
        //     return;
        // }


        if (verifiedStatus !== 'solved') {
            return;
        }

        const res = await fetch(`/api/auth/signup`, {
            method: "post",
            body: JSON.stringify({ username, email, password }),
        });


        const data = await res.json();
        setAuthStatus(data.success);
        setAuthMsg(data.message);
        if (data.success) {
            // 延迟1秒跳转
            setTimeout(async () => {
                await signIn('credentials', {
                    redirect: false,
                    account: username,
                    password,
                });
            }, 600);

        }
        // setAuthMsg(result.error);
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

                    <h1 className="mb-7 font-bold text-[2rem]">
                        开始使用 Netflix
                    </h1>
                    <form className="flex flex-col gap-5 h-96" >
                        <MaterialInput id="username" label="用户名" value={username} onChange={e => setUsername(e.target.value)} />
                        {/* <span className="text-[rgba(255,255,255,0.7)]">
                            字母、数字和下划线，长度为4到16个字符
                        </span> */}
                        <MaterialInput id="email" label="电子邮箱" value={email} onChange={e => setEmail(e.target.value)} />

                        <MaterialInput id="password" label="密码" type="password" value={password} onChange={e => setPassword(e.target.value)} />

                        {/* <span className="text-[rgba(255,255,255,0.7)]">
                            创建至少包含以下几项的密码：
                        </span>
                        <ul class="list-none pl-8 font-bold text-[rgba(255,255,255,0.7)]">
                            <li>8 个字符</li>
                            <li>1 个数字</li>
                            <li>1 个特殊字符<span className="font-normal">，例如，$、!、@、%、&</span></li>
                            <li>无前导或尾随空格</li>
                        </ul> */}
                        <div className={`${authStatus ? 'text-green-500' : 'text-red-600'}`}>{authMsg}</div>

                        <span className="text-[rgb(89, 89, 89)]  -mb-2 text-[rgba(255,255,255,0.7)]">
                            告诉我们您是人类
                        </span>

                        <Turnstile
                            ref={ref}
                            siteKey='0x4AAAAAAAVo-zGz5dTF7H1j'
                            // siteKey='2x00000000000000000000AB'
                            onError={() => setVerifiedStatus('error')}
                            onExpire={() => setVerifiedStatus('expired')}
                            onSuccess={() => setVerifiedStatus('solved')}
                        />
                        {verifiedStatus === 'expired' && <p className="text-red-600">CAPTCHA验证已过期，请刷新页面重试</p>}
                        {verifiedStatus === 'error' && <p className="text-red-600">CAPTCHA验证失败，请刷新页面重试</p>}
                        <button
                            className="bg-red-600 hover:bg-[#e50914] px-4 py-2 rounded"
                            onClick={handleSignup}
                        >
                            注册
                        </button>

                        <p className="text-[rgba(255,255,255,0.7)]">已有账户？<a className="text-white hover:underline" href="/signin">登录</a></p>

                    </form>


                </div>
            </div>

        </div >

    );
}
