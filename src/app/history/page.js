"use client";

import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import MediaItem from "@/components/media-item/";
import CircleLoader from "@/components/circle-loader";
import UnauthPage from "@/components/unauth-page";
import { getUserWatchHistory } from "@/utils/VodReq";
import { Col, Row } from "antd";

export default function WatchHistoryPage() {

  const {
    pageLoader,
    setPageLoader,
  } = useContext(GlobalContext);


  const { data: session } = useSession();
  const [watchHistory, setWatchHistory] = useState([]);

  useEffect(() => {
    async function getAllMedias() {
      const watchHistory = await getUserWatchHistory();
      setWatchHistory(watchHistory);
      setPageLoader(false);
    }
    getAllMedias();
  }, []);

  if (session === null) return <UnauthPage />;
  if (pageLoader) return <CircleLoader />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Navbar />
      <div className="mt-[100px] space-y-0.5 md:space-y-2 px-4 md:!mx-[100px]">
        <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">
          观看历史
        </h2>
        <Row
          className="mb-[100px] "
          gutter={{
            xs: 16,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          {watchHistory && watchHistory.length
            ? watchHistory.map((item, index) => (
              <Col key={index} xs={{ span: 12 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 3 }}  >
                <MediaItem
                  key={index}
                  media={item}
                  listView={true}
                />
                <span className="text-[#888]">
                  {item.watchTime}
                </span>
              </Col>
            ))
            : 'No favorites added'}
        </Row>
      </div>
    </motion.div>
  );
}
