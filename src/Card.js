import React from 'react'
import { Link } from 'react-router-dom'
import './Popular.css'
import { Context } from './Context';
import { useContext, useRef, useEffect } from 'react';
export default function Card(props) {
    let butRef = useRef(null)
    let global = useContext(Context)
    let food = props.item
    useEffect(() => {
        if (food.status === "Added") {
            butRef.current.disabled = true
        }
    })
    function addingToCart(){
        food.status = "Added"; 
        if (global[3].indexOf(food) === -1) {
            let x=global[3]
            x.push(food)
            global[3] = x
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px', height: '312.50px' }}>
            <div className="col-2 m-3 shadow">
                <img src={food.image} alt="Food" className="cardImage" />
                <p className="itemName">{food.name}</p>
                <p className="itemPrice">Price: {food.price} {global[11]}</p>
                <Link to={`/Restaurant-ReactApp/menu/${food.name}`}><button className="details">Details</button></Link>
                <button className="add" onClick={() => { global[1](); global[5](food.price)}} onMouseDown={addingToCart} ref={butRef}>{food.status} </button>
            </div>
        </div>
    )
}