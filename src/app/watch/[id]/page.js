import Player from '@/components/player';

import apiFetch from '@/utils/request';



export async function generateMetadata({ params: { id } }) {

  try {
    const res = await apiFetch(`/vod/detail?vodId=${id}`, {
      method: "GET",
    });

    const vod = await res.data.data;

    return {
      title: `正在观看：${vod.vodName}`,
      description: vod.vodBlurb,
    }
  }
  catch (e) {
    return {
      title: '出错了，找不到视频',
      description: '出错了，找不到视频出错了，找不到视频出错了，找不到视频出错了，找不到视频',
    };
  }

}



export default function Watch({ params: { id } }) {

  return (
    <>
      <Player vodId={id} />
    </>
  )


}
