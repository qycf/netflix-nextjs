
"use client"

import { Row, Col } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';


function BillingPage() {


    const [userTrade, setUserTrade] = useState([])


    useEffect(() => {

        async function userTrade() {
            const res = await fetch('/api/trade/list/user', { method: 'GET' })
            const data = await res.json();
            setUserTrade(data.data);
        }

        userTrade();


    })


    return (
        <div className="h-full  z-[999] bg-[#F2F2F2]">
            <div className=" md:w-[50%]  text-black mx-auto h-full pt-[56px]">
                <h1 className=" text-4xl text-[#333] pt-[42px]  gap-6">
                    账单详细信息
                    <div className="font-normal text-[0.8rem] text-[#666]">
                        会员费在每个周期开始时收取，而且这些费用可能会在计费日期之后的几天内显示在帐户中。
                    </div>
                </h1>
                <Row className="pt-24 " gutter={[{ xs: 8 }, 8]}>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead className="border-b">
                                <tr>
                                    <th className="text-sm font-medium text-gray-900 px-16 py-4 text-left">
                                        日期
                                    </th>
                                    <th className="text-sm font-medium text-gray-900 px-16 py-4 text-left">
                                        说明
                                    </th>
                                    <th className="text-sm font-medium text-gray-900 px-16 py-4 text-left">
                                        服务周期
                                    </th>
                                    <th className="text-sm font-medium text-gray-900 px-16 py-4 text-left">
                                        付款方式
                                    </th>
                                    <th className="text-sm font-medium text-gray-900 px-16 py-4 text-left">
                                        总计
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    userTrade && userTrade.length && userTrade.map((item, index) => {

                                        return (
                                            <tr className="border-b" key={index}>
                                                <td className="px-16 py-4 whitespace-nowrap text-sm font-light text-gray-900">
                                                    {dayjs(item.createTime).format("YYYY/MM/DD")}
                                                </td>
                                                <td className="px-16 py-4 whitespace-nowrap text-sm font-light text-gray-900">
                                                    {item.tradeName}
                                                </td>
                                                <td className="px-16 py-4 whitespace-nowrap text-sm font-light text-gray-900">
                                                    {dayjs(item.createTime).format("YYYY/MM/DD")}
                                                </td>
                                                <td className="px-16 py-4 whitespace-nowrap text-sm font-light text-gray-900">
                                                    {item.payMethod}
                                                </td>
                                                <td className="px-16 py-4 whitespace-nowrap text-sm font-light text-gray-900">
                                                    {item.tradeMoney}
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </Row>
            </div>
        </div>
    );
}

export default BillingPage;