import React, { useEffect } from 'react'
import UserMessageCard from '../Components/UserMessageCard'
import { useDispatch, useSelector } from 'react-redux'
import { getError, getUser, fetchUserDetails, getStatus } from '../features/user/userSlice'
import ChatHeader from '../Components/ChatHeader';
import ChatBody from '../Components/ChatBody';
import ChatInput from '../Components/ChatInput';

const Chat = () => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.auth.userId)
    const userDetail = useSelector(getUser)
    const error = useSelector(getError)
    const status = useSelector(getStatus)
    
    useEffect(() => {
        if(userId){
            dispatch(fetchUserDetails(userId))

        }

    },[dispatch])
    
    if(status == "pending") return <p className='relative left-[68px]'>Loading...</p>
    
    if(error) return <p>{error}</p>
  return (
    <section className='relative overflow-y-hidden left-[68px] flex min-h-screen max-h-fit bg-[#0b1120]' style={{ width: "calc(100% - 68.08px)" }}>
        <section className='w-fit messageUser overflow-y-scroll gap-5 h-screen pt-10 flex flex-col'>
            <div className='text-white px-6 justify-between flex text-center'>
                <p>@{status === "pending" ? "Loading..." : userDetail?.username}</p>
                <h1>Messages</h1>
            </div>
            <div>
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard customClass={"bg-gray-800"} />
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />

            </div>
        </section>
        <section className='h-full flex overflow-hidden flex-col flex-1'>
            <div className=''>
                <ChatHeader />

            </div>
            <div className='flex-[1]'>
                <ChatBody />
            </div>
            <div className='relative h-[82px] border-t-2 border-white'>
                <ChatInput />
            </div>
        </section>
    </section>
  )
}

export default Chat