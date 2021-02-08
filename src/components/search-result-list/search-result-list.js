import React from 'react';
import "./search-result-list.css";
import Button from 'react-bootstrap/Button';
import ITunesCard from "../cards/horizontal card/"

function SearchResultPanel ({data, addToBasket, moreResults, getMoreResults}) {
  let elements = [];
  let res = data.map((item, i) => {
    return <ITunesCard
    key={item.id}
    img={item.artworkUrl100} 
    audio={item.previewUrl}
    artistName={item.artistName}
    trackName={item.trackName}
    trackViewUrl={item.trackViewUrl}
    addToBasket={addToBasket}
    item={item}
    price={item.trackPrice}
    />
  })
  let counter = res.length/2;
  let forSlice = 0;
  if(res.length < 20) {
  forSlice = 0;
  } else {
    forSlice = 10;
  }
  for(let i = 0; i<counter; i++) {
    elements.push(<div key={i} className="row">{res.slice(i*2,2*(i+1))}</div>)
  }
  if(elements.length === 0) {
    return (
        <div className="search-result-body"><p className="note">Здесь будет выводиться результат поиска</p></div>
    )
  } else {
    return (
      <div>
        <div className="elements">{moreResults ? elements : elements.slice(0, elements.length-forSlice)}</div>
        <p
          className="cleanresult">
          <Button onClick={()=>{getMoreResults()}} style={{display: moreResults ? "none" : "block", margin:"0 auto"}}variant="outline-secondary" size="sm">
              Показать еще несколько результатов
          </Button>
        </p>
      </div>
    )
  }

}


export default SearchResultPanel
