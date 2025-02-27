import React, { useState, createContext } from 'react';
import all_product from '../components/assets/all_product';

// Create context object
export const HomeContext = createContext();

const getDefaultCart = () => {   // Cart Logic 
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

// Create provider component
export const HomeProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add an item to cart
    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => ({
            ...prevCartItems, [itemId]: prevCartItems[itemId] + 1
        }));
    };

    // Function to remove an item from cart
    const removeFromCart = (itemId) => {
        setCartItems((prevCartItems) => ({
            ...prevCartItems, [itemId]: prevCartItems[itemId] - 1
        }))
    };

    // Functions of Total Cart Items
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    // Functions of Total Cart Amount 
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.newPrice;
            }
        }
        return totalAmount;
    }

    const contextValue = { all_product, addToCart, getTotalCartItems, cartItems, removeFromCart, getTotalCartAmount };

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    );
};
