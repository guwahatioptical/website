import React, {useState} from 'react'
import '../css/Home.css'
import {
  // web1,
  // web2,
  // web3,
  // web4,
  // web5,
  // web6,
  // web7,
  // web8,
  // web9,
  // web10,
  mob2,
  mob3,
  mob4,
  mob6,
  mob8,
} from "../images/image";



function Home() {
  const [frame, setFrame] = useState(0)
  let home_images = [
    mob8,
    mob6,
    mob3,
    mob2,
    mob4
  ]
  const tags = [
    [`Look better`, `and live better.`],
    ["See better.", "Look perfect."],
    ["Vision for", "a better life."],
    ["See what", "you’re missing…"],
    ["See better.", "Look perfect."],
  ]
  window.addEventListener('load', () => 
    setInterval(() => 
      setFrame(preFrame => (preFrame + 1) % 5)
    , 3000)
  )
    return (
      <div id="home" className="carousel">
        <img src={home_images[frame]} alt="frame1" />
        <div className="tagline">
          <div>{tags[frame][0]}</div>
          <div>{tags[frame][1]}</div>
        </div>
      </div>
    );
}

export default Home