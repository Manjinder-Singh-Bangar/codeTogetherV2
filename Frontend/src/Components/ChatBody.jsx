import React, { useEffect, useRef } from 'react'
import MessageRecieve from './MessageRecieved'
import MessageSent from './MessageSent'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch, } from 'react-redux'
import { getSelectedUserId, fetchMessages, getChat, getError, getChatStatus } from '../features/chat/chatSlice'
import { formatTime } from '../Utils/chat'

const ChatBody = () => {
  const dispatch = useDispatch()
  const chat = useSelector(getChat)
  const status = useSelector(getChatStatus)
  const error = useSelector(getError)
  const chatContainerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedUserId = searchParams.get("user")


  useEffect(() => {
    if (selectedUserId) {
      console.log(selectedUserId)
      dispatch(fetchMessages(selectedUserId))
    }
  }, [selectedUserId, dispatch])

  useEffect(() => {
    // Scroll to the top after rendering the last message
    if (chatContainerRef.current) {
      const length = chatContainerRef.current.childNodes.length
      const lastMessageRef = chatContainerRef.current.childNodes[length - 1]
      if(lastMessageRef){
        lastMessageRef.scrollIntoView({ behavior: "smooth", block: "end" })

      }
      
    }
  }, [chat])


  if(status == "pending") return <p>Loading...</p>

  if(error) return <p>{error}</p>


  return (
    <div className='text-white relative overflow-y-scroll h-[100%]'>
        <div ref={chatContainerRef} className='h-fit p-2 flex flex-col gap-3 w-full absolute'>
          {/* Map through the chat array and render the appropriate message */}
        {status === "successfull" ? (
          chat.map((message) => {
            const isSent = message.senderId === selectedUserId;
            return isSent ? (
              <MessageSent
                key={message._id}
                message={message.text}
                time={formatTime(message.createdAt)}
              />
            ) : (
              <MessageRecieve
                key={message._id}
                message={message.text}
                time={formatTime(message.createdAt)}
              />
            );
          })
        ) : (
          <p>No messages to display</p>
        )}
            
        </div>
    </div>
  )
}

export default ChatBody