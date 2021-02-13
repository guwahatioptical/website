import React,{useState} from 'react'
import "../css/mainpage.css"
import logo from "../images/logo_.png"
import {IoMenu} from "react-icons/io5"
import {BiMenuAltRight} from "react-icons/bi"

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
        <div className="navbar" style={{boxShadow: shadow?'#dbdbdb 0vh 0vh 3vh':'none'}}>
            <div><img onClick={scrollTop} src={logo} alt="brand logo" /></div>
            {window.innerWidth<551?
            <div className="menu l">{menu?<BiMenuAltRight onClick={()=>setMenu(!menu)} />:<IoMenu onClick={()=>setMenu(!menu)} />}</div>:
            <div className="links">
                <div className="nav_link">About Us</div>
                <div className="nav_link">Customer Reviews</div>
                <div className="nav_link">Gallery</div>
                <div className="nav_link">Contact Us</div>
                <div className="nav_link">Locate Us</div>
            </div>}
            <div style={menu && window.innerWidth<551?{transform:'translateX(0vw)'}:{transform:'translateX(-80vw)'}} className="mob_links">
            <div className="nav_link">About Us</div>
            <div className="nav_link">Customer Reviews</div>
            <div className="nav_link">Gallery</div>
            <div className="nav_link">Contact Us</div>
            <div className="nav_link">Locate Us</div>
            </div>
        </div>
    )
}

function Loaction() {
    return (
      <div style={{ height: "80vh", width: "60vh" }}>
        <a href="https://www.google.com/maps/place/26%C2%B010'48.4%22N+91%C2%B046'29.7%22E/@26.1796297,91.776054,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d26.1800995!4d91.7749023?hl=en">
          <img src="gghgjh" alt="map" />
        </a>
      </div>
    );
}

function MainPage() {

          return (
        <div className="mainpage-body">
            <Navbar />
            <div className="cms">
                <Loaction />
            </div>
        </div>
    )
}

export default MainPage
