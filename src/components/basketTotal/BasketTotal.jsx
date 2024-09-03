import React, { useContext } from 'react'
import './BasketTotal.css'
import { HomeContext } from '../../context/HomeContext'

const BasketTotal = () => {
    const { getTotalCartAmount } = useContext(HomeContext);

    return (
        <>
            <div className="basketTotal">
                <h2>Basket Total</h2>

                <div className="basketTotal-subTotal">
                    <div>SubTotal</div>
                    <div>&#8377;{getTotalCartAmount()}</div>
                </div>
                <hr className='basketTotal-hr' />

                <div className="basketTotal-shippingFree">
                    <div>Shipping </div>
                    <div>Free</div>
                </div>
                <hr className='basketTotal-hr' />

                <div className="basketTotal-total">
                    <div><b>Total</b></div>
                    <div><b>&#8377;{getTotalCartAmount()}</b></div>
                </div>

                <button><b>PROCEED TO CHECKOUT</b></button>
            </div>
        </>
    )
}

export default BasketTotal
