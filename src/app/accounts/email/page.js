"use client"

import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CircleLoader from "@/components/circle-loader";


function EmailPage() {

    const router = useRouter();

    const emailRef = useRef();
    const [valid, isValid] = useState(false);

    const { data: session, update: sessionUpdate } = useSession()

    const [shouldRender, setShouldRender] = useState(false);



    const emailValid = () => {
        let email = emailRef.current.value
        // 正则表达式验证邮箱
        const emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (emailReg.test(email)) {
            isValid(true);
        } else {
            isValid(false);
        }
    }

    const save = async () => {
        const email = emailRef.current.value;
        const res = await fetch(`/api/mfa/email?email=${email}`, { method: 'POST' })
        const data = await res.json();
        if (data.code === 200) {
            session.user.email = email;
            session.emailVerified = false;
            sessionUpdate(session);
        }
    }


    useEffect(() => {
        if (session && !session.emailVerified) {
            router.push("/accounts");
        }
        else {
            setShouldRender(true);
        }
    }, [session, router]);


    if (!shouldRender) {
        // 在验证状态未确认或重定向前，不显示内容
        return <CircleLoader />;
    }

    return (
        <div className="h-full  z-[999] bg-[#F2F2F2]">
            <div className="w-[50%]  text-black mx-auto h-full pt-[56px]">
                <div className="text-4xl text-[#333] pt-[42px]  gap-6">
                    <div>
                        更改电子邮件
                    </div>
                    <div className="flex w-72 flex-col gap-10">
                        <div className="relative h-11  min-w-[200px] mt-16 ">
                            <div
                                className="text-[#777] peer h-full w-full border-b border-[#222] bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 "
                            >
                                {session.user.email}
                            </div>
                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                当前电子邮件
                            </label>
                        </div>

                        <div className="relative h-11 w-full min-w-[200px] flex">
                            <input
                                ref={emailRef}
                                onChange={emailValid}
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=""
                            />
                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                新电子邮件
                            </label>
                        </div>


                        <div className="flex gap-4">
                            <button onClick={save} className={`${!valid ? ' pointer-events-none bg-[#79B2EF]' : " bg-blue-600 "} text-sm p-3  text-white rounded-md`}>
                                保存
                            </button>
                            <a href="/accounts" className=" text-sm p-3 bg-[#CCCCCC] text-white rounded-md">
                                取消
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EmailPage;