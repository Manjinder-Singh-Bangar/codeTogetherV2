import React from 'react'
import MessageRecieve from './MessageRecieved'
import MessageSent from './MessageSent'

const ChatBody = () => {
  return (
    <div className='text-white relative overflow-y-scroll h-[100%]'>
        <div className='h-fit p-2 w-full absolute'>
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
            <MessageRecieve message={"hello"} time={"07:40pm"} />
            <MessageSent message={"hi"} time={"07:59pm"} />
        </div>
    </div>
  )
}

export default ChatBody