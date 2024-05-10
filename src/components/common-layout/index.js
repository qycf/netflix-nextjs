"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../navbar";
import MediaRow from "../media-row";
import Banner from "../banner";
import { Col, Row } from "antd";

export default function CommonLayout({ mediaData }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <>
        <Navbar />
        <Banner
          medias={mediaData?.levelMovies}
        />
        <Row
          className="md:space-y-16 mb-[100px] md:!mx-[100px]"
          gutter={{
            xs: 16,
            sm: 16,
            md: 24,
            lg: 32,
          }}>
          {mediaData?.mediasData && mediaData?.mediasData.length > 0 &&
            mediaData?.mediasData.map((item, index) => (
              <Col key={index} span={24}>
                <MediaRow key={index} title={item.title} medias={item.medias.records} />
              </Col>
            ))
          }
        </Row>
      </>
    </motion.div >
  );
}
