import React, {useState, useEffect} from 'react'
import '../css/Home.css'
import { Link } from "react-scroll";
import {
  web3,
  web4,
  web5,
  web6,
  web8,
  mob2,
  mob3,
  mob4,
  mob6,
  mob8
} from "../images/image";


function Home() {
  const [frame, setFrame] = useState(0)
  const [width, setWidth] = useState(0)
  let home_images = width <= 551 ? [
    mob8,
    mob6,
    mob3,
    mob2,
    mob4
  ] :(width >= 551 ? [web8, web3, web4, web5, web6,  ]:[])
  const checkSize = () => {
    setWidth(window.innerWidth)
  }
  // const tags = [
  //   [`Look better`, `and live better.`],
  //   ["See better.", "Look perfect."],
  //   ["Vision for", "a better life."],
  //   ["See what", " missing…"],
  //   ["See better.", "Look perfect."],
  // ]
  useEffect(() => {
    window.addEventListener('load', checkSize)
    window.addEventListener('load', () => 
    setInterval(() => 
      setFrame(preFrame => (preFrame + 1) % 5)
    , 3000)
    )
  })
  
    return (
      <div id="home" className="carousel col-12 justify-content-center">
        <img src={home_images[frame]} alt="frame1" />
        {/* <div className="tagline">
          <div>{tags[frame][0]}</div>
          <div>{tags[frame][1]}</div>
        </div> */}
        <div className="col-12 d-flex back-drop justify-content-center">
          <Link className="explore_us" to="gallery" spy={true} smooth={true}>
            Explore us
          </Link>
        </div>
      </div>
    );
}

export default Home