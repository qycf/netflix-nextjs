"use client";

import MediaItem from "../media-item";
import { useRef, useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
export default function MediaRow({ title, medias }) {

  const timeoutRef = useRef(0);
  const [muted, setMuted] = useState(true);
  const toggleMute = () => {
    setMuted(!muted);
  };


  const scrollRef = useRef(null);



  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current: container } = scrollRef;
      const scrollAmount = container.offsetWidth * 0.7; // 根据需要调整滚动距离
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  // 引用滚动容器
  const scrollContainerRef = useRef(null);

  // 向左滚动
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -200, // 根据需要调整滚动量
        behavior: 'smooth',
      });
    }
  };

  // 向右滚动
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: 300, // 根据需要调整滚动量
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className=" space-y-0.5 md:space-y-2 px-4">
      <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] md:text-2xl group inline-block">
        {title} <span className="text-lg transition-opacity duration-200 opacity-0 group-hover:opacity-100">浏览全部</span>
      </h2>

      <div className="group relative md:-ml-2">
        <div className=" flex items-center">
          <button onClick={scrollLeft}
            className="
            absolute 
            left-0
            z-10
            bg-[rgba(0,0,0,0.9)]
            h-[131px]
            w-6
            text-white
            "
          >

            <LeftOutlined />
          </button>
          <div className="flex items-center space-x-0.5  md:space-x-2.5 md:p-2" >
            {medias &&
              medias.length &&
              medias.map((mediaItem, index) => (
                <MediaItem
                  title={title}
                  key={index}
                  media={mediaItem}
                  toggleMute={toggleMute}
                  timeoutRef={timeoutRef}
                  muted={muted}
                />
              ))}
          </div>
          <button onClick={scrollRight}
            className="
        absolute 
        right-0
        z-10
        bg-[#141414]
        h-full
        w-6
        text-white
       
        ">
            <RightOutlined />
          </button>
        </div>
      </div>

    </div>
  );
}
