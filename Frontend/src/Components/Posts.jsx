import React from 'react'
import { FaHeart, FaComment } from 'react-icons/fa6'

const Posts = () => {
  return (
    <div className="post text-gray-400 w-3/5 border-t-[1px] flex flex-col gap-2 border-gray-700 h-fit py-6">
      <div className="post-header gap-4 flex items-center">
        <img className='w-8 h-8 rounded-full' src="https://images.unsplash.com/photo-1541752171745-4176eee47556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h3>Author</h3>
      </div>

      <div className="post-body flex w-full gap-6 justify-between">
        <div className="body-text">
          <h1 className='text-xl font-semibold'>Post Heading</h1>
          <p> laboriosam corporis laborum aliquid quos quis, assumenda adipisci sapiente similique necessitatibus magnam soluta ea.</p>
        </div>
        <div className="post-thumbnail w-2/5">
          <img className='w-full' src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*3FtLa-nHJB8KOb-Wu9bqbg.png" alt="" />
        </div>
      </div>

      <div className="post-footer flex gap-6">
        <p>22 September 2023</p>
        <button className='flex gap-[5px] items-center'><FaHeart /> 22</button>
        <button className='flex gap-[5px] items-center'><FaComment /> 10</button>

      </div>
    </div>
  )
}

export default Posts