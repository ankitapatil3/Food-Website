import React from "react";
import "./About.css";
function About() {
    return (
        <div className="aboutcontainer">
            <div className="aboutfirst">
                <h1>Driving the force of <span className="abouthead">assortment </span></h1>
                <p className="abouttwo">For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information
                    for our customers, we enable them to make an informed choice.</p>
            </div>
            <div className="about" >
                <div className="aboutp1" ><h1><span className="aboutspan">Who</span> are we?</h1>
                    <p className="abouttwo abouttwoo">Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, 
                        serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery,
                         book a table and make payments while dining-out at restaurants. 
                        On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement 
                        solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p></div>
                <div  className="imgabout  aboutp2" ><img src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt=""className="imgabout"/></div>
            </div>
        </div>
    )

}
export default About;