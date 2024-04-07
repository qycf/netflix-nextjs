
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
                            {dayjs(user.regTime).format("YYYY-MM-DD")} 加入Netflix
                        </span>
                    </h1>
                    <Row className="pt-24">
                        <Col span={8}>
                            <span className="font-normal text-xl text-[#737373]">
                                帐户信息
                            </span>
                        </Col>
                        <Col span={16}>
                            <div className="font-medium text-xl text-black flex justify-between items-center">
                                <div>
                                    {user.email}
                                </div>
                                <div className="font-medium text-base text-[#0073e6]">
                                    <a href="#" >更改邮箱</a>
                                </div>
                            </div>

                            <div className="font-medium text-base text-[#737373] flex justify-between items-center mt-4">
                                <span>
                                    密码：<span>*************</span>
                                </span>
                                <a href="#" className=" text-[#0073e6]">更改密码</a>
                            </div>
                            <div className="border-y-2 py-6 border-[#e6e6e6] font-medium text-base text-[#737373] flex justify-between items-center mt-4">
                                <span className=" flex items-center gap-3 font-medium text-[#333]">
                                    <svg className="w-7 h-7 inline-block" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                    </svg> <span>*********</span>
                                </span>
                                <a href="#" className=" text-[#0073e6]">账单详细信息</a>
                            </div>
                            <div className="border-[#e6e6e6] font-medium text-base text-[#737373] flex justify-between items-center mt-4 float-right">
                                <a href="#" className=" text-[#0073e6]">兑换礼品卡</a>
                            </div>

                        </Col>

                        <div className="mt-8 text-black h-4 w-full border-t-[3px]" />
                        <Col span={8}>
                            <span className="font-normal text-xl text-[#737373]">
                                订阅计划和计费
                            </span>
                        </Col>

                        <Col span={16}>
                            <div className="font-medium text-base text-[#737373] flex justify-between items-center">
                                <span>
                                    {user.planExpirationTime ? `${user.planExpirationTime} 到期` : "无订阅计划"}
                                </span>
                                <a href="#" className=" text-[#0073e6]">{user.planExpirationTime ? "订阅续期" : "添加订阅"}</a>
                            </div>

                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default AccountsPage;







// <div class="p-8 bg-[#F2F2F2] shadow h-full">
// <div class="grid grid-cols-1 md:grid-cols-3">
//     <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
//         <div>
//             <p class="font-bold text-gray-700 text-xl">22</p>
//             <p class="text-gray-400">喜欢</p>
//         </div>
//         <div>
//             <p class="font-bold text-gray-700 text-xl">10</p>
//             <p class="text-gray-400">历史观看</p>
//         </div>
//         {/* <div>
//             <p class="font-bold text-gray-700 text-xl">89</p>
//             <p class="text-gray-400">Comments</p>
//         </div> */}
//     </div>
//     <div class="relative">
//         <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
//                 <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
//             </svg>
//         </div>
//     </div>

//     <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
//         <button
//             class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
//         >
//             Connect
//         </button>
//         <button
//             class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
//         >
//             Message
//         </button>
//     </div>
// </div>

// <div class="mt-20 text-center border-b pb-12">
//     <h1 class="text-4xl font-medium text-gray-700">{user.username}</h1>
//     <p class="font-light text-gray-600 mt-3">{user.email}</p>
//     <p class="font-light text-gray-600 mt-3">{dayjs(user.regTime).format("YYYY-MM-DD")} 加入Netflix</p>

//     <p class="mt-8 text-gray-500">{user.planExpirationTime} 订阅到期</p>
//     <p class="mt-2 text-gray-500">University of Computer Science</p>
// </div>

// <div class="mt-12 flex flex-col justify-center">
//     <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
//     <button
//         class="text-indigo-500 py-2 px-4  font-medium mt-4"
//     >
//         Show more
//     </button>
// </div>

// </div>