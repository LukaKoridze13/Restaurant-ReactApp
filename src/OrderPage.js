import React, { useContext, useRef } from 'react'
import { Context } from './Context'
import Map from './Map'

export default function OrderPage() {
    return (
        <div style={{width: '100%', maxWidth:'1920px', minHeight:'66.1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Map />
        </div>
    )
}
