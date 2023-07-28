import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Coin = () => {

  const param = useParams()

  const [coinId, setCoinId] = useState({})
  const url = `https://api.coingecko.com/api/v3/coins/${param.coinId}`

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response)
      setCoinId(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  },{})
  

  return (
    <div>
      <h1>{coinId.id}</h1>
    </div>
  )
}

export default Coin
