import React,{useState} from 'react'
import "../css/mainpage.css"
import logo from "../images/logo_.png"
import { IoMenu } from "react-icons/io5";
// import Iframe from 'react-iframe'
import {BiMenuAltRight} from "react-icons/bi"
import Carousel from "./Carousel";
// import Chatbox from "./ChatBox";

function Navbar(){
  const [menu, setMenu] = useState(false)
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
    const [shadow, setShadow] = useState(false)
    const checkShadow = () =>{
        if (!shadow && window.pageYOffset > 1){
            setShadow(true)    
         } else if (shadow && window.pageYOffset <= 1){
            setShadow(false)    
         }  
  }
    window.addEventListener('scroll', checkShadow)
    return(
        <div className="navbar" style={{boxShadow: shadow?'#dbdbdb 0vh 0vh 3vh':'none',backgroundColor: shadow?'#fff':'none'}}>
            <div><img onClick={scrollTop} src={logo} alt="brand logo" /></div>
            <div className="menu l">{menu?<BiMenuAltRight onClick={()=>setMenu(!menu)} />:<IoMenu onClick={()=>setMenu(!menu)} />}</div>
            <div className="links">
                <div className="nav_link">About Us</div>
                <div className="nav_link">Customer Reviews</div>
                <div className="nav_link">Gallery</div>
                <div className="nav_link">Contact Us</div>
                <div className="nav_link">Locate Us</div>
            </div>
            <div style={menu && window.innerWidth<551?{transform:'translateX(0vw)'}:{transform:'translateX(-100%)'}} className="mob_links">
            <div className="nav_link">About Us</div>
            <div className="nav_link">Customer Reviews</div>
            <div className="nav_link">Gallery</div>
            <div className="nav_link">Contact Us</div>
            <div className="nav_link">Locate Us</div>
            </div>
        </div>
    )
}

// function Loaction() {
//     return (
//       <div style={{ height: "80vh", width: "60vh" }}>
//         <Iframe
//           src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBtpCoYQ-cOKg9jmgtEsq84PfbP8BftMLA
//     &q=Commerce College, Commercial Point, 1st Floor, Kabita Mansion, Rajgarh Link Rd, near Guwahati, Chandmari, Guwahati, Assam"
//           width="450px"
//           height="450px"
//           className="myClassname"
//           display="initial"
//           position="relative"
//         />
//       </div>
//     );
// }

function MainPage() {

          return (
            <div className="mainpage-body">
              <Navbar />
              <div className="cms">
                <Carousel />
                {/* <Chatbox /> */}
              </div>
            </div>
          );
}

export default MainPage
