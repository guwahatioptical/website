import React from 'react'
import "../css/mainpage.css"

function MainPage() {
    const tag = ['C','O','M','I','N','G','S','O','O','N','.','.','.']
    return (
        <div className="mainpage-body">
            {tag.map((char,index)=><p key={index} style={{animationDelay:`${index/20}s`}} className="fadeIn">{char}</p>)}
        </div>
    )
}

export default MainPage
