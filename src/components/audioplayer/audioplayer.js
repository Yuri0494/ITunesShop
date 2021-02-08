import React from 'react';
import Button from 'react-bootstrap/Button'
import playImg from './img/play.png' 
import pauseImg from './img/pause.png'

function ReactAudioPlayer ({audioSrc}) {
    let audio = new Audio(audioSrc);
    let play =  <Button variant="outline-dark" onClick={() => {audio.play()}}><img src={playImg}></img></Button>;
    let pause = <Button variant="outline-dark" onClick={() => {audio.pause()}}><img src={pauseImg}></img></Button>;
  return ( 
        <div>
            {play}
            <span> </span>
            {pause}
        </div>
  )
}

export default ReactAudioPlayer