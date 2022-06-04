import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Context } from './Context'
export default function CurrencyButton() {
    let global = useContext(Context)
    const [usd, setUSD] = useState('#4056A1')
    const [gel, setGEL] = useState('#c5CBE3')
    const [rate, setRate] = useState(3)
    useEffect(() => {
        fetch('https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json').then(response => response.json()).then(json => setRate(json[0].currencies[40].rate))
    })
    function switcherGEL() {
        if (gel === '#c5CBE3') {
            setGEL("#4056A1")
            setUSD("#c5CBE3")
        }
        let o=[]
        global[2].map((item)=>{
            item.price = Math.round(item.price*rate)
            o.push(item)
        })
        global[16](o)
        global[17]()
    }
    function switcherUSD() {
        if (usd === '#c5CBE3') {
            setUSD("#4056A1")
            setGEL("#c5CBE3")
        }
        let o = []
        global[2].map((item) => {
            item.price = Math.round(item.price / rate)
            o.push(item)
        })
        global[16](o)
        global[17]()
    }
    useEffect(() => {
        if (global[11] === '$') {
            setUSD("#4056A1")
            setGEL("#c5CBE3")
        } else {
            setGEL("#4056A1")
            setUSD("#c5CBE3")
        }
    }, [])
    return (
        <div style={{ height:'50px', width: '90px', padding: '10px', backgroundColor: '#d78922', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '30px' }}>
            <p style={{ padding: '5px 10px 5px 10px', backgroundColor: usd, borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => { switcherUSD(); global[12]('$'); }}>$</p>
            <p style={{ padding: '5px 10px 5px 10px', backgroundColor: gel, borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => { switcherGEL(); global[12]('₾'); }}>₾</p>
        </div>
    )
}