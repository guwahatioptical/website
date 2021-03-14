import React,{useState} from 'react'
import "../css/mainpage.css"
import logo from "../images/logo_.png"
import { IoMenu } from "react-icons/io5";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaFacebookF, FaRegAddressCard } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import Iframe from 'react-iframe'
import {BiMenuAltRight} from "react-icons/bi"
import Carousel from "./Carousel";
import Reviews from './Reviews'
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
                <div className="nav_link">Customer Reviews</div>
                <div className="nav_link">Brands</div>
                <div className="nav_link">Gallery</div>
                <div className="nav_link">Opening Hours</div>
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

function Location() {
    return (
      <div className="locate-container">
        <h3 className="heading">Locate Us</h3>
        <Iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBtpCoYQ-cOKg9jmgtEsq84PfbP8BftMLA
    &q=Commerce College, Commercial Point, 1st Floor, Kabita Mansion, Rajgarh Link Rd, near Guwahati, Chandmari, Guwahati, Assam"
          className="locate"
          display="initial"
        />
      </div>
    );
}

function AboutUs() {
  return (
    <div className="aboutus-container">
      <h3 className="heading">About Us</h3>
    <div className="aboutus">
      We are dedicated to providing you with the highest standards
      of professional eye care, together with a friendly service, quality
      products and excellent value. As an established independent opticians, we
      are free to select the best products from any manufacturer. This means we
      are able to offer you a wide choice of eyewear with quality frames. Our
      commitment to quality extends to the people who look after your eyesight.
      {/* At our practice your eyes will be examined by a qualified optometrist,
      while your spectacle or contact lenses will be provided by fully trained
      dispensing staff. You will always receive professional advice on your
      vision and on choosing the best products for your needs, appearance and
      lifestyle. */}
    </div></div>
  );
}

function ContactDetails() {
  return (
    <div className="footer">
      <h3 className="footer-heading">Get in Touch</h3>
      <div className="contact-details-body">
        <div className="socialbar">
          <div title="@guwahatioptical" className="icon">
            <a
              href="https://www.facebook.com/guwahatioptical/?ti=as"
              target="blank"
            >
              <FaFacebookF />
            </a>
          </div>
          <div title="@guwahatioptical" className="icon">
            <a href="https://www.instagram.com/guwahatioptical/" target="blank">
              <SiInstagram />
            </a>
          </div>
        </div>
        <div className="details">
          <div className="address">
            <h4>
              <FaRegAddressCard /> Visit Us
            </h4>
            <p>
              Commerce College, Commercial Point, 1st Floor, Kabita Mansion,
              Rajgarh Link Rd, near Guwahati, Chandmari, Guwahati, Assam 781003
            </p>
          </div>
          <div className="mail">
            <h4>
              <IoMdMail /> Mail Us
            </h4>
            <a href="mailto:guwahatioptical0@gmail.com">
              guwahatioptical0@gmail.com
            </a>
          </div>
          <div className="call">
            <h4>
              <IoMdCall /> Call Us
            </h4>
            <a href="tel:75760 98413">75760 98413</a>
          </div>
        </div>
        <div className="copyright">
          <img src={logo} alt="logo" />
          <div>@ All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

function MainPage() {

          return (
            <div className="mainpage-body">
              <Navbar />
              <Carousel className="start" />
              <Reviews />
              <AboutUs />
              <Location />
              <div className="endname"></div>
              <ContactDetails />
                {/* <Chatbox /> */}
            </div>
          );
}

export default MainPage
