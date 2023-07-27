import React from 'react'
import CoinItem from './CoinItem'

const Coins = (props, ) => {
  return (
    <div id='container' className='max-w-5xl m-auto'>
      <div>
        <div id='heading' className='flex flex-row justify-between items-center bg-cyan-600 rounded-xl my-2 mx-1
        py-2 px-3 font-semibold'>
            <p>#</p>
            <p id='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p id='hide-mobile' className='hidden lg:block'>Volume</p>
            <p id='hide-mobile' className='hidden lg:block'>Mkt Cap</p>
        </div>

            {props.coins.map((coin) => {
              return (
                <CoinItem coins={coin}></CoinItem>
              )
            })}

      </div>
    </div>
  )
}

export default Coins
