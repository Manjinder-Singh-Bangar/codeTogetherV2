import React from 'react'

const ConnectionSuggestion = () => {
    return (
        <div className="profile px-6 py-3 gap-6 flex items-center w-fit ">
            <div className="right-side gap-2 flex items-center">
                <img className='rounded-full w-10 h-10' src="https://images.unsplash.com/photo-1541752171745-4176eee47556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="details">
                    <h3 className='font-semibold'>Full Name</h3>
                    <p className='text-xs'>Occupation</p>
                </div>
            </div>
            <div className="right-side">
                <button className='border-gray-400 border-2 hover:bg-gray-200 transition-colors rounded-lg hover:text-[#0b1120] p-2'>Connect</button>
            </div>
        </div>
    )
}

export default ConnectionSuggestion