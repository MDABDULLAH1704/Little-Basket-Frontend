import React from 'react'
import './HomeProduct.css'
import Item from '../item/Item'
import Home_Product from '../assets/2_home_product.js'

const HomeProduct = () => {
    return (
        <>
            <h2 className='homeProduct-h2' id='Vegetables'>My Basket</h2>
            <div className='homeProduct' >
                {Home_Product.map((item, i) => {
                    return <Item
                        key={i}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        mass={item.mass}
                        newPrice={item.newPrice}
                        oldPrice={item.oldPrice}
                    />
                })}
            </div>
        </>
    )
}

export default HomeProduct
