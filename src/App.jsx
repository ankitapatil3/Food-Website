

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Head from './Head';
import Signin from './Component/Page/Signin';
import About from './Component/Page/About';
import Offers from './Component/Page/Offers';
// import Slider from './Slider';
import Footer from './Footer';
// import Delivery from './Delivery';
// import Toppicks from './Toppicks';
import OurFood from './OurFood';
import Home from './Component/Home';

function App() {
  

  return (
    <div div className='app'>
   
    {/* <Header/> */}
 <Head/>
 <Routes>
  <Route path="/*" element={<Home/>}/>
 
  <Route path="/ourfood" element={<OurFood/>}/>
  <Route path="/about" element={<About/>}/>
  
  <Route path="/signin" element={<Signin/>}/>
 </Routes>

 
{/* <OurFood/> */}


 <Footer/>

    </div>
  )
}

export default App;
