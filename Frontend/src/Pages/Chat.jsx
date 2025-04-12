import React, { useEffect } from 'react'
import UserMessageCard from '../Components/UserMessageCard'
import { useDispatch, useSelector } from 'react-redux'
import { getError, getUser, fetchUserDetails, fetchAllUsers, getStatus } from '../features/user/userSlice'
import ChatHeader from '../Components/ChatHeader';
import ChatBody from '../Components/ChatBody';
import ChatInput from '../Components/ChatInput';
import {
  fetchChatUsers,
  getChatUsers,
  getChatStatus,
  getRecieverUserStatus,
  getFriendsStatus,
} from '../features/chat/chatSlice';

const Chat = () => {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.auth.userId)
  const userDetail = useSelector(getUser)
  const error = useSelector(getError)
  const allUsers = useSelector(getChatUsers)
  const userStatus = useSelector(getStatus)
  const chatStatus = useSelector(getChatStatus)
  const receiverStatus = useSelector(getRecieverUserStatus)
  const friendsStatus = useSelector(getFriendsStatus)

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserDetails(userId))
    }
  }, [])

  useEffect(() => {
    dispatch(fetchChatUsers())
  }, [dispatch])

//   if (chatStatus === "pending") return <p className='relative left-[68px]'>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <section className='relative overflow-y-hidden left-[68px] flex min-h-screen max-h-fit bg-[#0b1120]' style={{ width: "calc(100% - 68.08px)" }}>
      <section className='w-fit messageUser overflow-y-scroll gap-5 h-screen flex flex-col'>
        <div className='text-white bg-[#0b1120] w-full pt-10 pb-6 sticky top-0 gap-6 px-6 justify-between flex text-center'>
          <p>@{userStatus === "pending" ? "Loading..." : userDetail?.username}</p>
          <h1>Messages</h1>
        </div>
        <div>
          {
            chatStatus === "pending" ? (
                <p className='relative left-[68px] text-white'>Loading chat users...</p>
            )
            :
            allUsers.map((item) => (
              <UserMessageCard key={item._id} user={item} />
            ))
          }
        </div>
      </section>
      <section className='h-full flex overflow-hidden flex-col flex-1'>
        <div>
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
