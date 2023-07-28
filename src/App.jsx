import React , { useState, useEffect } from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Coin from './routes/Coin.jsx';

function App() {
 //enable  
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common['Content-Type'] = 'application/json'; 
  // axios.create({headers:  { 'Access-Control-Allow-Origin': '*' }})
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'

  useEffect(()=> {
    axios.get(url)
    .then((response) => {
      setCoins(response.data)
      console.log(response.data)
    }).catch((error)=>{
      console.log(error)
    });
  }, [])

  return (
    <div id='root' className='font-sriracha box-border m-0 p-0 bg-gray-700 text-white '>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Coins coins={coins}></Coins>}></Route>
        {/* <Route path='/coins' element={<Coin/>}></Route>
        <Route path=':coinId' element={<Coin/>}></Route> */}
        <Route path='/coins' >
          <Route path=':coinId' element={<Coin/>}></Route>
        </Route>
      </Routes>
      {/* <Coins coins={coins}></Coins> */}
    </div>
  )
}

export default App
