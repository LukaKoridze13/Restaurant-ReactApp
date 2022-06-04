import React, { useContext, useState } from 'react'
import { Context } from './Context'
import 'bootstrap/dist/css/bootstrap.css'
import Swal from 'sweetalert2'
export default function Profile() {
    let global = useContext(Context)
    const [state, setState] = useState('*********')
    const [text, setText] = useState('Show')
    function promo(){
        if (global[22][6] !== null && global[22][6] !== undefined) {
            return <p style={{ color: 'green', fontWeight: 'bold' }}>Promocode: {global[22][6]}</p>
        } else {
            return <p style={{color: 'red',fontWeight: 'bold'}}>You don't have active promocodes</p>
        }
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', padding: '50px 50px', width: '100%', maxWidth: '1920px', backgroundColor: '#c5cbe3', minHeight: '50vh', flexDirection: 'column' }}>
            <h1 style={{ color: '#d78922', fontWeight: 'bolder', fontSize: '8vw' }}>Hello, {global[22][0]}!</h1>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                <div className="card" style={{ width: '300px', height: '400px', marginRight: '50px', borderRadius: '30px' }}>
                    <img className="card-img-top" src={global[22][3]} alt="Card image" style={{ borderRadius: '30px 30px 0px 0px', width: '100%', height: '50%' }} />
                    <div className="card-body">
                        <h4 className="card-title">{global[22][0]} {global[22][1]}</h4>
                        <p className="card-text">Email: {global[22][2]}</p>
                        {promo()}
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <p className="card-text">Password: {state} </p>
                            <button style={{ border: 'none', backgroundColor: '#F13c20', padding: '3px 10px', borderRadius: '30px',color:'white', }} onClick={() => { if (state === '*********') { setState(`${global[22][4]}`); setText('Hide') } else { setState(`*********`); setText('Show') } }}>{text}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
