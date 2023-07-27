import React from 'react'

const CoinItem = (props) => {
  return (
    // <div id='coin-rows' className=''>
      <div id={props.coins.id} class='coin-row' className='flex flex-row justify-between items-center bg-cyan-600 rounded-xl my-2 mx-1 py-2 px-3 font-bold hover:scale-105 duration-300 cursor-pointer'>
          <p>{props.coins.market_cap_rank}</p>
        <div className='flex items-center'>
          <img src={props.coins.image} alt="" className='h-12 m-2 w-auto'/>
          <p>{props.coins.symbol}</p>
        </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p id='hide-mobile' className='hidden lg:block'>${props.coins.total_volume.toLocaleString()}</p>
      <p id='hide-mobile' className='hidden lg:block'>${props.coins.market_cap.toLocaleString()}</p>
      </div>
    // </div>

  )
}

export default CoinItem
