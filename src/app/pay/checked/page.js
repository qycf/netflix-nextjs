"use client"

import { useSearchParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

function CheckedPage() {

    const { data: session } = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()

    const tradeNo = searchParams.get('tradeNo')
    const [tradeStatus, setTradeStatus] = useState(tradeNo)

    if (session === null) {
        router.push('/signin')
    }


    useEffect(() => {

        async function checkTradeNo() {
            const res = await fetch(`/api/pay/trade?tradeNo=${tradeNo}`, {
                method: 'GET',
            })

            const data = await res.json()
            setTradeStatus(data.message)

        }
        checkTradeNo()
    }
    )




    return (
        <>
            <div className="bg-gray-100 h-screen flex justify-center items-center">
                <div className="bg-white p-6  mx-auto">


                    {
                        tradeStatus === 'TRADE_SUCCESS' ? (
                            <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                                <path fill="currentColor"
                                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                                </path>
                            </svg>
                        ) : (
                            <svg className='text-red-600 w-16 h-16 mx-auto my-6' fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        )
                    }


                    <div className="text-center">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">{tradeStatus}!</h3>
                        <p className="text-gray-600 my-2">

                            {
                                tradeStatus === 'TRADE_SUCCESS' ? ("感谢您完成安全的在线支付。") : ("当前订单交易失败或者没有找到订单信息，请联系客服")
                            }
                        </p>
                        <p className='text-gray-400'> Have a great day!  </p>
                        <div className="py-10 text-center">
                            <a href="/" className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                                GO BACK
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckedPage;
