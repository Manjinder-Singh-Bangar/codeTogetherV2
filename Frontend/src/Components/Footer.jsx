import React, {useEffect} from 'react'
import ConnectionSuggestion from './ConnectionSuggestion'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers, getError } from '../features/user/userSlice'
import { getAllUsers, getStatus } from '../features/user/userSlice'


const Footer = () => {
  const auth = useSelector((state) => state.auth.accessToken)
  const users = useSelector(getAllUsers)
  const error = useSelector(getError)
  const userReqStatus = useSelector(getStatus)
  const dispatch = useDispatch();
  let renderUsersAll;
  useEffect(() => {
    if (auth) {
      dispatch(fetchAllUsers())
    }
    
  }, [auth, dispatch])

  if (auth && userReqStatus === "successfull"){
    renderUsersAll = users[0].slice(0, 5).map((item, index) => {
      return (
        <ConnectionSuggestion key={index} user={item} />
      )
    })
  }

  if(error) return <p>{error}</p>
   
  if (!users[0]) return <p>No user data available.</p>;

  return (
    <div className='w-[300px] relative'>
      <div className='justify-center items-center w-[300px] border-l-[1px] fixed top-0 flex flex-col text-white border-gray-600 h-screen bg-[#0b1120]'>
        
        <div className="suggestingContection items-center gap-3 flex flex-col">
          <h1 className='ml-6 font-bold w-fit text-2xl mb-6'>Make Friends</h1>
          {auth ? renderUsersAll : <Link className='border-2 hover:bg-white hover:text-black p-3 w-fit' to={"login"}>Login Please</Link>}
          <Link className='border-2 hover:bg-white hover:text-black p-3 w-fit' to={"search"}>View More</Link>
        </div>


        <div className='socialmedia-links mt-4 gap-3 flex'>
          <Link className='text-3xl'><FaFacebook /></Link>
          <Link className='text-3xl'><FaInstagram /></Link>
          <Link className='text-3xl'><FaLinkedin /></Link>
        </div>

        <p className='ml-6 mt-6 text-xs'>© 2025 CodeTogether</p>
      </div>
    </div>
  )
}

export default Footer