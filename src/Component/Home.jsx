import React from 'react'
import Delivery from '../Delivery';
import Toppicks from '../Toppicks';
import Header from '../Header';
import Slider from '../Slider';



function Home() {
  return (
    <div className='home'>
    {/* <Header/> */}
  <Slider/>
    <Delivery/>
    <Toppicks/>
    </div>
  )
}

export default Home;