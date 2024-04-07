"use client";

import CircleLoader from "@/components/circle-loader";
import CommonLayout from "@/components/common-layout";
import ManageAccounts from "@/components/manage-accounts";
import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/context";
import { getAllfavorites, getTVorMoviesByGenre } from "@/utils";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { getVodList, getVodLevel } from "@/utils";

export default function VodTypePage({ params: { slug } }) {
  const { data: session } = useSession();
  const {
    loggedInAccount,
    mediaData,
    setMediaData,
    setPageLoader,
    pageLoader,
  } = useContext(GlobalContext);





  useEffect(() => {
    async function getAllMedias() {
      const levelMovies = await getVodLevel(1);
      const typeVodList = await getVodList("", slug, "0", "", "", 1, 10);

      setMediaData({
        levelMovies: levelMovies || [],
        mediasData: [
          {
            title: "热门推荐",
            medias: typeVodList || [],
          },
          {
            title: "最近更新",
            medias: typeVodList || [],
          },
        ],
      });
      setPageLoader(false);
    }

    getAllMedias();
  }, []);

  if (session === null) return <UnauthPage />;
  // if (loggedInAccount === null) return <ManageAccounts />;

  if (pageLoader) return <CircleLoader />;

  return (
    <main className="flex min-h-screen flex-col">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}
