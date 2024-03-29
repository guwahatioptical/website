import React,{ Suspense, useState, useEffect} from 'react'
import "../css/maincomponent.css"
import { Link } from "react-scroll"
import AOS from "aos"
import 'aos/dist/aos.css'
import{
  logo
} from "./image";
import { IoMenu } from "react-icons/io5";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaFacebookF, FaRegAddressCard } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { MdKeyboardArrowLeft } from "react-icons/md";
const Home = React.lazy(() => import('../components/Home'))
const Chatbox = React.lazy(()=>import("../components/ChatBox"));
const Gallery = React.lazy(() => import("../components/Gallery"));
const Reviews = React.lazy(()=>import('../components/Reviews'))
const Location = React.lazy(() => import("../components/Location"));


AOS.init();

function Navbar(){
  const [offsetY, setoffsetY] = useState(0)
  const [menu, setMenu] = useState(false)
  const checkShadow = () => {
      setoffsetY(window.pageYOffset)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', checkShadow)

    return () => window.removeEventListener('scroll', checkShadow)
  }, [])

  let nav_link = { color: (offsetY > 1) | menu ? "#a0a0a0" : "#fff" };

  const menuClicked = () => {
    setMenu(false)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
      <div
        className="go-navbar col-12 d-flex py-3 justify-content-evenly position-fixed"
        style={{
          boxShadow: offsetY > 1 ? "#000 0vh 0vh 1.5vh" : "none",
          backgroundColor:
            (offsetY > 1) | menu ? "#fff" : "rgba(255, 255, 255, 0)",
          background:
            (offsetY > 1) | menu
              ? "#fff"
              : "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
        }}
      >
        <div
          className="col-5 col-md-2 align-items-center d-flex justify-content-start l"
          onClick={() => menuClicked()}
        >
          <img src={logo} alt="brand logo" />
        </div>
        <div
          className="menu l col-5 justify-content-end"
          style={{
            color: (offsetY < 1) & !menu ? "#fff" : "#a0a0a0",
          }}
        >
          {menu ? (
            <MdKeyboardArrowLeft onClick={() => setMenu(!menu)} />
          ) : (
            <IoMenu onClick={() => setMenu(!menu)} />
          )}
        </div>
        <div className="links col-8 align-items-center">
          <Link to="gallery" spy={true} smooth={true}>
            <div style={nav_link} className="nav_link l">Gallery</div>
          </Link>
          <Link to="reviews" spy={true} smooth={true}>
            <div style={nav_link} className="nav_link l">Customer Reviews</div>
          </Link>
          <Link to="aboutus" spy={true} smooth={true}>
            <div style={nav_link} className="nav_link l">About Us</div>
          </Link>
          <Link to="location" spy={true} smooth={true}>
            <div style={nav_link} className="nav_link l">Locate Us</div>
          </Link>
          <Link to="timing" spy={true} smooth={true}>
            <div style={nav_link} className="nav_link l">Opening Hours</div>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <div style={nav_link} className="nav_link l">Get in Touch</div>
          </Link>
        </div>
        <div
          style={
            menu && window.innerWidth < 769
              ? { transform: "translateX(0vw)" }
              : { transform: "translateX(-100%)" }
          }
          className="mob_links"
        >
          <Link to="gallery" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link l">
              Gallery
            </div>
          </Link>
          <Link to="reviews" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link l">
              Customer Reviews
            </div>
          </Link>
          <Link to="aboutus" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link l">
              About Us
            </div>
          </Link>
          <Link to="location" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link l">
              Locate Us
            </div>
          </Link>
          <Link to="timing" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link l">
              Opening Hours
            </div>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <div onClick={() => setMenu(!menu)} className="nav_link l">
              Get in Touch
            </div>
          </Link>
        </div>
      </div>
    );
}

function AboutUs() {
  return (
    <div id="aboutus" className="aboutus-container col-12">
      <h3 data-aos="fade" className="heading">About Us</h3>
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
    <div id="contact" className="footer pt-4">
      <h3 className="footer-heading">Get in Touch</h3>
      <div className="contact-details-body">
        <div className="socialbar mx-5 px-md-5 col-5 my-3 col-sm-3 col-md-4 col-xl-3">
          <div title="@guwahatioptical" className="icon p-3">
            <a
              href="https://www.facebook.com/guwahatioptical/?ti=as"
              target="blank"
            >
              <FaFacebookF className="icon-svg" />
            </a>
          </div>
          <div title="@guwahatioptical" className="icon p-3">
            <a href="https://www.instagram.com/guwahatioptical/" target="blank">
              <SiInstagram className="icon-svg" />
            </a>
          </div>
        </div>
        <div className="details mx-5 px-5">
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


function MainComponent() {
  
          return (
            <div className="col-12">
              
              <Navbar />
              <Suspense fallback={<div>Loading...</div>}>
                <Chatbox />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <Home className="start" />
              </Suspense>
              <div className="fake">
                <Suspense fallback={<div>Loading...</div>}>
                  <Gallery />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                  <Reviews />
                </Suspense>
                <AboutUs />
                <Suspense fallback={<div>Loading...</div>}>
                  <Location />
                </Suspense>
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
                      <span>10:00 AM-7:30 PM</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>11:00 AM-6:30 PM</span>
                    </li>
                  </div>
                </div>
                <div className="endname col-12"></div>
                <ContactDetails />
              </div>
            </div>
          );
}

export default MainComponent