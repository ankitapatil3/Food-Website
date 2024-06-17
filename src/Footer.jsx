import React from "react";
import "./Footer.css";
import { NavLink, Outlet } from "react-router-dom";
function Footer(){
    return(
        <>
            <div className='foot'>
      <div className='fbar'>

        <div ><NavLink index to="/" className="logo">Hommy <span className="logo2">Food</span></NavLink>
        <p className="pclass"> &nbsp; &nbsp; &nbsp;@2023 AP Technologies Pvt. Ltd.</p></div>

        <div>
        <p className="head">Company</p>
        <p className="pclass">About</p>
        <p className="pclass">Career</p>
        <p className="pclass">Teams</p>
        <p className="pclass">Swiggy One</p>
        </div>
        <div>
            <p className="head">Help & Support</p>
            <p className="pclass">Company</p>
            <p  className="pclass">Partner with Us</p>
            <p  className="pclass">Ride With Us</p>
        </div>
        <div>
            <p className="head">We Deliver To:</p>
            <p  className="pclass">Banglore</p>
            <p  className="pclass">Pune</p>
            <p  className="pclass">Solapur</p>
        </div>
      </div>
      </div>
      <Outlet/>
        </>
    )
}

export default Footer;