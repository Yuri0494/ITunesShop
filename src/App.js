import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from "./components/footer/";
import SearchPanel from "./components/search panel/";




class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchResult: [],
      basket: [],
      total: 0,
      moreResults: false
    }
    this.search = this.search.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
    this.deleteElementInBasket = this.deleteElementInBasket.bind(this);
    this.cleanBasket = this.cleanBasket.bind(this);
    this.getMoreResults = this.getMoreResults.bind(this);
  }
  
 
  async search (request) {
    let modifRequest = request.replace(/\s/g, "+");
    await fetch(`https://itunes.apple.com/search?term=${modifRequest}+&limit=40`, {method: "GET", mode:"cors"})
    .then(response => response.json())
    .then(data => {
      let newArr = data.results.map((item, i) => {
        return Object.assign({}, {id:Math.floor(Math.random() * 1000)}, {inBasket: false}, item)
      })
        this.setState( ({searchResult}) => ({
          searchResult: newArr
      })) 
      })
  }

 addToBasket (newCard) {
    this.setState(({basket}) => {
      let newArr = [];
      let totalCost = 0;
      basket.forEach(oldCard => {
        if(newCard.id !== oldCard.id)
        newArr.push(oldCard);
      })
     newArr.push(newCard)
     newCard.inBasket = true;
     newArr.forEach(item => {
       if(item.trackPrice !== undefined) {
        totalCost+= +item.trackPrice;
       }
     })
      return {
        basket: newArr,
        total: totalCost.toFixed(2)
      }
    })
  }

  cleanBasket () {
    this.setState(({basket}) => {
      basket.forEach(item => {
        item.inBasket = false;
      })
      let newArr = [];
      return {
        basket: newArr,
        total: 0
      }
    })
  }

  deleteElementInBasket (deleteCard) {
    this.setState(({basket}) => {
      let newArr = [];
      let totalCost = 0;
      basket.forEach(oldCard => {
        if(oldCard.id !== deleteCard.id) {
          newArr.push(oldCard);
        }
      })
      deleteCard.inBasket = false;
      newArr.forEach(item => {
        if(item.trackPrice !== undefined) {
         totalCost+= +item.trackPrice;
        }
      })
      return {
        basket: newArr,
        total: totalCost.toFixed(2)
      }
    })
  }

  getMoreResults() {
    this.setState(({moreResults}) => {
      let x = moreResults ? false : true;
        return {
          moreResults: x,
        }
    })
  }

  render () {
    return (
      <div className="wrapper">
        <SearchPanel
            howItemsInBasket={this.state.basket.length}
            total={this.state.total}
            search={this.search}
            whatItemsInBasket={this.state.basket}
            cleanBasket={this.cleanBasket}
            deleteElementInBasket={this.deleteElementInBasket}
            searchResult={this.state.searchResult}
            addToBasket={this.addToBasket}
            moreResults={this.state.moreResults}
            getMoreResults={this.getMoreResults}
        />
        <div className="footer"><Footer/></div>
      </div>
    )
  }
}

export default App