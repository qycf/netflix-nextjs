/* eslint-disable @next/next/no-img-element */
"use client"
import { name } from "dayjs/locale/zh-cn";
import { useSession, signOut } from "next-auth/react";


function UserMenu(
    {
        setPageLoader,
    }
) {

    const { data: session } = useSession();
    const user = session?.user;


    const userMenus = [
        {
            name: "账号设置",
            path: "/accounts"
        },
        {
            name: "我的收藏",
            path: "/favorites"

        },
        {
            name: "观看历史",
            path: "/history"
        },
        {
            name: "退出登录",
            action: () => {
                setPageLoader(true);
                signOut();
                sessionStorage.removeItem("loggedInAccount");
            }
        },
    ]

    return (
        <div className="px-8 py-8 fixed top-[25px] gap-3 flex flex-col items-start right-[0px]  z-[999]">
            <div className="relative inline-block mb-20">
                <div className="absolute right-0 z-20 w-56 pt-2 mt-2 overflow-hidden bg-black opacity-[.85]  rounded-md shadow-xl text-white">
                    <a href="#" className="flex items-center p-3 -mt-2 text-sm text-white transition-colors duration-200 transform dark:text-gray-300  hover:bg-gray-700 hover:text-white">
                        <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://pic.ziyuan.wang/user/qiuyue/2024/03/avatar_1a078d3830abb.png" alt="jane avatar" />
                        <div className="mx-1">
                            <h1 className="text-sm font-semibold text-white ">{user.username}</h1>
                            <p className="text-sm dark:text-gray-200">{user.email}</p>
                        </div>
                    </a>
                    {/* <hr className="border-gray-700 " /> */}
                    {
                        userMenus.map((menu, index) => (
                            <div className="py-2" key={index}>
                                <a
                                    href={menu.path}
                                    onClick={menu.action}
                                    className="block px-4 py-3 text-sm text-white capitalize transition-colors duration-200 transform dark:text-gray-300  hover:bg-gray-700 hover:text-white"
                                    key={index}
                                >
                                    {menu.name}
                                    <span className="absolute right-5">
                                        <svg className="text-white" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </span>
                                </a>
                                {/* <hr className="border-gray-700 " /> */}
                            </div>

                        ))
                    }

                    {/* <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        view profile
                    </a> */}

                    {/* <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Settings
                    </a>

                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Keyboard shortcuts
                    </a>

                    <hr className="border-gray-200 dark:border-gray-700 " />

                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Company profile
                    </a>

                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Team
                    </a>

                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Invite colleagues
                    </a>

                    <hr className="border-gray-200 dark:border-gray-700 " />

                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Help
                    </a>
                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        Sign Out
                    </a> */}
                </div>
            </div>
        </div>

    );
}

export default UserMenu;