/* eslint-disable @next/next/no-img-element */
"use client";

import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Search from "./search";
import { AiOutlineSearch } from "react-icons/ai";
import { GlobalContext } from "@/context";
import AccountPopup from "./account-popup";
import CircleLoader from "../circle-loader";
import DetailsPopup from "../details-popup";
import { getVodTypeList } from "@/utils/VodReq";
import UserMenu from "../user-menu";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const {
    setPageLoader,
    loggedInAccount,
    pageLoader,
    showDetailsPopup,
    setShowDetailsPopup,
  } = useContext(GlobalContext);

  const [typeList, setTypeList] = useState([]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function getVodTypeListData() {
    const res = await getVodTypeList("0");
    setTypeList(res);
  }

  useEffect(() => {
    getVodTypeListData();
  }, []);

  if (pageLoader) return <CircleLoader />;

  return (
    <div className="relative">
      <header
        className={`header ${isScrolled && "bg-[#141414]"} hover:bg-[#141414]`}
      >
        <div className="flex items-center space-x-2 md:space-x-10">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            alt="NETFLIX"
            className="cursor-pointer object-contain"
            onClick={() => router.push("/browse")}
          />
          <ul className="hidden md:space-x-4 md:flex cursor-pointer">
            <li onClick={
              () => {
                setPageLoader(true);
                router.push("/browse");
                setShowSearchBar(false);
              }
            } className="text-[16px] font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
              首页
            </li>
            {typeList && typeList.map((item) => (
              <li
                onClick={() => {
                  setPageLoader(true);
                  router.push(`/t/${item.typeSlug}`);
                  // setSearchQuery("");
                  setShowSearchBar(false);
                }}
                className="cursor-pointer text-[16px] font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]"
                key={item.typeId}
              >
                {item.typeName}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-light flex items-center space-x-4 text-sm">
          {showSearchBar ? (
            <Search
              pathName={pathName}
              router={router}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setPageLoader={setPageLoader}
              setShowSearchBar={setShowSearchBar}
            />
          ) : (
            <AiOutlineSearch
              onClick={() => setShowSearchBar(true)}
              className="hidden sm:inline sm:w-6 sm:h-6 cursor-pointer"
            />
          )}
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
        </div>
      </header >
      <DetailsPopup show={showDetailsPopup} setShow={setShowDetailsPopup} />
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
            signOut={signOut}
            setPageLoader={setPageLoader}
          />
        )
      }
    </div >
  );
}
