import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './basketpage.css';
import CardsInBasket from './basket components/cards-in-basket/';


class BasketPage extends React.Component {
  
  render () {
    console.log("hello!");
    return (
      <div className="basketpage">
        <CardsInBasket
          total={this.props.total}
          whatItemsInBasket={this.props.whatItemsInBasket}
          deleteElementInBasket={this.props.deleteElementInBasket}
          cleanBasket={this.props.cleanBasket}
        />
      </div>
    )
  }
}

export default BasketPage