import React from 'react';
import Of from "./Data/Of.json";
import Data from "./Data/Data.json";
import lunch from "./Data/lunch.json";
import ST from "./Data/ST.json";
import "./OurFood.css";
function OurFood() {
  return (
    <div className='ofcontainer'>
        <div>
            <h1 className='ofhead'>Our Food</h1>
        </div>

        <div >
            <h2 className='head1of'>&nbsp; Breakfast: </h2>
           
            <div className='breakclass'>
            {
                    Of.map((value)=>(
                        <div  key={value.id} className='ofcard'>
                            
                         <div><img src={value.image} alt="" className="ofimg"/>
                            </div>   
                            <div> <p className='ofname'>{value.name}</p>
                          
                            <p className='ofname ofname2'> ₹ {value.price}</p>
                            <button className="btpofb">Add to cart</button> </div>
                           
                            </div>
                    ))

            }
            </div>
          
        </div>

<br/>



        <div >
            <h2 className='head1of'>&nbsp;  Lunch: </h2>
           
            <div className='breakclass'>
            {
                    lunch.map((value)=>(
                        <div  key={value.id} className='ofcard'>
                            <img src={value.img} alt="" className="ofimg"/>
                            <p className='ofname'>{value.name}</p>
                            <p className='ofname ofname2'> ₹ {value.price}</p>
                            <button className="btpofb">Add to cart</button>
                            </div>
                    ))

            }
            </div>
          
        </div>

        <div >
         
            <h2 className='head1of'>&nbsp;  Snacks and Thali: </h2>
          
            <div className='breakclass'>
            {
                    ST.map((value)=>(
                        <div  key={value.id} className='ofcard'>
                            <div className='ofcard2'>
                            <img src={value.imga} alt="" className="ofimg"/>
                            <p className='ofname'>{value.name}</p>
                            <p className='ofname ofname2'> ₹ {value.price}</p>
                            <button className="btpofb">Add to cart</button>
                            </div>
                          
                            </div>
                    ))

            }
            </div>
          
        </div>
    </div>
  )
}

export default OurFood;