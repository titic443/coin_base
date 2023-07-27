import React from 'react'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {
  return (
    <div id='navbar'>
      <div className='flex justify-center items-center font-bold'>
      <FontAwesomeIcon className='text-6xl text-emerald-500' icon={faCoins} />
      <h1 className='text-4xl'>Coins<span className='text-emerald-500 text-4xl'>Search</span></h1>
      </div>
    </div>
  )
}

export default Navbar
