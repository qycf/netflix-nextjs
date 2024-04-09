"use client";

import { GlobalContext } from "@/context";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import MediaItem from "@/components/media-item/";
import CircleLoader from "@/components/circle-loader";
import UnauthPage from "@/components/unauth-page";
import { getVodList } from "@/utils/";
import { favoritesList } from "@/utils/VodReq";

export default function MyList() {
  const {
    favorites,
    setFavorites,
    pageLoader,
    setPageLoader,
    loggedInAccount,
  } = useContext(GlobalContext);


  const { data: session } = useSession();

  useEffect(() => {
    async function getAllMedias() {
      const scifiVods = await favoritesList();
      setFavorites(scifiVods.data);
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
      <div className="mt-[100px] space-y-0.5 md:space-y-2 px-4">
        <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">
          My List
        </h2>
        <div className="grid grid-cols-5 gap-3 items-center scrollbar-hide md:p-2">
          {favorites && favorites.length
            ? favorites.map((searchItem, index) => (
              <MediaItem
                key={index}
                media={searchItem}
                listView={true}
              />
            ))
            : 'No favorites added'}
        </div>
      </div>
    </motion.div>
  );
}
