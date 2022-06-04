import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Error.scss'
var pageX = window.screen.width;
var pageY = window.screen.height;
var mouseY = 0;
var mouseX = 0;
export default function Error() {
  function listener(event) {
      //verticalAxis
      mouseY = event.pageY;
      let yAxis = (pageY / 2 - mouseY) / pageY * 300;
      //horizontalAxis
      mouseX = event.pageX / -pageX;
      let xAxis = -mouseX * 100 - 100;

      document.querySelector('.box__ghost-eyes').style.transform = 'translate(' + xAxis + '%,-' + yAxis + '%)'

      //console.log('X: ' + xAxis);
  }
  useEffect(()=>{
    document.addEventListener('mousemove', listener)
    return (()=>{
      document.removeEventListener('mousemove', listener)
    })
  },[])
  return (
    <div className="box">
      <div className="box__ghost">
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>

        <div className="box__ghost-container">
          <div className="box__ghost-eyes">
            <div className="box__eye-left"></div>
            <div className="box__eye-right"></div>
          </div>
          <div className="box__ghost-bottom">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="box__ghost-shadow"></div>
      </div>

      <div className="box__description">
        <div className="box__description-container">
          <div className="box__description-title">Whoops!</div>
          <div className="box__description-text">It seems like we couldn't find the page you were looking for</div>
        </div>

        <Link to='/Restaurant-ReactApp/' className="box__button">Home Page</Link>

      </div>

    </div>
  )
}
