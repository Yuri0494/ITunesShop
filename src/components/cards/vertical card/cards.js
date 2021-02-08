import React from 'react';
import ReactAudioPlayer from '../audioplayer';
import basket from './img/addInBasket.png';
import {Card, Button} from 'react-bootstrap'


class CreateCard extends React.Component {
    render () {
        const {img, audio, artistName, trackName, trackViewUrl, addToBasket, item} = this.props;
        return (
            <Card style={{ width: '198px', marginTop:"20px", marginRight:"20px", boxShadow: "2px -2px 10px black"}}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
            <Card.Title>{artistName}</Card.Title>
            <Card.Text>
            {trackName}
            </Card.Text>
            <ReactAudioPlayer audioSrc={audio}/>
            <div> </div>
            <a href={trackViewUrl}>Подробнее..</a>
            <p onClick={()=>{
                addToBasket(item)
            }}><a href={"http://localhost:3000/?#home"}><span> </span>Добавить в корзину</a><img src={basket}></img></p>
            </Card.Body>
            </Card>
        )
    }

} 

export default CreateCard