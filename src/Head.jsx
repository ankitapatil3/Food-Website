import { Link, NavLink } from "react-router-dom";
import "./Head.css";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
function Head(){
    
const [sideNav, setSideNav]= useState(false)
    return(
        <div  className="headmain">
          <Link index to="/" className="logo">Hommy <span className="logo2">Food</span></Link>

        {/* <nav className={!sideNav? "nava": "navb submenub hbb"} onClick={setSideNav(!sideNav)} > */}
       <nav className= {sideNav? "nava" :"nav"} onClick={()=>setSideNav(true)}>
       {/* <nav className="nav"> */}
            <NavLink to="/" className="submenu">Home</NavLink>
            <NavLink to="/about" className="submenu">About</NavLink>
            <NavLink to="/ourfood" className="submenu"> Our Food</NavLink>
            <NavLink to="/signin" className="submenu">Sign In</NavLink>
        </nav>
        <div className="icons" > 
       
       {!sideNav? <div className="hb" onClick={()=>(setSideNav(!sideNav))} ><GiHamburgerMenu size={40}/>
        </div> : <div className="hb" onClick={()=>(setSideNav(!sideNav))}> <RxCross1 size={40} /></div>}
       
       </div>

        {/* <div className="hb">
       
<GiHamburgerMenu size={40}/>
        </div>  */}
         <div className="cart">
      
 <IoCartOutline size={40} />
        </div> 
        </div>
        
    )
}
export default Head;
