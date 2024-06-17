import Slider from "react-slick";
import "./Toppicks.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./Data/Data.json";
function Toppicks(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1338,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   
    return(
        <>
        <div className="container" >
        <div className="headtp"> &nbsp; &nbsp; What's on your mind?</div>
            <div className="row">
            <Slider {...settings}>
            {
              Data.map((element,i)=>(
                <div  key={i} className="tpmain">
                    <div ><img src={element.imga} alt="" className="tppick2" /></div>
                    <div >
                    <p className="btp1">{element.name}</p>
                    <p className="btp2"> ₹ {element.price}</p>
                    <button className="btp">Add to cart</button>
                    </div>
                    
                    </div>
                   

              ))

            }
              </Slider>
                
        </div>
        </div>
        </>
    )
}
export default Toppicks;