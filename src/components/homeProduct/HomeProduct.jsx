import React from 'react'
import './HomeProduct.css'
import home_vegetable from '../assets/home_vegetable.js'
import home_fruit from '../assets/home_fruit.js'
import home_nonVeg from '../assets/home_nonVeg.js'
import Item from '../item/Item'

const HomeProduct = () => {
    return (
        <>
            <h2 className='homeProduct-h2' id='Vegetables'>My Basket <span >Vegetables</span></h2>
            <div className='homeProduct' >
                {home_vegetable.map((item, i) => {
                    return <Item key={i} id={item.id} image={item.image} name={item.name} mass={item.mass} newPrice={item.newPrice} oldPrice={item.oldPrice} />
                })}
            </div>

            <h2 className='homeProduct-h2' id='Fruits'>My Basket <span >Fruits</span></h2>
            <div className='homeProduct' >
                {home_fruit.map((item, i) => {
                    return <Item key={i} id={item.id} image={item.image} name={item.name} mass={item.mass} newPrice={item.newPrice} oldPrice={item.oldPrice} />
                })}
            </div>

            <h2 className='homeProduct-h2' id='NonVegetable'>My Basket <span >Non-Vegetable</span></h2>
            <div className='homeProduct' >
                {home_nonVeg.map((item, i) => {
                    return <Item key={i} id={item.id} image={item.image} name={item.name} mass={item.mass} newPrice={item.newPrice} oldPrice={item.oldPrice} />
                })}
            </div>
        </>
    )
}

export default HomeProduct
