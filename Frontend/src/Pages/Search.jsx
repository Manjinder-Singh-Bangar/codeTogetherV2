import React from 'react'
import Search from '../Components/Search.jsx'
import ConnectionSuggestion from '../Components/ConnectionSuggestion.jsx'
import { useSelector } from 'react-redux'
import { getAllUsers, getError } from '../features/user/userSlice.js'

const SearchPage = () => {
  const users = useSelector(getAllUsers)
  const error = useSelector(getError)

  const renderUsers = Array.isArray(users?.[0]) ? users[0].map((item) => (
    <ConnectionSuggestion key={item.id} user={item} />
  )) : null;

  if (error) return <p>{error}</p>

  return (
    <section className='bg-[#0b1120] py-6 flex flex-col items-center justify-around w-full min-h-screen max-h-fit'>
      <div className='w-full bg-[#0b1120] p-6 flex sticky top-0 justify-center'>
        <Search />

      </div>
      <section className='text-white mt-6 flex flex-col gap-6 items-center'>
        <h1 className='text-white font-bold text-2xl'>People you might want to follow</h1>
        <section>
          {renderUsers}
        </section>
      </section>
    </section>
  )
}

export default SearchPage