import React from 'react'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import App from '../App'


const Navbar = () => {
  return (
    <Link id='navbar' to={'/'} element={<App></App>}>
    {/* <Link id='navbar' to={'/'}> */}
      <div className='flex justify-center items-center font-bold pt-2'>
      <FontAwesomeIcon className='text-5xl text-emerald-500' icon={faCoins} />
      <h1 className='text-4xl'>Coins<span className='text-emerald-500 text-4xl'>Search</span></h1>
      </div>
    </Link>
  )
}

export default Navbar
