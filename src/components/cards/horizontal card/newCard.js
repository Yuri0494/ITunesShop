import React from "react";
import './newCard.css'
import addInBasket from "../img/addInBasket.png";
import InBasket from "../img/inBasket.png";

class ITunesCard  extends React.Component {
    render () {
        const {img, audio, artistName, trackName, addToBasket, item, price} = this.props;
        return (
            <div className="card">
                <div className="card-img"><img className="img" src={img} alt="Здесь должна быть картинка"></img></div>
                <div className="card-info">
                    <p className='header'>{trackName}</p>
                    <p className="discr1">{artistName}</p>
                    <p className="discr2">Цена {price} $</p>
                    <p className="discr3"></p>
                    <audio className="audio" src={audio} controls={true}></audio>
                </div>
                    <p className="basket-block"><img className="basket" alt="В корзину"src={item.inBasket ? InBasket : addInBasket} onClick={(event)=>{
                        addToBasket(item);
                        event.target.src=`${InBasket}`; 
                        event.target.alt="Добавлено";  
                    }}></img></p>
            </div>
        )
    }
}

export default ITunesCard