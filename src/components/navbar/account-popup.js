/* eslint-disable @next/next/no-img-element */
"use client";

export default function AccountPopup({
  setLoggedInAccount,
  signOut,
  loggedInAccount,
  setPageLoader,
}) {

  return (
    <div className="px-8 py-8 fixed top-[50px] gap-3 flex flex-col items-start right-[45px] bg-black opacity-[.85] z-[999]">
      <div className="flex flex-col gap-3">
        <div className="cursor-pointer flex gap-5">
          <img
            src="https://pic.ziyuan.wang/user/qiuyue/2024/03/avatar_1a078d3830abb.png"
            alt="Current Profile"
            className="max-w-[30px] rounded min-w-[20px] max-h-[30px] min-h-[20px] object-cover w-[30px] h-[30px]"
          />
          <p className="mb-4">{loggedInAccount.username || "请先登录"}</p>
        </div>

      </div>
      <div>
        <button
          onClick={() => {
            setPageLoader(true);
            signOut();
            setLoggedInAccount(null);
            sessionStorage.removeItem("loggedInAccount");
          }}
        >
          Sign out of Netflix
        </button>
      </div>
    </div>
  );
}
