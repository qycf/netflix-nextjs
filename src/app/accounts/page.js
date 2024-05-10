
"use client"
import { useSession } from "next-auth/react";
import dayjs from "dayjs";

import { Row, Col } from "antd";

function AccountsPage() {

    const { data: session } = useSession()

    if (session === null) {
        return location.href = "/signin"
    }

    const user = session?.user

    return (
        <>
            <div className="h-full  z-[999] bg-[#F2F2F2]">
                <div className="w-[50%]  text-black mx-auto h-full pt-[56px]">
                    <h1 className="text-4xl text-[#333] pt-[42px] flex items-center gap-6">
                        帐户
                        <span className="font-bold text-[0.8rem] text-[#555]">
                            {dayjs(user.regTime).format("YYYY/MM/DD")} 加入Netflix
                        </span>
                    </h1>
                    <Row className="pt-24" gutter={[{ xs: 8 }, 8]}>
                        <Col span={9}>
                            <span className="font-normal text-xl text-[#737373]">
                                帐户信息
                            </span>
                        </Col>

                        <Col span={15} xs={24} md={15} >
                            <div className="font-medium text-xl text-black flex flex-wrap justify-between items-center">
                                <div className="mb-2 sm:mb-0">
                                    {user.email}
                                </div>
                                <div className="font-medium text-base text-[#0073e6]">
                                    <a href="/accounts/mfa?type=email" >更改电子邮件地址</a>
                                </div>
                            </div>


                            <div className="font-medium text-base text-[#737373] flex flex-wrap justify-between items-center mt-4">
                                <span>
                                    密码：<span>*************</span>
                                </span>
                                <a href="/accounts/mfa?type=pwd" className=" text-[#0073e6]">更改密码</a>
                            </div>
                            <div className="border-y-2 py-6 border-[#e6e6e6] font-medium text-base text-[#737373] flex flex-wrap justify-between items-center mt-4">
                                <span className=" flex items-center gap-3 font-medium text-[#333]">
                                    <svg className="w-7 h-7 inline-block" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                    </svg> <span>*********</span>
                                </span>
                                <a href="/accounts/billing" className=" text-[#0073e6] ">账单详细信息</a>
                            </div>

                            <div className="border-[#e6e6e6] font-medium text-base text-[#737373] flex flex-wrap justify-between items-center mt-4 float-right">
                                <a href="#" className=" text-[#0073e6]">兑换礼品卡</a>
                            </div>

                        </Col>

                        <div className="mt-8 text-black h-4 w-full border-t-[3px]" />
                        <Col span={9} xs={24} md={9}>
                            <span className="font-normal text-xl text-[#737373]">
                                订阅计划和计费
                            </span>
                        </Col>

                        <Col span={15} xs={24} md={15}>
                            <div className="font-medium text-base text-[#737373] flex  justify-between items-center">
                                <span>
                                    {user.planExpirationTime ? `${dayjs(user.planExpirationTime).format("YYYY/MM/DD")} 到期` : "无订阅计划"}
                                </span>
                                <a href="#" className=" text-[#0073e6]">{user.planExpirationTime ? "订阅续期" : "添加订阅"}</a>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div >
        </>
    );
}

export default AccountsPage;