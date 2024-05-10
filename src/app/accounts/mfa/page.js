"use client"

import { useState } from 'react';
import { Row, Col } from 'antd';
import PinInput from 'react-pin-input';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation'

function MfaPage() {

    const { data: session, update: sessionUpdate } = useSession()




    const searchParams = useSearchParams()




    const type = searchParams.get('type')

    const [showNewPage, setShowNewPage] = useState(true);

    const [changeType, setChangeType] = useState('')

    const handleShowNewPage = async () => {

        const res = await fetch('/api/mfa', { method: 'POST' })

        const data = await res.json();
        if (data.success) {
            setShowNewPage(true);
        }

    };

    return (
        <div className="h-full  z-[999] bg-[#F2F2F2]">
            <div className="w-[50%]  text-black mx-auto h-full pt-[56px]">
                <div className="text-4xl text-[#333] pt-[42px]  gap-6 mx-auto text-center">
                    {showNewPage ? <NewMfaPage session={session} sessionUpdate={sessionUpdate} type={type} /> : <MfaMethod handleShowNewPage={handleShowNewPage} session={session} />}
                </div>
            </div>
        </div>
    );
}


const MfaMethod = ({ handleShowNewPage, session }) => {

    return (

        <div className="text-4xl text-[#333] pt-[42px]  gap-6 mx-auto text-center">
            <svg viewBox="0 0 64 76" className="w-24 h-24 mx-auto"><g fill="none" fillRule="nonzero"><path fill="#B3B3B3" d="M63.807 19.543c-.077-2.016-.077-3.955-.077-5.816a2.612 2.612 0 00-2.631-2.637C49.722 11.012 41.055 7.755 33.857.776c-1.006-1.009-2.708-1.009-3.714 0-7.198 6.98-15.865 10.236-27.164 10.236A2.612 2.612 0 00.347 13.65c0 1.861 0 3.8-.077 5.894-.387 19.155-.929 45.29 30.879 56.302.31.077.541.155.851.155.31 0 .62-.078.851-.155C64.66 64.833 64.117 38.698 63.807 19.543zM32 70.493C4.759 60.568 5.146 38.854 5.533 19.699c0-1.163.077-2.249.077-3.335C16.212 15.82 24.725 12.641 32 6.282c7.275 6.359 15.788 9.616 26.39 10.004 0 1.085 0 2.171.077 3.334.387 19.233.774 40.947-26.467 50.874z"></path><path fill="#E50914" d="M41.132 28.771l-12.77 12.796-5.494-5.506c-1.006-1.008-2.709-1.008-3.792 0-1.006 1.008-1.006 2.715 0 3.8l7.352 7.368c.542.542 1.16.775 1.857.775.697 0 1.393-.233 1.858-.775l14.704-14.735c1.006-1.008 1.006-2.714 0-3.8a2.59 2.59 0 00-3.715.077z"></path></g></svg>
            <div className="text-[#000] font-bold text-4xl my-4">
                我们先来确认您的身份。
            </div>
            <div className="text-[#4d4d4d]  text-xl my-4">
                在您更改任何内容之前，我们必须验证您的身份。
            </div>
            <div className='bg-white p-4 w-[50%] mx-auto  shadow-md rounded-md'>

                <Row gutter={[{ xs: 8 }, 8]} className='cursor-pointer' onClick={handleShowNewPage}>
                    <Col span={4} className='self-center'>
                        <EmailIcon />
                    </Col>
                    <Col span={19}  >
                        <div className="font-medium text-xl text-start text-black  flex-wrap justify-between items-center ">
                            <div className="mb-2 sm:mb-0 font-bold text-[#333]">
                                通过电子邮件发送代码
                            </div>
                            <div className=" text-base text-[#333]">
                                {session.user.email}
                            </div>
                        </div>
                    </Col>
                    <Col span={1} className='self-center'>
                        <ChevronRIcon />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const NewMfaPage = ({ session, type, sessionUpdate }) => {

    const [pin, setPin] = useState('');
    const [pinMsg, setPinMsg] = useState("");

    const router = useRouter()

    const checkPin = async () => {
        const res = await fetch(`/api/mfa?emailCode=${pin}`, { method: 'GET' })
        const data = await res.json();
        setPinMsg(data.message)
        if (data.code === 200) {
            session.emailVerified = true
            session.emailCode = pin
            sessionUpdate(session);
            router.push(`/accounts/${type}`)
        }
    }

    return (
        <div>
            <div className='text-[#e50914] font-black text-sm'>
                安全性检查
            </div>

            <h1 className='text-[#000] font-bold text-4xl my-4'>
                请检查电子邮件以取得验证码
            </h1>
            <div className='text-[#4d4d4d] text-xl'>
                请输入我们发送到 {session.user.email} 验证码，以便帮助我们保护您的帐户。
            </div>

            <PinInput
                length={6}
                initialValue=""
                onChange={(value, index) => {
                    setPin(value)
                }}
                type="numeric"
                inputMode="number"
                style={{ padding: '10px' }}
                inputStyle={{ width: '90px', height: '90px' }}
                onComplete={(value, index) => {
                    setPin(value)
                }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />

            <div className='text-[#4d4d4d] text-xl mt-4'>
                {pinMsg}
            </div>


            <button onClick={checkPin}
                className={`
            ${pin.length == 6 ? 'bg-[#E50914] poinr' : 'bg-[#B3B3B3] pointer-events-none'} 

            block w-[50%]  mx-auto text-white text-xl font-bold py-4 px-4 rounded-lg my-4`
                }>
                {pin.length == 6 ? '验证' : '输入代码以继续'}
            </button>

            <div className="text-sm text-[#777]">
                没有收到?
                <a className="text-[#0080ff] cursor-pointer text-base">重新发送</a>
            </div>



        </div>
    )
}


const EmailIcon = () => {

    return (
        <svg viewBox="0 0 54 36" className="w-10 h-10 "><g id="Round-4---WEB" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="EDR-page-nopreviousrequests-Copy-3" transform="translate(-485.000000, -161.000000)" stroke="#E50914" strokeWidth="3"><g id="email" transform="translate(487.000000, 163.000000)"><rect x="0.416666667" y="0.416666667" width="50.0555556" height="31.1666667" rx="3"></rect><g transform="translate(1.000000, 0.000000)" strokeLinejoin="round"><polyline points="49.2318811 0.416666667 24.4444444 20.7777754 0.657007774 0.416666667"></polyline></g></g></g></g></svg>
    )
}

const ChevronRIcon = () => {

    return (
        <svg fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    )
}

export default MfaPage;