import React from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass, FaXmark } from 'react-icons/fa6'
import { useRef } from 'react'
import { useState } from 'react'

const Search = ({parentClass, inputClass}) => {
    const [inputData, setInputData] = useState("")
    const searchInput = useRef(null)
    
    const removeInputData = (e) => {
        e.preventDefault();
        setInputData("")

    }
  return (
    <div className={`flex relative gap-4 justify-start items-center  ${parentClass}`}>
        <input 
            ref={searchInput} 
            onChange={(e) =>{ setInputData(e.target.value)}} 
            value={inputData}
            className={`p-3 outline-none rounded-lg ${inputClass}`} type="text" placeholder='Search' 
        />
        <Link onClick={removeInputData} className={`cursor-pointer absolute right-[46px] p-4 rounded-r-lg bg-white ${!inputData ? "opacity-0": "opacity-100"} `}><FaXmark /></Link>
        <Link ><FaMagnifyingGlass color='white' className='text-3xl' /></Link>
    </div>
  )
}

export default Search