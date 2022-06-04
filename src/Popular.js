import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Popular.css'
import { Link } from 'react-router-dom'
import Card from './Card'
import { Context } from './Context';
import { useContext } from 'react';
export default function Popular() {
    let global = useContext(Context)
    let numbers = [];
    let cards = [];
    for (let index = 0; index < 5; index++) {
        let x = Math.floor(Math.random() * (40)) + 1
        if (numbers.indexOf(x) === -1) {
            cards.push(global[2][x])
            numbers.push(x)
        } else {
            index--
        }
    }
    const [food, setFood] = useState(cards)
    return (
        <div className="sectionPopular">
            <p className="popular">Popular Right Now</p>
            <Link to='/Restaurant-ReactApp/menu'><button className="seeall">See all</button></Link>
            <div className="container-fluid">
                <div className="row">
                    {food.map((item, id) => {
                        return (
                            <Card key={id} item={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
