import React, { useContext } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { FaBagShopping } from 'react-icons/fa6'
import { useMenu } from '../../context/MenuContext'
import CategoryList from '../categoryList/CategoryList'
import Alert from '../alert/Alert'
import { HomeContext } from '../../context/HomeContext'


const Navbar = () => {
    const { setMenu } = useMenu();
    const { category, setCategory } = useMenu();
    const { categoryList, setCategoryList } = useMenu();
    const location = useLocation();
    const { getTotalCartItems } = useContext(HomeContext);

    // Check if current location is home
    const isHome = location.pathname === '/';
    const isSignUp = location.pathname === '/signup';
    const isLogin = location.pathname === '/login';
    const isBasket = location.pathname === '/basket';

    return (
        <>
            <div className='navbar' id='top'>
                <div className='logo' onClick={() => { setMenu("navBottom-home") }}>
                    <Link to='/' >
                        <img src={logo1} alt="logo" />
                    </Link>
                </div>

                <div className='category' onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }} >
                    <Link to='' className='category-link'>
                        Shop by <p><b>Category </b> {category === false ? <FaPlus /> : <FaMinus />}</p>
                    </Link>
                </div>

                <div className='user'>
                    <Link to='/signup' className='user-link'>
                        <span>SignUp</span>
                    </Link>
                    <Link to='/login' className='user-link'>
                        <span>Login</span>
                    </Link>
                </div>

                <div className='basket'>
                    <Link to='/basket' >
                        <span><FaBagShopping /></span>
                    </Link>
                    <p>Basket</p>
                    <div>{getTotalCartItems()}</div>
                </div>
            </div>

            {categoryList && isHome === true && <CategoryList />}
            {categoryList && isSignUp === true && <Alert alert='Category Will Only Show When You Are At Home Page' />}
            {categoryList && isLogin === true && <Alert alert='Category Will Only Show When You Are At Home Page' />}
            {categoryList && isBasket === true && <Alert alert='Category Will Only Show When You Are At Home Page' />}
        </>
    )
}

export default Navbar
