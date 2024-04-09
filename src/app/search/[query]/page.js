"use client";

import CircleLoader from "@/components/circle-loader";
import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/context";
import { getVodList } from "@/utils";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import MediaItem from "@/components/media-item/index";

export default function Search() {
  const {
    searchResults,
    pageLoader,
    setPageLoader,
    setSearchResults,
  } = useContext(GlobalContext);

  const { data: session } = useSession();
  const params = useParams();

  useEffect(() => {
    // async function getSearchResults() {
    //   const tvShows = await getTVorMovieSearchResults("tv", params.query);
    //   const movies = await getTVorMovieSearchResults("movie", params.query);
    //   const allFavorites = await getAllfavorites(
    //     session?.user?.uid,
    //     loggedInAccount?._id
    //   );
    //   setSearchResults([
    //     ...tvShows
    //       .filter(
    //         (item) => item.backdrop_path !== null && item.poster_path !== null
    //       )
    //       .map((tvShowItem) => ({
    //         ...tvShowItem,
    //         type: "tv",
    //         addedToFavorites:
    //           allFavorites && allFavorites.length
    //             ? allFavorites
    //               .map((fav) => fav.movieID)
    //               .indexOf(tvShowItem.id) > -1
    //             : false,
    //       })),
    //     ...movies
    //       .filter(
    //         (item) => item.backdrop_path !== null && item.poster_path !== null
    //       )
    //       .map((movieItem) => ({
    //         ...movieItem,
    //         type: "movie",
    //         addedToFavorites:
    //           allFavorites && allFavorites.length
    //             ? allFavorites.map((fav) => fav.movieID).indexOf(movieItem.id) >
    //             -1
    //             : false,
    //       })),
    //   ]);
    //   setPageLoader(false);

    // }

    async function getSearchResults() {
      const res = await getVodList("", "", "0", params.query, "", "1", 999);
      console.log(res);
      setSearchResults(res.records);
      setPageLoader(false);
    }

    getSearchResults();
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
          Showing Results for {decodeURI(params.query)}
        </h2>
        <div className="grid grid-cols-5 gap-3 items-center scrollbar-hide md:p-2">
          {searchResults && searchResults.length
            ? searchResults.map((searchItem, index) => (
              <MediaItem
                key={index}
                media={searchItem}
                searchView={true}
              />
            ))
            : null}
        </div>
      </div>
    </motion.div>
  );
}
