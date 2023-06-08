import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";


import "./Hotel.css"

function Hotel() {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/379464180.jpg?k=518fd7d96b9ecd96006ef65b2901341b956b4cf8aa79df111528c97d34eda23f&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/282905542.jpg?k=422edd1440187c4c8074c8fd1667f8df2b55645805dded63f2c55c19869c6000&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/282905801.jpg?k=84166effb74e4f8c4101cb95d92b197fb4464716b18a13ec3d87b6f4198c9d1d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/282903738.jpg?k=884ed59a0639bf85c2d593bdac649cfb350811ca628e13896381901b7e1b053b&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/218370524.jpg?k=f0a6f77732eee5186c4395a133ed9b6512394c8d38177056dd0561b176adddd9&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/258290584.jpg?k=814db399f716c2d04f6d667cc9a3137375d118f5fa76dcb9d04c0653ca349ae1&o=&hp=1"
        },
    ];

    const handleOpen = (i) =>{
        setSlideNumber(i);
        setOpen(true)
    };

    const handleMove = (direction) =>{
        let newSlideNumber;

        if(direction === "l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1;
        }
        setSlideNumber(newSlideNumber)
    }

  return (
    <div>
        <Navbar/>
        <Header type="list"/>
        <div className="hotelContainer">
            {open && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                <div className="sliderWrapper">
                    <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
            </div>}
            <div className="hotelWrapper">
                <button className="bookNow">Reserve</button>
                <h1 className="hotelTitle">Grand Hotel</h1>
                <div className="hotelAddress">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>Elton St 125 New york</span>
                </div>
                <span className="hotelDistance">
                    Excellent location -- 500m from center
                </span>
                <span className="hotelpriceHighlight">
                    Book a stay over $114 at this property and get a free airport taxi
                </span>
                <div className="hotelImages">
                    {photos.map((photo, i) =>(
                        <div className="hotelImgWrapper">
                            <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                        </div>
                    ))}
                </div>
                <div className="hotelDetails">
                    <div className="hotelDetailsTexts">
                         <h1 className="hotelTitle">Stay in the heart of London</h1>
                         <p className="hotlDesc">
                            Located beside St Paul’s Cathedral in London’s business district, this 4-star hotel features a fantastic pool and luxurious rooms.
                            Each elegant room at the Leonardo Royal Hotel London St Paul’s features a luxury bathroom with power shower, designer toiletries, and power hairdryers. Rooms offer a flat-screen TV with satellite channels, bathrobes and slippers, and free WiFi.
                            A full buffet breakfast is offered, and the bar and restaurant are fully open.
                            Rena health and fitness club features a fully equipped gym with TVs, personal trainers, and fitness classes. Rena spa offers a number of luxurious treatments, while guests can relax in the hot tub and sauna. The hotel also has 2 floors of meeting and events space.
                         </p>
                    </div>
                    <div className="hotelDetailsPrice">
                        <h1>Property Highlights</h1>
                        <span>Located in the heart of London, this hotel has an excellent location score of 9.3
                        Want a great night's sleep? This hotel was highly-rated for its very comfy beds.
                        </span>
                        <h2>
                            <b>$95</b> (9 night)
                        </h2>
                        <button>Reserve</button>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    </div>
  )
}

export default Hotel