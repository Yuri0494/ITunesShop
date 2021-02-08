import React from "react";
import './ITunesCard.css'
import del from "./img/delete.png";

class ITunesCard  extends React.Component {
    render () {
        const {img, audio, artistName, trackName, item, deleteElementInBasket, price} = this.props;
        return (
            <div className="card">
                <div className="card-img"><img className="img" src={img} alt="Что-то пошло не так"></img></div>
                <div className="card-info">
                    <p className='header'>{trackName}</p>
                    <p className="discr1">{artistName}</p>
                    <p className="discr2">Цена {price} $</p>
                    <p className="discr3"></p>
                    <audio className="audio" src={audio} controls={true}></audio>
                </div>
                    <p className="basket-block"><a href={"http://localhost:3000/?#home"}><span> </span></a><img className="basket" src={del} alt="Удалить" onClick={(event)=>{
                        deleteElementInBasket(item);
                    }}></img></p>
            </div>
        )
    }
}

export default ITunesCard