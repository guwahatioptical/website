import React from 'react'
import "../css/intro.css"
import {logo} from "../images/image" 

function Intro() {
    return (
        <div className="intro">
            <div className="intro-body animate">
               <img className="specsframe" alt="intro specsframe" src={logo} />
            </div>
        </div>
    )
}

export default Intro
