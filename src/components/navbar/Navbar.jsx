import React, { useContext } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FaBagShopping } from 'react-icons/fa6';
import { BiCategory, BiUserCircle, BiBasket } from 'react-icons/bi';
import { useMenu } from '../../context/MenuContext';
import CategoryList from '../categoryList/CategoryList';
import CategoryListBottom from '../cateListBottom/CategoryListBottom';
import Alert from '../alert/Alert';
import { HomeContext } from '../../context/HomeContext';
import UserSignupLoginBtn from '../userSignupLoginBtn/UserSignupLoginBtn';

const Navbar = () => {
    const { setMenu, category, setCategory, categoryList, setCategoryList, menu, userSignupLoginBtn, setUserSignupLoginBtn } = useMenu();
    const { getTotalCartItems } = useContext(HomeContext);
    const location = useLocation();

    const isHome = location.pathname === '/';

    return (
        <>
            {/* Top Navbar - visible on large screens */}
            <div className='navbar' id='top'>
                <div className='logo' onClick={() => { setMenu("navBottom-home") }}>
                    <Link to='/' >
                        <img src={logo1} alt="logo" />
                    </Link>
                </div>

                <div className='category' onClick={() => { setCategory(!category); setCategoryList(!categoryList) }}>
                    <Link to='' className='category-link'>
                        Shop by <p><b>Category </b> {category ? <FaMinus /> : <FaPlus />}</p>
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
                    <Link to='/basket'>
                        <span><FaBagShopping /></span>
                    </Link>
                    <p>Basket</p>
                    <div>{getTotalCartItems()}</div>
                </div>
            </div>

            {/* Bottom Navbar - visible on small screens */}
            <div className="navBottom">
                <div className='navBottom-home' onClick={() => { setMenu("navBottom-home") }}>
                    <Link to='/' className='navBottom-link'>
                        <div className='navBottom-div' style={{ color: menu === "navBottom-home" && "#659f00" }}>
                            <img src={logo2} alt="home" />
                            <p>Home</p>
                        </div>
                    </Link>
                </div>

                <div className='navBottom-category' onClick={() => { setMenu("navBottom-category"); setCategoryList(!categoryList); }}>
                    <Link to='' className='navBottom-link'>
                        <div className='navBottom-div' style={{ color: menu === "navBottom-category" && "#659f00" }}>
                            <BiCategory />
                            <p>Categories</p>
                        </div>
                    </Link>
                </div>

                <div className='navBottom-user' onClick={() => { setMenu("navBottom-user"); setUserSignupLoginBtn(!userSignupLoginBtn); }}>
                    <Link to='' className='navBottom-link'>
                        <div className='navBottom-div' style={{ color: menu === "navBottom-user" && "#659f00" }}>
                            <BiUserCircle />
                            <p>User</p>
                        </div>
                    </Link>
                </div>

                <div className='navBottom-basket' onClick={() => { setMenu("navBottom-basket") }}>
                    <Link to='/basket' className='navBottom-link'>
                        <span>{getTotalCartItems()}</span>
                        <div className='navBottom-div' style={{ color: menu === "navBottom-basket" && "#659f00" }}>
                            <BiBasket />
                            <p>Basket</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Conditional Rendering */}
            {categoryList && isHome && <CategoryList />}
            {categoryList && !isHome && <Alert alert='Category Will Only Show When You Are At Home Page' />}
            {categoryList && isHome && <CategoryListBottom />}
            {userSignupLoginBtn && <UserSignupLoginBtn />}
        </>
    )
}

export default Navbar;

