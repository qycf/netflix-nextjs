"use client";
import './style.css'
import CircleLoader from "@/components/circle-loader";
import { GlobalContext } from "@/context";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState, useRef } from "react";
import { getVodDetail } from "@/utils/VodReq";

import {
    isHLSProvider,
    MediaPlayer,
    MediaProvider,
    Poster,
} from '@vidstack/react';


import {
    defaultLayoutIcons,
    DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';



export default function Player({ vodId, vod }) {
    let player = useRef(null);


    useEffect(() => {
        return player.current?.subscribe(({ paused, viewType }) => {
        });
    }, []);

    function onProviderChange(provider, nativeEvent) {
        if (isHLSProvider(provider)) {
            provider.config = {};
        }
    }

    function onCanPlay(detail, nativeEvent) {
        // ...
    }


    const [mediaDetails, setMediaDetails] = useState(null);
    const params = useParams();

    const { pageLoader, setPageLoader } = useContext(GlobalContext);

    useEffect(() => {
        async function getMediaDetails() {

            const vod = await getVodDetail(vodId)
            setMediaDetails(vod);
            setPageLoader(false);
        }

        getMediaDetails();

    }, [params]);


    // 处理格式化播放地址
    const vodPlayUrlChecker = (vodPlayUrl) => {
        if (!vodPlayUrl) {
            return;
        }
        const episodes = vodPlayUrl.split("$$$");
        const m3u8Urls = episodes
            .map(episode => episode.split("#").find(segment => segment.includes(".m3u8")))
            .filter(Boolean)
            .map(m3u8Segment => m3u8Segment.split("$")[1]);

        if (m3u8Urls.length > 0) {
            return m3u8Urls[0];
        }

    };

    if (pageLoader && mediaDetails === null) return <CircleLoader />;

    return (
        <MediaPlayer
            className="player h-full"
            title="Sprite Fight"
            src={vodPlayUrlChecker(mediaDetails?.vodPlayUrl)}
            crossOrigin
            playsInline
            onProviderChange={onProviderChange}
            onCanPlay={onCanPlay}
            ref={player}
        >
            <MediaProvider>
                <Poster
                    className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
                    src={mediaDetails?.vodPic}
                />

            </MediaProvider>
            <DefaultVideoLayout
                icons={defaultLayoutIcons}
                thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
            />

        </MediaPlayer>
    );
}
