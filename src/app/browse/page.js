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





export default function Browse() {


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
      const scifiVods = await getVodList(1, "", "0", "", "", 1, 8);
      const actionVods = await getVodList(11, "", "0", "", "", 1, 8);

      setMediaData({
        levelMovies: levelMovies || [],
        mediasData: [
          {
            title: "全部热门推荐",
            medias: scifiVods || [],
          },

          {
            title: "动作",
            medias: actionVods || [],
          },
          {
            title: "科幻",
            medias: scifiVods || [],
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

  console.log(currentTime < givenTime);
  if (currentTime > givenTime) return <UnauthPage />;

  // if (loggedInAccount === null) return <ManageAccounts />;
  if (pageLoader) return <CircleLoader />;


  return (
    <main className="flex min-h-screen flex-col mb-[100px]">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}
