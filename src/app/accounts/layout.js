/* eslint-disable @next/next/no-img-element */
"use client";

import Navbar from "@/components/navbar";
import UserMenu from "@/components/user-menu";

import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useContext, useState } from "react";


export default function AccountsLayout({ children }) {

    const [showAccountPopup, setShowAccountPopup] = useState(false);
    const {
        setPageLoader,
        loggedInAccount,
    } = useContext(GlobalContext);



    return (
        <>
            <header
                className={`header ${true && "bg-[#141414]"} hover:bg-[#141414]`}
            >
                <a href="/" className="flex items-center space-x-2 md:space-x-10">
                    <img
                        src="https://qu2u-com-1305976148.cos.ap-guangzhou.myqcloud.com/Netflix_2015_logo.svg"
                        width={120}
                        height={120}
                        alt="NETFLIX"
                        className="cursor-pointer object-contain"
                    />
                </a>

                <div
                    onClick={() => setShowAccountPopup(!showAccountPopup)}
                    className="flex gap-2 items-center cursor-pointer"
                >
                    <img
                        src="https://pic.ziyuan.wang/user/qiuyue/2024/03/avatar_1a078d3830abb.png"
                        alt="Current Profile"
                        className="max-w-[30px] rounded min-w-[20px] max-h-[30px] min-h-[20px] object-cover w-[30px] h-[30px]"
                    />
                    <p>{loggedInAccount && loggedInAccount.name}</p>
                </div>



                {
                    showAccountPopup && (
                        // <AccountPopup
                        //   accounts={accounts}
                        //   setPageLoader={setPageLoader}
                        //   signOut={signOut}
                        //   loggedInAccount={loggedInAccount}
                        //   setLoggedInAccount={setLoggedInAccount}
                        // />
                        <UserMenu
                            setPageLoader={setPageLoader}
                        />
                    )
                }
            </header >
            {children}
        </>
    );
}