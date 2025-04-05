import React from 'react'
import UserMessageCard from '../Components/UserMessageCard'

const Chat = () => {
  return (
    <section className='relative left-[68px] min-h-screen max-h-fit bg-[#0b1120]' style={{ width: "calc(100% - 68.08px)" }}>
        <section className='w-fit messageUser overflow-y-scroll gap-5 h-screen pt-10 flex flex-col'>
            <div className='text-white text-center'>
                <h1>Messages</h1>
                
            </div>
            <div>
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
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />
                <UserMessageCard />

            </div>
        </section>
    </section>
  )
}

export default Chat