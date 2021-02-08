import React from 'react';
import './searchPanel.css';
import {Nav,FormControl, Button} from 'react-bootstrap'
import SearchResultPanel from '../search-result-list/';
import BasketPage from "../basketpage";
import search from "./img/search.png"
import basketurl from "./img/basketurl.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class SearchPanel extends React.Component {

    render () {
      return (
      <Router>
          <div className="nav-bar">
            <div className="links-zone">
              <div className="brand-name"><Link className="link" to="/">Itunes Shop</Link></div>
                <div className="links">
                    <Nav.Link>
                    </Nav.Link>
                    <Nav.Link>
                    </Nav.Link>
            </div>
          </div>
          <div className="search-form">
            <FormControl 
              type="text" 
              placeholder="Что ищем?"
              className="mr-sm-2"
            />
            <div className="button-block">
            <Button 
              variant="outline-light"
              onClick={(event) => {
                let input = document.getElementsByClassName("mr-sm-2")[0];
                this.props.search(input.value)}}>
                <p className="button-text">Поиск</p>
                <img className="button-img" src={search} alt="Поиск"></img>
            </Button>
            <Button variant="outline-light">
            <Link className="link" to="/basketpage"><div className="basket-url"><img src={basketurl} alt="Корзина"></img>(<span>{this.props.howItemsInBasket}</span>)</div></Link>
            </Button>
            </div>
          </div>
        </div>
        <Switch>
              <Route path="/basketpage">
                    <BasketPage
                      total={this.props.total} 
                      whatItemsInBasket={this.props.whatItemsInBasket} 
                      cleanBasket={this.props.cleanBasket}
                      deleteElementInBasket={this.props.deleteElementInBasket}
                    />
              </Route>
              <Route path="/">
                  <SearchResultPanel
                      data = {this.props.searchResult}
                      addToBasket = {this.props.addToBasket}
                      moreResults = {this.props.moreResults}
                      getMoreResults = {this.props.getMoreResults}
                  />
              </Route>
        </Switch>
      </Router>
      ) 
  }
}

export default SearchPanel;