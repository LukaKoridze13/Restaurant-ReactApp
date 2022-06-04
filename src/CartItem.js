import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Cart.css'
import Del from './Images/bin.png'
import { Context } from './Context'

export default function CartItem(props) {
    if (JSON.parse(window.localStorage.getItem(`${props.product.name}`)) === null) {
        window.localStorage.setItem(`${props.product.name}`, "1")
    }
    let global = useContext(Context)
    const [quantity, setQuantity] = useState(JSON.parse(localStorage.getItem(`${props.product.name}`)))
    function itemDelete() {
        let p = global[3].find(function (item) { if (item == props.product) { return item } })
        let index = global[3].indexOf(p)
        global[3].splice(index, 1)
        global[7](props.product.price * quantity)
        global[8]()
        props.product.status = "Add to cart";
        window.localStorage.removeItem(`${props.product.name}`)
        props.delete()
    }
    useEffect(() => {
        window.localStorage.setItem(`${props.product.name}`, JSON.stringify(quantity))
    })
    return (
        <div className="card">
            <img className="card-img-top" src={props.product.image} alt="Card image cap" style={{ width: "100%", height: "calc(18rem*0.8)" }} />
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <div className='counterDiv'>
                    <p className="card-text">Price: {props.product.price}{global[11]}</p>
                    <p className="card-text">Total Price: {props.product.price} x {quantity} = {props.product.price * quantity}{global[11]}</p>
                </div>
                <div className='counterDiv'>
                    <button className="minus" onClick={() => { if (quantity > 1) { setQuantity(quantity - 1); global[7](props.product.price) } }}>-</button>
                    <p>Quantity: {quantity}</p>
                    <button className="plus" onClick={() => { setQuantity(quantity + 1); global[6](props.product.price) }}>+</button>
                </div>
            </div>
            <div className='delete' onClick={itemDelete}>Remove<img src={Del} alt="Delete" style={{ width: "20px", marginLeft: "10px" }} /></div>
        </div>
    )
}
