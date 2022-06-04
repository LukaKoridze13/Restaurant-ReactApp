import React, { useContext, useEffect, useState, useRef } from 'react'
import { Context } from './Context'
import './Cart.css'
import CartItem from './CartItem'
import 'bootstrap/dist/css/bootstrap.css'
import Del from './Images/bin.png'
import Acc from './Images/checkout.png'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
export default function Cart(props) {
  let lat;
  let long;
  let global = useContext(Context)
  let navigate= useNavigate()
  const [re, setRe] = useState(false)
  let code = useRef()
  const [text, setText] = useState(<p style={{color:'red', marginLeft:'10px'}}>&#10006; Invalid promocode</p>)
  const [discounted,setDiscounted] = useState(false)
  useEffect(() => {
    global[17]()
  })
  function renderer() {
    re === false ? setRe(true) : setRe(false)
  }
  function checkPromocode(){
    if (code.current.value === global[22][6]){
      setText(<p style={{ color: 'green', marginLeft: '10px' }}>&#10004; You've got 15% discount</p>)
      setDiscounted(true)
    }else{
      setText(<p style={{ color: 'red', marginLeft: '10px' }}>&#10006; Invalid promocode</p>)
      setDiscounted(false)
    }
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
        navigate('/Restaurant-ReactApp/orders')
    }
  }
  if (global[3].length === 1) {
    return (<div className='cartSection'>{global[3][0]}</div>)
  } else {
    return <div className='cartSection'>
      <div className='top'>
        <div className='sp'>Total Items: {global[0]} </div>
        {discounted === true ? <div className='sp'>Total Price: &nbsp; <del style={{ color: 'red' }}> {global[4]} </del>&nbsp; &nbsp; {Math.round(global[4] * 0.85)} {global[11]}</div> : <div className='sp'>Total Price: {global[4]}{global[11]}</div>  }
        <div style={{display:"flex", justifyContent: "center", alignItems:'center'}}>
          {global[18] === 'Log Out' && <input type="text" placeholder="Promocode" className="inpPr" ref={code} onChange={checkPromocode} />}
          {global[18] === 'Log Out' && text}
        </div>
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
