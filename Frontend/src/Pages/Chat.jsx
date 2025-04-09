import React, { useEffect } from 'react'
import UserMessageCard from '../Components/UserMessageCard'
import { useDispatch, useSelector } from 'react-redux'
import { getError, getUser, fetchUserDetails, getStatus, getAllUsers, fetchAllUsers } from '../features/user/userSlice'
import ChatHeader from '../Components/ChatHeader';
import ChatBody from '../Components/ChatBody';
import ChatInput from '../Components/ChatInput';

const Chat = () => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.auth.userId)
    const userDetail = useSelector(getUser)
    const error = useSelector(getError)
    const allUsers = useSelector(getAllUsers)
    const status = useSelector(getStatus)
    
    useEffect(() => {
        if(userId){
            dispatch(fetchUserDetails(userId))
            
        }
        
    },[dispatch])

    if(!allUsers[0]){
        dispatch(fetchAllUsers())
    }
    
    if(status == "pending") return <p className='relative left-[68px]'>Loading...</p>
    
    if(error) return <p>{error}</p>
  return (
    <section className='relative overflow-y-hidden left-[68px] flex min-h-screen max-h-fit bg-[#0b1120]' style={{ width: "calc(100% - 68.08px)" }}>
        <section className='w-fit messageUser overflow-y-scroll gap-5 h-screen flex flex-col'>
            <div className='text-white bg-[#0b1120] w-full pt-10 pb-6 sticky top-0 gap-6 px-6 justify-between flex text-center'>
                <p>@{status === "pending" ? "Loading..." : userDetail?.username}</p>
                <h1>Messages</h1>
            </div>
            <div>
                {
                    allUsers[0].map((item) => {
                        return (
                            <UserMessageCard key={item._id} user={item} />
                        )
                    })
                }
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