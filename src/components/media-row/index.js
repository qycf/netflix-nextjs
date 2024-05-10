"use client";

import { Col, Row } from "antd";
import MediaItem from "../media-item";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function MediaRow({ title, medias }) {

  const timeoutRef = useRef(0);
  const [muted, setMuted] = useState(true);
  const router = useRouter();


  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="space-y-0.5 md:space-y-2 px-4">
      <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] md:text-2xl group inline-block">
        {title}
        {
          title !== "热门推荐" && (
            <span
              className="text-lg transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              onClick={() => {
                router.push(`/t/${medias[0].typeSlug}`);

              }}
            >
              浏览更多
            </span>
          )
        }
      </h2>

      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        {medias &&
          medias.length > 0 ?
          medias
            .map((mediaItem, index) => (
              <Col key={index} xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 3 }}  >
                <MediaItem
                  title={title}
                  key={index}
                  media={mediaItem}
                  toggleMute={toggleMute}
                  timeoutRef={timeoutRef}
                  muted={muted}
                />
              </Col>
            )) : null}
      </Row>
    </div>
  );
}
