import React,{useState} from 'react'
import "../css/mainpage.css"
import logo from "../images/logo_.png"

function Navbar(){
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
            <div className="links">
                <div className="nav_link">About Us</div>
                <div className="nav_link">Customer Reviews</div>
                <div className="nav_link">Our Products</div>
                <div className="nav_link">Contact Us</div>
                <div className="nav_link">Opening Hours</div>
                <div className="nav_link">Locate Us</div>
            </div>
        </div>
    )
}

function MainPage() {

          return (
        <div className="mainpage-body">
            <Navbar />
            <div className="cms">
           
            </div>
        </div>
    )
}

export default MainPage
