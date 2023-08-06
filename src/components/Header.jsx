import React, { useContext } from 'react'
import userContext from '../context/userContext'

const Header = () => {
  const {user,logoutUser} = useContext(userContext)
  return (
    <div className='w-full px-4 flex justify-between items-center bg-slate-600 sticky top-0 '>
      <div className="flex items-center">
        <img className='w-[100px] rounded-full' src="src/assets/logo.jpg" alt="" />
        <h4 className=' text-white font-bold px-4'>COINS LAND</h4>
      </div>
      {user && 
      <button
      onClick={logoutUser} 
       className=' rounded-3xl text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center'>Exit</button>
      }
    </div>
  )
}

export default Header