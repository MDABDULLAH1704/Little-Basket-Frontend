import React, {useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import NavBottom from '../components/navBottom/NavBottom'
import BasketItem from '../components/BasketItem/BasketItem'
import BasketTotal from '../components/basketTotal/BasketTotal'

const Basket = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('Little Basket - Basket');
    }, []);

    return (
        <div>
            <Navbar />
            <NavBottom />
            <BasketItem />
            <BasketTotal />
        </div>
    )
}

export default Basket
