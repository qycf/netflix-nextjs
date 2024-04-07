"use client";
import { motion } from "framer-motion";
import MuiModal from "@mui/material/Modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useRef, useEffect } from "react";
import { GlobalContext } from "@/context";
import { useState } from "react";
import MediaItem from "../media-item";
import { AiFillPlayCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getVodDetail, getVodList } from "@/utils";
import {
  MediaPlayer,
  MediaProvider,
  isHLSProvider,
} from '@vidstack/react';

export default function DetailsPopup({ show, setShow }) {
  const {
    mediaDetails,
    setMediaDetails,
    similarMedias,
    setSimilarMedias,
    currentMediaInfoIdAndType,
    setCurrentMediaInfoIdAndType,
    loggedInAccount,
  } = useContext(GlobalContext);


  const player = useRef(null);

  function onProviderChange(provider) {
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }




  const [key, setKey] = useState("");

  const router = useRouter()
  const { data: session } = useSession();

  useEffect(() => {
    if (currentMediaInfoIdAndType !== null) {
      const { id, type } = currentMediaInfoIdAndType;
      async function getMediaDetails() {
        const vodDetail = await getVodDetail(id)
        setMediaDetails(vodDetail)
      }

      async function getSimilarMedia() {
        const similar = await getVodList(currentMediaInfoIdAndType.type, "", "0", "", "", 1, 10);
        setSimilarMedias(similar.records)
      }

      getMediaDetails();
      getSimilarMedia();

    }
  }, [currentMediaInfoIdAndType, loggedInAccount]);

  function handleClose() {
    setShow(false);
    setCurrentMediaInfoIdAndType(null)
  }

  // 处理格式化播放地址
  const vodPlayUrlChecker = (vodPlayUrl) => {
    // Split by episodes and flatten the process for both single and multiple episodes.
    if (!vodPlayUrl) return;
    const episodes = vodPlayUrl.split("$$$");
    const m3u8Urls = episodes
      .map(episode => episode.split("#").find(segment => segment.includes(".m3u8")))
      .filter(Boolean) // Remove any undefined or falsey values
      .map(m3u8Segment => m3u8Segment.split("$")[1]); // Extract the M3U8 URL

    // Log and return the first found M3U8 URL, if any.
    if (m3u8Urls.length > 0) {

      return m3u8Urls[0];
    }

  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <MuiModal
        open={show}
        onClose={handleClose}
        className="fixed !top-7 left-0 right-0 z-50 w-full mx-auto max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
      >
        <div>
          <button
            onClick={handleClose}
            className="modalButton flex items-center justify-center absolute top-5 right-5 bg-[#181818] hover:bg-[#181818] !z-40 border-none h-9 w-9"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div className="relative ">
            {/* <ReactPlayer
              url={`https://www.youtube.com/watch?v=${key}`}
              width={"100%"}
              height={"100%"}
              style={{ position: "absolute", top: "0", left: "0" }}
              playing
              controls
            /> */}
            <MediaPlayer
              title="player"
              src={vodPlayUrlChecker(mediaDetails?.vodPlayUrl)}
              onProviderChange={onProviderChange}
              ref={player}
              autoPlay
            // clipStartTime={300}
            >
              <MediaProvider />
              {/* <MuteButton className="z-50 group ring-sky-400 absolute bottom-0 right-0 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset  data-[focus]:ring-4">
                <div className="w-8 h-8 hidden group-data-[state='muted']:block" >
                  <VolumeOffIcon />
                </div>
                <div className="w-8 h-8 hidden group-data-[state='high']:block">
                  <VolumeHigh />
                </div>
              </MuteButton> */}
            </MediaPlayer>
            <div className="absolute bottom-2 left-2 font-bold text-4xl">
              {mediaDetails?.vodName}
            </div>
            <div className="absolute  bottom-[3.5rem] flex w-full items-center justify-between pl-[1.5rem]">
              <div>
                <button
                  onClick={() =>
                    router.push(
                      `/watch/${mediaDetails?.vodId}`
                    )
                  }
                  className="right-2 absolute cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black"
                >
                  <AiFillPlayCircle
                    className="h-4 w-4 text-black md:h-7 md:w-7 cursor-pointer"
                  />
                  Play
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-b-md bg-[#181818] p-8">
            <div className="space-x-2 pb-4 flex gap-4">
              <div className="text-green-400 font-semibold flex gap-2">
                <span>
                  {mediaDetails?.vodDuration}分钟
                </span>
                <div className="inline-flex border-2 border-white/40 rounded px-2">
                  {mediaDetails?.vodRemarks}
                </div>
              </div>
            </div>

            {
              mediaDetails?.vodDirector && (
                <DetailItem label="导演" content={mediaDetails.vodDirector} />
              )
            }
            {
              mediaDetails?.vodWriter && (
                <DetailItem label="编剧" content={mediaDetails.vodWriter} />
              )
            }
            {
              mediaDetails?.vodActor && (
                <DetailItem label="主演" content={mediaDetails.vodActor} />
              )
            }
            {
              mediaDetails?.vodBlurb && (
                <DetailItem label="剧情简介" content={mediaDetails.vodBlurb} />
              )
            }

            <h2 className="mt-10 mb-6 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">
              More Like This
            </h2>
            <div className="grid grid-cols-5 gap-3 items-center scrollbar-hide md:p-2">
              {similarMedias && similarMedias.length
                ? similarMedias
                  .map((mediaItem) => (
                    <>
                      <MediaItem
                        key={mediaItem.vodId}
                        media={mediaItem}
                        similarMovieView={true}
                      />
                    </>
                  ))
                : null}
            </div>
          </div>
        </div>
      </MuiModal>
    </motion.div>
  );
}


const DetailItem = ({ label, content }) => (
  <div className="border-white/40 rounded px-2">
    <span className="text-white">{label}:&nbsp;</span>
    <span className="text-[#37A]">{content}</span>
  </div>
);