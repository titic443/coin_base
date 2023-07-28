import React from 'react'
import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'

const Coins = (props, ) => {

  
  return (
    <div id='container' className='max-w-[95%] m-auto'>
      <div>
        {/* <div id='heading' className='flex flex-row justify-between items-center bg-cyan-600 rounded-xl my-2 mx-1 */}
        <div id='heading' className=' grid grid-cols-6 place-items-center bg-cyan-600 rounded-xl my-2 mx-1 max-lg:grid-cols-4'>
            <p className='ml-6'>#</p>
            <p id='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p id='hide-mobile' className='hidden lg:block'>Volume</p>
            <p id='hide-mobile' className='hidden lg:block'>Mkt Cap</p>
        </div>

            {props.coins.map((coin) => {
              return (
                <Link to={`/coins/${coin.id}`} key={coin.id} >
                <CoinItem coins={coin} key={coin.id}></CoinItem>
                </Link>
              )
            })}

      </div>
    </div>
  )
}

export default Coins
