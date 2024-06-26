/* eslint-disable @next/next/no-img-element */
// "use client";

import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { GlobalContext } from "@/context";

export default function Banner({ medias }) {

  const router = useRouter();
  const {
    setShowDetailsPopup,
    setCurrentMediaInfoIdAndType,
  } = useContext(GlobalContext);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 pl-4 md:mx-[115px]">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <img
          src={medias?.vodPicSlide}
          className="object-cover w-full h-full z-[-10]"
          alt="Banner"
        />
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
        {medias?.vodName}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl line-clamp-5">
        {medias?.vodBlurb}
      </p>
      <div className="flex space-x-3">
        <button
          onClick={() =>
            router.push(
              `/watch/${medias?.vodId}`
            )
          }
          className="cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black"
        >
          <AiFillPlayCircle className="h-4 w-4 text-black md:h-7 md:w-7 cursor-pointer" />
          Play
        </button>
        <button className="cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-[gray]/70"
          onClick={() => {
            setShowDetailsPopup(true);
            setCurrentMediaInfoIdAndType({
              type: medias?.typeId,
              id: medias?.vodId,
            });
          }}
        >
          <IoMdInformationCircleOutline className="h-5 w-5  md:h-8 md:w-8 cursor-pointer" />
          More Info
        </button>
      </div>
    </div>
  );
}
