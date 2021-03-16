import React, {useState} from 'react'
import '../css/carousel.css'
import {frame1, frame2, frame3, frame4} from '../images/image'



function Slide() {
  const imgs = [
    frame1,
    frame3,
    frame2,
    frame4
  ]
  const tags = [
    [`Look better`, `and live better.`],
    ["See better.", "Look perfect."],
    ["Vision for", "a better life."],
    ["See what", "you’re missing…"],
  ];
  const [frame, setFrame] = useState(0)
  const [animate, setAnimate] = useState(false)

  window.addEventListener('load', () =>{ setInterval(() => {
    setFrame(preFrame => ((preFrame + 1) % 4));
  }, 3000)
      setAnimate(true);
})
    return (
      <>
        <div className={`tagline ${animate ? "tag_slide" : ""}`}>
          <div className="tag">{tags[frame][0]}</div>
          <div className="tag">{tags[frame][1]}</div>
        </div>
        <div className="frame">
          <img
            className={animate ? "frame_animate" : ""}
            src={imgs[frame]}
            alt="img1"
          />
        </div>
      </>
    );
}

export default function Carousel() {
  
    return (
        <div id="home" className="carousel">
        <Slide />
        </div>
    )
}
