import React from 'react'
import './FlipCard.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function FlipCard(props) {
  return (
      <div className="flip-card col-4 m-2 shadow">
          <div className="flip-card-inner">
              <div className="flip-card-front">
                  <h1 className='cTitle'>{props.title}</h1>
              </div>
              <div className="flip-card-back">
                  <p>{props.text}</p>
              </div>
          </div>
      </div>
  )
}
