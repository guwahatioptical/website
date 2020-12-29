import React from 'react'
import "../css/intro.css"
import specsFrame from "../images/logo.png" 

function Intro() {
    return (
        <div className="intro">
            <div className="intro-body animate">
               <img className="specsframe" alt="intro specsframe" src={specsFrame} />
            </div>
        </div>
    )
}

export default Intro
