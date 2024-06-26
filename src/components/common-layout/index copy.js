// "use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../navbar";
import MediaRow from "../media-row";
import Banner from "../banner";

export default function CommonLayout({ mediaData }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Netflix Clone</title>
        {/* to do -> to add all other properties */}
      </Head>
      <>
        <Navbar />
        <div className="relative pl-4 pb-24 lg:space-y-24">
          {/* <Banner
            medias={mediaData && mediaData.length ? mediaData[0].medias : []}
          /> */}
          <Banner
            medias={mediaData?.levelMovies}
          />
          <section className="md:space-y-16">
            {mediaData?.mediasData && mediaData?.mediasData.length > 0 &&
              mediaData?.mediasData.map((item, index) => (
                <MediaRow key={index} title={item.title} medias={item.medias.records} />
              ))
            }
          </section>
        </div>
      </>
    </motion.div>
  );
}
