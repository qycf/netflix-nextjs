/* eslint-disable @next/next/no-img-element */
"use client"
import { getTrade } from '@/utils/pay';
import { useEffect, useState } from 'react';

function Checkout({
    user,
    setIsModalOpen,
    currentPlan,
    outTradeNo
}) {

    const [paymentMethod, setPaymentMethod] = useState('alipay');



    async function payPlan() {
        const data = await getTrade(paymentMethod, outTradeNo, currentPlan.planId)
        if (data.success) {
            location.href = data.payUrl;
        }


    }

    return (
        <section className="antialiased  text-gray-600">
            <div className="">
                <div>
                    {/* <div className="relative max-w-lg mx-auto">
                        <img className="rounded-t shadow-lg" src="https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/e3b08071-f218-4dab-99a2-80315f0922cd/LK-en-20221228-popsignuptwoweeks-perspective_alpha_website_small.jpg" height="50" alt="Pay background" />
                    </div> */}
                    <div className="relative  max-w-lg mx-auto" >
                        <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
                            <div className="text-center mb-6">
                                {/* <div className="mb-2">
                                    <img className="-mt-8 inline-flex rounded-full" src="https://preview.cruip.com/mosaic/images/user-64-13.jpg" width="64" height="64" alt="User" />
                                </div> */}
                                <h1 className="text-xl leading-snug text-gray-800 font-semibold mb-2">确认支付</h1>
                                {/* <div className="text-sm">
                                    Learn how to create real web apps using HTML & CSS. Code templates included.
                                </div> */}
                            </div>

                            <div className="flex justify-center mb-6">
                                <div className="relative flex w-full p-1 bg-gray-50 rounded">
                                    <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                                        <span
                                            className={`absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out  ${paymentMethod === "alipay" ? "translate-x-0" : "translate-x-full"} `}
                                        >
                                        </span>
                                    </span>
                                    <button onClick={() => {
                                        setPaymentMethod('alipay')
                                    }}
                                        className="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2" >
                                        支付宝
                                    </button>
                                    <button
                                        onClick={() => {
                                            setPaymentMethod('wxpay')
                                        }}
                                        className="relative flex-1 text-sm font-medium p-1 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2" >
                                        微信
                                    </button>
                                </div>
                            </div>

                            <div x-show="card">
                                <div className="space-y-4">
                                    <InputComponent label="订单编号" value={outTradeNo} />
                                    <div className="flex space-x-4">
                                        <InputComponent label="订阅计划" value={currentPlan.planName} className={"flex-1"} />
                                        <InputComponent label="订阅时长" value={currentPlan.planDurationDays + '天'} className={"flex-1"} />
                                    </div>
                                    <InputComponent label="用户名" value={user?.username} />
                                    <InputComponent label="邮箱" value={user?.email} />
                                </div>
                                <div className="mt-6">
                                    <div className=" mb-4">
                                        <button onClick={payPlan} className=" font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">
                                            支付￥{currentPlan.planPrice}
                                        </button>

                                    </div>
                                    <button onClick={() => {
                                        setIsModalOpen(false);
                                    }} type="button" className="w-full justify-center text-gray-900  border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1 text-center me-2 mb-2 ">
                                        再考虑一下
                                    </button>

                                    <div className="text-xs text-gray-500 italic text-center">
                                        此页面受 Cloudflare Turnstile 保护，以确保您不是机器人。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >

    );
}


function InputComponent(
    {
        label,
        value,
        className,
    }
) {


    return (
        <div className={className}>
            <label className="block text-sm font-medium mb-1" >
                {label}
            </label>
            <div id="card-cvc" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text"  >
                {value}
            </div>
        </div>
    )

}


export default Checkout;