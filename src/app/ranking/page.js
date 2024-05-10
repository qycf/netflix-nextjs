/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/components/navbar";
import { GlobalContext } from "@/context";
import { useContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useRouter } from "next/navigation";


function RankingPage() {

    const router = useRouter();

    const {
        pageLoader,
        setPageLoader,
    } = useContext(GlobalContext);

    const [hitsRanking, setHitsRanking] = useState([]);
    const [favoritesRanking, setFavoritesRanking] = useState([]);

    useEffect(() => {

        async function getHitsRankingData() {
            const res = await fetch('/api/vod/ranking?rankingType=hits', { method: 'GET' });
            const data = await res.json();
            setHitsRanking(data.data);
        }

        async function getFavoritesRankingData() {
            const res = await fetch('/api/vod/ranking?rankingType=favorites', { method: 'GET' });
            const data = await res.json();
            setFavoritesRanking(data.data);
        }

        getHitsRankingData();
        getFavoritesRankingData();

        setPageLoader(false);
    }, []);


    const watchVod = (vodId) => {
        location.href = `/watch/${vodId}`;
    };

    return (
        <>
            <Navbar />
            <div className="mt-[100px] space-y-0.5 md:space-y-2 px-4 md:!mx-[100px]">
                {/* <h2 className="cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl">
                    影片排名
                </h2> */}

                <Row className="mx-auto">
                    <Col span={6}>
                        <div className="bg-[#181818] shadow-md rounded-md p-4  max-w-sm mt-16">
                            <h2 className="text-xl font-semibold mb-4">最多播放</h2>
                            <ul>
                                {
                                    hitsRanking && hitsRanking.length && hitsRanking.map((item, index) => {
                                        return (
                                            <li className=" py-2 border-b border-[#666666]" key={index} >
                                                <Row>
                                                    <Col span={10}>
                                                        <div className="flex items-center">
                                                            <span className="text-lg font-semibold mr-4">{index + 1}</span>
                                                            <img
                                                                src={item.vodPic}
                                                                alt="User Avatar"
                                                                className="w-[100px] h-[175px] mr-4 cursor-pointer"
                                                                onClick={() => {
                                                                    watchVod(item.vodId)
                                                                }}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col span={14}>
                                                        <LabelRender name="名称" value={item.vodName} />
                                                        <LabelRender name="导演" value={item.vodDirector} />
                                                        <LabelRender name="主演" value={item.vodActor} className="line-clamp-2" />
                                                        {/* <LabelRender name="类型" value={item.vod.type} /> */}
                                                        <LabelRender name="简介" value={item.vodBlurb} className="line-clamp-2" />
                                                    </Col>
                                                </Row>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="bg-[#181818] shadow-md rounded-md p-4  max-w-sm mt-16">
                            <h2 className="text-xl font-semibold mb-4">最多收藏</h2>
                            <ul>
                                {
                                    favoritesRanking && favoritesRanking.length && favoritesRanking.map((item, index) => {
                                        return (
                                            <li className=" py-2 border-b border-[#666666]" key={index} >
                                                <Row>
                                                    <Col span={10}>
                                                        <div className="flex items-center">
                                                            <span className="text-lg font-semibold mr-4">{index + 1}</span>
                                                            <img
                                                                src={item.vod.vodPic}
                                                                alt="User Avatar"
                                                                className="w-[100px] h-[175px] mr-4 cursor-pointer"
                                                                onClick={() => {
                                                                    watchVod(item.vod.vodId)
                                                                }}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col span={14}>
                                                        <LabelRender name="名称" value={item.vod.vodName} />
                                                        <LabelRender name="导演" value={item.vod.vodDirector} />
                                                        <LabelRender name="主演" value={item.vod.vodActor} className="line-clamp-2" />
                                                        {/* <LabelRender name="类型" value={item.vod.type} /> */}
                                                        <LabelRender name="简介" value={item.vod.vodBlurb} className="line-clamp-2" />
                                                    </Col>
                                                </Row>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>




            </div>
        </>

    );


};
const LabelRender = ({ name, value, className }) => {
    return (
        <p>
            <span className="text-[#666666]">{name}：</span>
            <span className={`text-[#eee] ${className}`}>{value}</span>
        </p>
    );
};


export default RankingPage;


