import React, { useEffect, useState } from "react";
import "./Slider.css";
// import img1 from "../assets/sa1.jpg";

import img2 from "./assets/pulav.jpg";

import img1 from "./assets/dosa.jpg";
import img3 from "./assets/mix.jpg";



import { FaAngleLeft ,FaAngleRight} from "react-icons/fa";

function Slider(){
  const data = [img1,img2,img3]
  const [slider, setSlider]= useState(0)
  function handlePlus(){
setSlider(slider=== data.length-1 ?0 :slider+1)
  }
  function handleMinus(){
    setSlider(slider===0?data.length-1: slider-1)
  }
  useEffect(()=>{
   const sliderclear=  setInterval(() => {
      handlePlus()
    }, 3000)
 return ()=> clearInterval(sliderclear)
  },[slider])
  return(
    < div className="mains" onClick={()=>{setsidenav(false)}}>
          
      {
        data.map((img,i)=>(
          <div className={`slider-img ${slider == i ? "block":"hidden"}`} key={i}>
          {/* <h1>This is Slider.</h1> */}
          
          <img src={img} alt=""style={{height:"70vh", width:"100%", backgroundposition:"center" , backgroundSize:"cover" ,  borderRadius:"2%"}} />
         
          
      <div className="btn"> 
     
            {/* <button onClick={handlePlus}>+ </button> */}
<FaAngleLeft className="left" onClick={handlePlus} size={30}/>
<p className="decorate">  Always Welcome! Brings People Together!</p>
<FaAngleRight  className="right" onClick={handleMinus} size={30}/>

          </div>
         
          </div>
        )
         )
      }
   
      </div>
    

  )
}
export default Slider;