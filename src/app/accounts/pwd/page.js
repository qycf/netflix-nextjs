"use client"

import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

function PwdPage() {
    const { data: session, update: sessionUpdate } = useSession()

    useEffect(() => {
        if (!session.emailVerified) {
            return location.href = "/accounts"
        }

    }, [session])

    const pwdRef = useRef();


    const save = async () => {
        const password = pwdRef.current.value;
        const res = await fetch(`/api/mfa/pwd`, {
            method: 'POST',
            body: JSON.stringify({ password: password })

        })
        const data = await res.json();
        if (data.code === 200) {
            session.emailVerified = false;
            session.emailCode = "";
            sessionUpdate(session);
        }
    }


    return (
        <div className="h-full  z-[999] bg-[#F2F2F2]">
            <div className="w-[50%]  text-black mx-auto h-full pt-[56px]">
                <div className="text-4xl text-[#333] pt-[42px]  gap-6">
                    <div>
                        更改电子邮件
                    </div>
                    <div className="flex w-72 flex-col gap-10">
                        <div className="relative h-11 w-full min-w-[200px] flex mt-10">
                            <input
                                ref={pwdRef}
                                type="password"
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=""
                            />
                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                新密码
                            </label>
                        </div>


                        <div className="flex gap-4">
                            <button onClick={save} className={`bg-blue-600 text-sm p-3  text-white rounded-md`}>
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

export default PwdPage;