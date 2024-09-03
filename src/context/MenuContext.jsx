import React, { useState, createContext, useContext } from 'react';

// Create context object
const MenuContext = createContext();

// Create provider component
export const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState("navBottom-home");
    const [category, setCategory] = useState(false);
    const [categoryList, setCategoryList] = useState(false);
    const [userSignupLoginBtn, setUserSignupLoginBtn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState('');

    return (
        <MenuContext.Provider value={{ menu, setMenu, category, setCategory, categoryList, setCategoryList, userSignupLoginBtn, setUserSignupLoginBtn, loggedInUser, setLoggedInUser }}>
            {children}
        </MenuContext.Provider>
    );
};

// Custom hook to use the menu context
export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
}