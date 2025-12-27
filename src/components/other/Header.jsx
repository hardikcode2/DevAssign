import React from 'react'
import {setLocalStorage} from '../../utils/LocalStorage'

const Header = (props) => {

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
        // window.location.reload()
      }

  return (
    <div className='flex items-center justify-between mb-6'>
        <div>
            <h1 className='text-3xl font-bold mb-1'>
                Hello, <span className='bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent'>{props?.data?.firstName || 'Admin'}</span>
            </h1>
            <p className='text-gray-400 text-sm'>Welcome back! 👋</p>
        </div>
        <button 
        onClick={logOutUser} 
        className='bg-gradient-to-r from-red-600 to-red-500 text-base font-medium text-white px-6 py-2.5 rounded-lg hover:from-red-500 hover:to-red-400 shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95'
        >
            Log Out
        </button>
    </div>
  ) 
}

export default Header