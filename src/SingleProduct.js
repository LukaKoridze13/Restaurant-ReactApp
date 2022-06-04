import React, { useEffect } from 'react'
import './Details.css'
import { useParams,Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { useContext,useRef } from 'react';
import { Context } from './Context';

export default function Hello() {
    let butRef= useRef(null)
    let global = useContext(Context)
    const { id } = useParams()
    let x;
    x = global[2].find((item) => {
        if (item.name === id) {
            return item
        }
    })
    useEffect(()=>{
        if (x.status === "Added") {
            butRef.current.disabled = true
        }
    })
    function addingToCart() {
        x.status = "Added";
        if (global[3].indexOf(x) === -1) {
            let t = global[3]
            t.push(x)
            global[3] = t
        }
    }
    return (
        <div className='detailsPage'>
            <div className='detailsCard shadow'>
                <img className='detailsImage' src={x.image} alt="Food you chose" />
                <div className='rightSide'>
                    <p className='detailName'>{x.name}</p>
                    <p className='detailCategory'>Category: {x.category} <span>Price: {x.price} {global[11]}</span></p>
                    <p className='detailDescription'>Description: {x.description}</p>
                    <button className="detailsAdd" onClick={() => { global[1](); global[5](x.price) }} onMouseDown={addingToCart} ref={butRef}>{x.status}</button>
                    <Link to='/Restaurant-ReactApp/menu'><button className="detailsBack">Back to menu</button> </Link> 
                </div>               
            </div>
        </div>
    )
}
