import React, { useContext, useState } from 'react'
import './BasketItem.css'
import { HomeContext } from '../../context/HomeContext'
import all_product from '../assets/all_product'
import { FaTrash } from 'react-icons/fa'

const BasketItem = () => {
    const { cartItems, removeFromCart } = useContext(HomeContext);

    return (
        <>
            <div className='basketItem-title'>
                <div>Products</div>
                <div>Title</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div>Remove</div>
            </div>
            <hr className='basketItem-hr' />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div className='basketItem-detail'>
                        <div><img src={e.image} alt="Image" /></div>
                        <div className='basketItem-detail-name'>{e.name}</div>
                        <div className='basketItem-detail-price'>&#8377;{e.newPrice}</div>
                        <div className='basketItem-detail-quantity'>{cartItems[e.id]}</div>
                        <div className='basketItem-detail-total'>&#8377;{e.newPrice * cartItems[e.id]}</div>
                        <div className='basketItem-detail-remove' onClick={() => { removeFromCart(e.id) }}> <FaTrash /> </div>
                    </div>
                }
            })}

            <div className="mobile">
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <div className='basketItem-detail-mobile'>
                            <div className='basketItem-detail-mobile-left'>
                                <div><img src={e.image} alt="Image" /></div>
                            </div>
                            <div className='basketItem-detail-mobile-right'>
                                <div className='basketItem-detail-mobile-name'>{e.name}</div>
                                <div className='basketItem-detail-mobile-price'>Price : &#8377;{e.newPrice}</div>
                                <div className='basketItem-detail-mobile-quantity'>Quantity :  {cartItems[e.id]}kg</div>
                                <div className='basketItem-detail-mobile-total'>Total : &#8377;{e.newPrice * cartItems[e.id]}</div>
                                <div className='basketItem-detail-mobile-remove' onClick={() => { removeFromCart(e.id) }} > <FaTrash /> </div>
                            </div>
                        </div>
                    }
                })}
            </div >
        </>
    )
}

export default BasketItem
