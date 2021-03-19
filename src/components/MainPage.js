import React,{useState} from 'react'
import "../css/mainpage.css"
import { Link } from "react-scroll"
import AOS from "aos"
import 'aos/dist/aos.css'
import{
  logo,
  dkny,
  essilor,
  hoya,
  idee,
  prada,
  puma,
  RayBanCompany,
  silhovette,
  vogue,
  youngeroptics,
  g834,
  g856,
  g1244,
  g1248,
  g1256,
  g1260,
  g1264,
  g1317,
  g1321,
  g1325,
  g1329,
  g1333,
  g1337,
  g1389,
  g1393,
  g1397,
  g1401,
  g1405,
  g1451,
  g1455,
  g1459,
  g1463,
  g1467,
  g1471,
  g1475,
  g1479,
  g1480,
  g1485,
  g1491,
  g1494,
  g1498,
} from "../images/image";
import { IoMenu } from "react-icons/io5";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaFacebookF, FaRegAddressCard } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import Iframe from 'react-iframe'
import { MdKeyboardArrowLeft } from "react-icons/md";
import Carousel from "./Carousel";
import Reviews from './Reviews'
import Chatbox from "./ChatBox";

AOS.init();

function Navbar(){
  const [menu, setMenu] = useState(false)
    const [shadow, setShadow] = useState(false)
    const checkShadow = () =>{
        if (!shadow && window.pageYOffset > 1){
            setShadow(true)    
         } else if (shadow && window.pageYOffset <= 1){
            setShadow(false)    
         }  
  }
    window.addEventListener('scroll', checkShadow)
    return (
      <div
        className="navbar"
        style={{
          boxShadow: shadow ? "#dbdbdb 0vh 0vh 3vh" : "none",
          backgroundColor: shadow ? "#fff" : "none",
        }}
      >
        <Link to="home" spy={true} smooth={true}>
          <div onClick={() => setMenu(false)}>
            <img src={logo} alt="brand logo" />
          </div>
        </Link>
        <div className="menu l">
          {menu ? (
            <MdKeyboardArrowLeft onClick={() => setMenu(!menu)} />
          ) : (
            <IoMenu onClick={() => setMenu(!menu)} />
          )}
        </div>
        <div className="links">
          <Link to="gallery" spy={true} smooth={true}>
            <div className="nav_link">Gallery</div>
          </Link>
          <Link to="reviews" spy={true} smooth={true}>
            <div className="nav_link">Customer Reviews</div>
          </Link>
          <Link to="aboutus" spy={true} smooth={true}>
            <div className="nav_link">About Us</div>
          </Link>
          <Link to="location" spy={true} smooth={true}>
            <div className="nav_link">Locate Us</div>
          </Link>
          <Link to="timing" spy={true} smooth={true}>
            <div className="nav_link">Opening Us</div>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <div className="nav_link">Get in Touch</div>
          </Link>
        </div>
        <div
          style={
            menu && window.innerWidth < 551
              ? { transform: "translateX(0vw)" }
              : { transform: "translateX(-100%)" }
          }
          className="mob_links"
        >
          <Link to="gallery" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link">
              Gallery
            </div>
          </Link>
          <Link to="reviews" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link">
              Customer Reviews
            </div>
          </Link>
          <Link to="aboutus" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link">
              About Us
            </div>
          </Link>
          <Link to="location" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link">
              Locate Us
            </div>
          </Link>
          <Link to="timing" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link">
              Opening Hours
            </div>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link">
              Get in Touch
            </div>
          </Link>
        </div>
      </div>
    );
}

function Location() {
    return (
      <div id="location" className="locate-container">
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
    <div id="aboutus" className="aboutus-container">
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
    <div id="contact" className="footer">
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

function Gallery() {
  const images = [
    g834,
    g856,
    g1244,
    g1248,
    g1256,
    g1260,
    g1264,
    g1317,
    g1321,
    g1325,
    g1329,
    g1333,
    g1337,
    g1389,
    g1393,
    g1397,
    g1401,
    g1405,
    g1451,
    g1455,
    g1459,
    g1463,
    g1467,
    g1471,
    g1475,
    g1479,
    g1480,
    g1485,
    g1491,
    g1494,
    g1498,
  ];

  return (
    <div id="gallery" className="gallery">
      <div className="photos">
        <h3 className="heading">Gallery</h3>
        {images.map((image, index) => (
          <img data-aos="fade-up"
            style={{ margin: "1vh 2vw" }}
            key={index}
            src={image}
            alt="img"
          />
        ))}
      </div>
      <div className="brands">
        <h3 className="heading">Brands Available</h3>
        <li style={{ marginTop: "4vh" }}>
          <img data-aos="zoom-in-up" src={dkny} alt="brand" />
          <img data-aos="zoom-in-up" src={essilor} alt="brand" />
          <img data-aos="zoom-in-up" src={silhovette} alt="brand" />
          <img data-aos="zoom-in-up" src={idee} alt="brand" />
        </li>
        <li>
          <img data-aos="zoom-in-up" src={prada} alt="brand" />
          <img data-aos="zoom-in-up" src={puma} alt="brand" />
          <img data-aos="zoom-in-up" src={RayBanCompany} alt="brand" />
          <img data-aos="zoom-in-up" src={hoya} alt="brand" />
        </li>
        <li style={{ marginTop: "3vh" }}>
          <img data-aos="zoom-in-up" src={vogue} alt="brand" />
          <img data-aos="zoom-in-up" src={youngeroptics} alt="brand" />
        </li>
      </div>
    </div>
  );
}

function MainPage() {

          return (
            <div className="mainpage-body">
              <Navbar />
              <Chatbox />
              <Carousel className="start" />
              <Gallery />
              <Reviews />
              <AboutUs />
              <Location />
              <div id="timing" className="timing">
                <h3 className="heading">Opening Hours</h3>
                <div>
                  <li>
                    <span>Day</span>
                    <span>Timing</span>
                  </li>
                  <li>
                    <span>Monday</span>
                    <span>10:00 AM-7:30 PM</span>
                  </li>
                  <li>
                    <span>Tuesday</span>
                    <span>10:00 AM-7:30 PM</span>
                  </li>
                  <li>
                    <span>Wednesday</span>
                    <span>10:00 AM-7:30 PM</span>
                  </li>
                  <li>
                    <span>Thursday</span>
                    <span>10:00 AM-7:30 PM</span>
                  </li>
                  <li>
                    <span>Friday</span>
                    <span>10:00 AM-7:30 PM</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>Closed</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </div>
              </div>
              <div className="endname"></div>
              <ContactDetails />
              {/* <Chatbox /> */}
            </div>
          );
}

export default MainPage
