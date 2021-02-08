import React from "react";
import './newCard.css'
import img from "./1.jpg"

function ITunesCard () {
    return (
        <div className="card">
            <div className="card-img"><img className="img"></img></div>
            <div className="card-info">
                <h3 className='header'>Card Title</h3>
                <p className="discr1">Subtitle</p>
                <p className="discr2">Discrip</p>
                <p className="discr3">Some quick example text to build on the card title and make up the bulk of the card's content</p>
                <audio className="audio" controls="true"></audio>
            </div>
        </div>
    )
}

export default ITunesCard