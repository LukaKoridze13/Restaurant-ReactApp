import React, { useState } from 'react'
import DropdownButton from './Dropdown'
import Card from './Card'
import './Menu.css'
import { Context } from './Context';
import { useContext } from 'react';
import PriceFilter from './PriceFilter';
export default function Menu() {
  let global = useContext(Context)
  const [category, setCategory] = useState("All")
  const [cards, setCards] = useState(global[2])
  const [sort, setSort] = useState("X")
  const [prices,setPrices] = useState("No Sort")
  if (prices === "LOW to HIGH"){
    cards.sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
  }else if (prices === "HIGH to LOW"){
    cards.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
  }else {
    cards.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
  }
  return (
    <div className='menu'>
      <div className='filter'>
        <DropdownButton text={category} filterOne="Main Dishes" filterTwo="Side Dishes" filterThree="Desserts" filterFour="Drinks" filterFive="All" onClickOne={() => { setCategory("Main Dish") }} onClickTwo={() => { setCategory("Side Dish") }} onClickThree={() => { setCategory("Dessert") }} onClickFour={() => { setCategory("Drinks") }} onClickFive={() => { setCategory("All") }} />
        <PriceFilter sort={prices} func={setPrices}/>
      </div>
      <div className='displayCards'>
        <div className="row" style={{ width: '100%' }}>
          {cards.map((item, id) => {
            if (category === "All") {
              return (<Card key={id} item={item} />)
            } else {
              if (item.category === category) {
                return (<Card key={id} item={item} />)
              }
            }
          })}
        </div>
      </div>
    </div>
  )
}







