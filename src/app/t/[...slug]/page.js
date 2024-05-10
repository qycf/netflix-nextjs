"use client";

import CircleLoader from "@/components/circle-loader";
import CommonLayout from "@/components/common-layout";
import ManageAccounts from "@/components/manage-accounts";
import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/context";

import {
  getAllfavorites,
  getPopularMedias,
  getTopratedMedias,
  getTrendingMedias,
  getVodLevel,
  getVodList,
} from "@/utils";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";



export default function VodTypePage({ params: { slug } }) {


  const {
    loggedInAccount,
    mediaData,
    setMediaData,
    setPageLoader,
    pageLoader,
  } = useContext(GlobalContext);

  const { data: session } = useSession();


  useEffect(() => {
    async function getAllMedias() {
      const levelMovies = await getVodLevel(1);
      const hotVods = await getVodList("", slug, "0", "", "", 1, 8);
      const latestVods = await getVodList("", slug, "0", "", "", 1, 99);
      setMediaData({
        levelMovies: levelMovies || [],
        mediasData: [
          {
            title: "热门推荐",
            medias: hotVods || [],
          },
          {
            title: "最近更新",
            medias: latestVods || [],
          },
        ],
      });
      setPageLoader(false);
    }

    getAllMedias();
  }, []);

  if (session === null) return <UnauthPage />;

  // 到期时间
  const givenTime = new Date(session?.user.planExpirationTime);
  const currentTime = new Date();

  if (currentTime > givenTime) return <UnauthPage />;

  // if (loggedInAccount === null) return <ManageAccounts />;
  if (pageLoader) return <CircleLoader />;


  return (
    <main className="flex min-h-f flex-col mb-[100px]">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}
