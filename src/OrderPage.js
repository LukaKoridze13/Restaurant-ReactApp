import React, { useContext, useRef } from 'react'
import { Context } from './Context'
import Map from './Map'

export default function OrderPage() {
    let global = useContext(Context)
    let mapref=useRef()
    return (
        <Map />
    )
}
