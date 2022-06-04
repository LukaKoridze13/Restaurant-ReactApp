import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Context'
import './Cart.css'
import CartItem from './CartItem'
import 'bootstrap/dist/css/bootstrap.css'
import Del from './Images/bin.png'
import Acc from './Images/checkout.png'
import Swal from 'sweetalert2'
export default function Cart() {
  let global = useContext(Context)
  const [re, setRe] = useState(false)
  useEffect(() => {
    global[17]()
  })
  function renderer() {
    re === false ? setRe(true) : setRe(false)
  }
  function clearCart() {
    global[3].splice(1, global[3].length - 1)
    global[9]()
    global[10]()
    global[2].map((item) => {
      item.status = "Add to cart";
      window.localStorage.removeItem(`${item.name}`)
    })
    renderer()
  }
  function makeOrder() {
    if (global[18] === "Login") {
      Swal.fire(
        'Oops!',
        'Please log in to make an order',
        'warning'
      )
    } else {
      global[3].splice(1, global[3].length - 1)
      global[9]()
      global[10]()
      global[2].map((item) => {
        item.status = "Add to cart";
        window.localStorage.removeItem(`${item.name}`)
      })
      renderer()
      Swal.fire(
        'Thank you!',
        'Your order has been submitted!',
        'success'
      )
    }
  }
  if (global[3].length === 1) {
    return (<div className='cartSection'>{global[3][0]}</div>)
  } else {
    return <div className='cartSection'>
      <div className='top'>
        <div className='sp'>Total Items: {global[0]} </div>
        <div className='sp'>Total Price: {global[4]} {global[11]}</div>
        <div className='px'>
          <div className='order' onClick={() => {
            makeOrder()
          }} >Make Order <img src={Acc} alt="Order" style={{ width: "20px", marginLeft: "10px" }} />
          </div>
          <div className='clear' onClick={clearCart}>Clear Cart <img src={Del} alt="Delete" style={{ width: "20px", marginLeft: "10px" }} /></div>
        </div>
      </div>
      {global[2].map((item, id) => {
        if (item.status === "Added") {
          return <CartItem product={item} key={id} delete={renderer} />
        }
      })}
    </div>
  }
}
