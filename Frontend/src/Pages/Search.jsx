import React from 'react'
import Search from '../Components/Search.jsx'
import ConnectionSuggestion from '../Components/ConnectionSuggestion.jsx'

const SearchPage = () => {
  return (
    <section className='bg-[#0b1120] py-6 flex flex-col items-center justify-around w-full min-h-screen max-h-fit'>
      <Search />
      <section className='text-white flex flex-col gap-6 items-center'>
        <h1 className='text-white font-bold text-2xl'>People you might want to follow</h1>
        <ConnectionSuggestion />
        <ConnectionSuggestion />
        <ConnectionSuggestion />
        <ConnectionSuggestion />
      </section>
    </section>
  )
}

export default SearchPage