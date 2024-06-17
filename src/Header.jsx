import React, { useState } from "react";
// import "./Header.css";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link, Outlet } from "react-router-dom";
import { ImCross } from "react-icons/im";
function Header(){
  const [sideNav, setSidenav] = useState(false)
  console.log(sideNav)
    return(
    <>
      <div className="wrapper"> 
      {/* <ImCross className="cross" size={30} onClick={()=>(setSidenav(sideNav))} /> */}
      
        <NavLink index to="/" className="logo">Hommy <span className="logo2">Food</span></NavLink>  



     {/* <div className={sideNav? "menub submenub   submenub:hover" : "menu submenu submenu:hover"} onClick={()=>setSidenav(false)} > */}
     <div className={sideNav? "menuc wrapperc submenuc   submenub:hover" : "menu submenu submenu:hover"} onClick={()=>setSidenav(false)} >
     <NavLink index to="/"className="submenu">Home</NavLink>
     <Link to="/about" className="submenu">About</Link>
     <Link to="/ourfood" className="submenu">Our Food</Link>
     <Link  to="/signin" className="submenu">Sign In</Link> 
     </div>
    
     <div className="hicon">
     {sideNav? <ImCross size={40} className="cross" onClick={()=>(setSidenav(!sideNav))}/>: <GiHamburgerMenu size={50} className="hamburger" onClick={()=>(setSidenav(!sideNav))}/>} 
      {/* <div><GiHamburgerMenu className="hamburger" size={40} onClick={()=>setSidenav(!sideNav)}/></div> */}
      <div><IoCartOutline className="cart" size={40}  /></div>
      </div>
  


</div>
     
    <Outlet/>
    
    </>
        
      
     
   
 );
}
export default Header;