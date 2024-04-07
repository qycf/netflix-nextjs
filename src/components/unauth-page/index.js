/* eslint-disable @next/next/no-img-element */
"use client";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { use, useState, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/context";
import { getPlansList } from "@/utils/PlansReq";
import { Button, Form, Input, Modal, Radio, ConfigProvider } from 'antd';
import Checkout from "../checkout";
import dayjs from "dayjs";

const questions = [
  {
    ques: "What is Netflix?",
    ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
  },
  {
    ques: "How much does Netflix cost",
    ans: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`,
  },
  {
    ques: "What can I watch on Netflix?",
    ans: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    ques: "How do I cancel?",
    ans: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
  {
    ques: "What can I watch on Netflix?",
    ans: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
  },
  {
    ques: "Is Netflix good for kids?",
    ans: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  },
];




export default function UnauthPage() {

  const router = useRouter();
  const [plansList, setPlansList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);
  const targetDivRef = useRef(null);

  useEffect(() => {
    getPlansList().then((res) => {
      setPlansList(res);
    });

  }, []);

  const { data: session } = useSession();
  const {
    setPageLoader,
    setLoggedInAccount,
  } = useContext(GlobalContext);

  const [showCurrentAns, setShowCurrentAns] = useState(null);
  const [outTradeNo, setOutTradeNo] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <main>
        <div className="bg-[#000000]">
          <UnauthBanner targetDivRef={targetDivRef} router={router} session={session} setPageLoader={setPageLoader} setLoggedInAccount={setLoggedInAccount} />
          <Pricing setOutTradeNo={setOutTradeNo} targetDivRef={targetDivRef} session={session} plansList={plansList} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setCurrentPlan={setCurrentPlan} />
          <PayModal outTradeNo={outTradeNo} session={session} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currentPlan={currentPlan} />
          <div className="border-b-8 border-gray-800 pb-8">
            <div className="flex flex-col h-[85vh] lg:h-[95vh] text-white px-8 sm:px-14 md:px-28 lg:px-48 xl:px-80 mt-3 sm:mt-14">
              <h1 className="mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-bold text-center px-14 md:px-0">
                Frequently asked questions
              </h1>
              {questions.map((item, index) => (
                // 添加了 key 属性
                <div key={index} className="flex flex-col gap-3">
                  <div
                    onClick={() => setShowCurrentAns(showCurrentAns === index ? null : index)}
                    className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer"
                  >
                    <h2>{item.ques}</h2>
                    <PlusIcon className="h-7 w-7" color="white" />
                  </div>
                  {showCurrentAns === index && (
                    <div className="p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer">
                      {item.ans}
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

function Pricing({
  plansList,
  isModalOpen,
  setIsModalOpen,
  setCurrentPlan,
  session,
  targetDivRef,
  setOutTradeNo

}) {

  return (
    <>
      <div ref={targetDivRef} className="flex flex-col items-center justify-center text-white text-center gap-4 mt-2">
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
                订阅计划
              </h2>
              <p className="mb-5 font-light  sm:text-xl ">
                以超低价格在 Netflix 畅享所有影视作品。
                在您的所有设备上不限时观看。
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {plansList && plansList.map((item, index) => (
                <div key={index} className="w-[300px] flex flex-col justify-between p-6 mx-auto max-w-lg text-center text-white bg-[#18181B] rounded-lg shadow" style={{ height: '100%' }}>
                  <div>
                    <h3 className="mb-4 text-2xl font-semibold">{item.planName}</h3>
                    <p className="font-light sm:text-lg ">尊享各类影视</p>
                    <div className="flex justify-center items-baseline my-8">
                      <span className="mr-2 text-5xl font-extrabold">¥{item.planPrice}</span>
                      <span className="text-gray-500 dark:text-gray-400">/{item.planDurationDays}天</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                      {
                        item.planDescription.split(',') && item.planDescription.split(',').map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            <span>{feature}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div onClick={
                    () => {
                      // 如果没有登录，就跳转到登录页面
                      if (session?.user === undefined || session?.user === null) {
                        window.location.href = "/signin";
                      } else {
                        setOutTradeNo(dayjs().format("YYYYMMDDHHmmss") + Math.floor(Math.random() * 10));
                        setCurrentPlan(item);
                        setIsModalOpen(true);
                      }
                    }
                  } className="text-white hover:cursor-pointer bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                    购买
                  </div>
                </div>

              ))
              }
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

function PayModal(
  {
    session,
    isModalOpen,
    setIsModalOpen,
    currentPlan,
    outTradeNo

  }
) {
  // const [isModalOpen, setIsModalOpen] = useState(false);


  const payParams = {
    name: "测试商品",
    money: "1",
    money: "9.9",
    planDescription: "1,2,3",
    planDurationDays: "30天"

  }

  const [payMethod, setPayMethod] = useState("alipay");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  return (

    <>

      <Modal
        closable={false}

        open={isModalOpen}
        // onOk={handleOk}
        // onCancel={handleCancel}
        // okText="确认支付"
        footer={null}
      >
        {/* <Form layout="vertical">
          <Form.Item
            label="支付方式"
            name="account"
          >
            <ConfigProvider
              theme={{
                components: {
                  Radio: {
                    buttonSolidCheckedBg: "#e50914",
                    buttonSolidCheckedHoverBg: "#e50914",
                    buttonSolidCheckedActiveBg: "#e50914",
                  },
                },
              }}
            >
              <Radio.Group value={payMethod} buttonStyle="solid" size="large"
                onChange={(e) => setPayMethod(e.target.value)}
              >
                <Radio.Button value="alipay">
                  支付宝
                </Radio.Button>
                <Radio.Button value="wxpay"
                >微信
                </Radio.Button>
              </Radio.Group>
            </ConfigProvider>
          </Form.Item>
          <Form.Item
            label="用户名"
            name="username"
            initialValue={session?.user?.username}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="email"
            initialValue={session?.user?.email}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item>
            <div className=" float-right">
              总共：
              <span className="font-bold">
                {payParams.money}
              </span>元
            </div>
          </Form.Item>
        </Form> */}
        <Checkout
          plan={payParams}
          user={session?.user}
          setIsModalOpen={setIsModalOpen}
          currentPlan={currentPlan}
          outTradeNo={outTradeNo}
        />
      </Modal >



    </>
  );
}


function UnauthBanner({
  router,
  session,
  setPageLoader,
  setLoggedInAccount,
  targetDivRef
}) {


  return (
    <>
      <div className="h-[65vh] sm:h-[90vh] xl:h-[72vh] bg-cover bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/e3b08071-f218-4dab-99a2-80315f0922cd/LK-en-20221228-popsignuptwoweeks-perspective_alpha_website_small.jpg')] border-b-8 border-gray-800  ">
        <div
          className="bg-black bg-opacity-70 h-[100vh]
    "
        >
          <div className="flex items-center justify-between ">
            <img
              src="https://rb.gy/ulxxee"
              alt="netflix"
              width={120}
              height={120}
              className="w-28 sm:w-36 lg:w-52 ml-4 sm:ml-8 pt-4"
              onClick={() => router.push("/")}
            />
            <div className="flex mr-4 sm:mr-10">
              <button
                onClick={
                  () => {
                    if (session?.user === undefined) {
                      signIn("Credentials");
                    } else {
                      setPageLoader(true);
                      signOut();
                      setLoggedInAccount(null);
                      sessionStorage.removeItem("loggedInAccount");
                    }
                  }
                }
                className="h-8 px-1 sm:px-4 m-2 text-white bg-[#e50914] rounded"
              >
                {session?.user === undefined ? '登录' : '注销'}
              </button>
            </div>
          </div>
          <div className="gap-2 h-[60vh]  w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] flex flex-col items-center justify-center text-white text-center">

            {/* 如果session.user存在，则渲染session.user.username */}
            {session?.user && (
              <p className=" font-normal text-2xl">
                {session?.user?.username}，欢迎回来！
              </p>
            )}

            <h1 className="text-2xl sm:text-4xl lg:text-5xl  sm:px-[15%] md:px-[15%] lg:mx-14 lg:px-[7%] xl:px-[15%] font-black">
              无限量的电影、电视节目，以及更多精彩内容
            </h1>
            <h2 className="text-lg sm:text-1xl lg:text-2xl font-normal m-2 sm:m-4">
              随时随地观看
            </h2>
            <div className="flex  justify-center">
              <button
                onClick={() => {
                  targetDivRef.current.scrollIntoView({
                    behavior: 'smooth'  // 实现平滑滚动
                  });
                }
                }
                className="bg-red-600 hover:bg-[#e50914] p-4 rounded text-2xl"
              >
                {session?.user ? '重新订阅计划' : '查看订阅计划'}
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}