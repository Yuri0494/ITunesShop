import React from 'react';
import ITunesCard from "./basketcard/horizontal card/";
import "./cards-in-basket.css";
import "../../basketpage.css";
import Button from 'react-bootstrap/Button';

function CardsInBasket ({whatItemsInBasket, addToBasket, deleteElementInBasket, cleanBasket, total}) {
  let res = [];
  let elements = whatItemsInBasket.map((item, i) => {
    return <ITunesCard 
    key={item.id}
    img={item.artworkUrl100} 
    audio={item.previewUrl}
    artistName={item.artistName}
    trackName={item.trackName}
    trackViewUrl={item.trackViewUrl}
    addToBasket={addToBasket}
    item={item}
    deleteElementInBasket={deleteElementInBasket}
    price={item.trackPrice}
    />
  })
  let counter = elements.length/2;
  for(let i = 0; i<counter; i++) {
    res.push(<div key={i+1} className="basket-row">{elements.slice(i*2,2*(i+1))}</div>)
  }
    if(res.length === 0) {
      return (
          <div className="basket-body"><p className="note">Корзина сейчас пуста...</p></div>
      )
    } else {
      return (
        <div>
          <div className="sum">Сумма добавленных товаров: {total} $</div>
          <div className="elements-in-basket">{res}</div>
          <p
          className="cleanbasket" 
          onClick={()=> {cleanBasket()}}>
          <Button variant="outline-secondary" size="sm">
              Очистить корзину
          </Button>
        </p>
        </div>
      )
    }

}


export default CardsInBasket




