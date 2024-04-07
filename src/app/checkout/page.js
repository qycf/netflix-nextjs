/* eslint-disable @next/next/no-img-element */
"use client"
import { Row, Col } from 'antd';
import { useState } from 'react';

function Checkout() {

    const [paymentMethod, setPaymentMethod] = useState('alipay');

    return (
        <section className="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
            <div className="h-full">
                <div>
                    <div className="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                        <img className="rounded-t shadow-lg" src="https://preview.cruip.com/mosaic/images/pay-bg.jpg" width="460" height="180" alt="Pay background" />
                    </div>
                    <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                        <div className="bg-white px-8 pb-6 rounded-b shadow-lg">

                            <div className="text-center mb-6">
                                <div className="mb-2">
                                    <img className="-mt-8 inline-flex rounded-full" src="https://preview.cruip.com/mosaic/images/user-64-13.jpg" width="64" height="64" alt="User" />
                                </div>
                                <h1 className="text-xl leading-snug text-gray-800 font-semibold mb-2">Front-End Learning 🔥</h1>
                                <div className="text-sm">
                                    Learn how to create real web apps using HTML & CSS. Code templates included.
                                </div>
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
                                    <InputComponent label="订单编号" value="22" />
                                    <div className="flex space-x-4">
                                        <InputComponent label="订阅计划" value="基本" className={"flex-1"} />
                                        <InputComponent label="订阅计划" value="31天" className={"flex-1"} />
                                    </div>
                                    <InputComponent label="用户名" value="admin" />
                                    <InputComponent label="邮箱" value="admin@admin.com " />
                                </div>
                                <div className="mt-6">
                                    <div className="mb-4">
                                        <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">
                                            支付$253.00
                                        </button>
                                    </div>
                                    <div className="text-xs text-gray-500 italic text-center">You&rsquo;ll be charged $253, including $48 for VAT in Italy</div>
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
            <label className="block text-sm font-medium mb-1" for="card-name">
                {label}
            </label>
            <div id="card-cvc" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text"  >
                {value}
            </div>
        </div>
    )

}


export default Checkout;