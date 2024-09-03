import React, { useContext } from 'react'
import './NavBottom.css'
import { Link, useLocation } from 'react-router-dom'
import logo2 from '../assets/logo2.png'
import { BiCategory } from 'react-icons/bi'
import { BiUserCircle } from 'react-icons/bi'
import { BiBasket } from 'react-icons/bi'
import { useMenu } from '../../context/MenuContext'
import CategoryListBottom from '../cateListBottom/CategoryListBottom'
import { HomeContext } from '../../context/HomeContext'
import UserSignupLoginBtn from '../userSignupLoginBtn/UserSignupLoginBtn'


const NavBottom = () => {
    const { menu, setMenu } = useMenu();
    const { categoryList, setCategoryList } = useMenu();
    const { userSignupLoginBtn, setUserSignupLoginBtn } = useMenu();
    const location = useLocation();
    const { getTotalCartItems } = useContext(HomeContext);

    // Check if current location is home
    const isHome = location.pathname === '/';

    return (
        <>
            < div className="navBottom" >
                <div className='navBottom-home' onClick={() => { setMenu("navBottom-home") }}>
                    <Link to='/' className='navBottom-link'>
                        <div className='navBottom-div' style={{ color: menu === "navBottom-home" && "#659f00" }}>
                            <img src={logo2} alt="home" />
                            <p>Home</p>
                        </div>
                    </Link>
                </div>

                <div className='navBottom-category' onClick={() => { setMenu("navBottom-category") || setCategoryList(!categoryList) }}>
                    <Link to='' className='navBottom-link'>
                        <div className='navBottom-div' style={{ color: menu === "navBottom-category" && "#659f00" }}>
                            <BiCategory />
                            <p>Categories</p>
                        </div>
                    </Link>
                </div>

                <div className='navBottom-user' onClick={() => { setMenu("navBottom-user") || setUserSignupLoginBtn(!userSignupLoginBtn) }}>
                    <Link to='' className='navBottom-link'>
                        <div className='navBottom-div' style={{ color: menu === "navBottom-user" && "#659f00" }}>
                            <BiUserCircle />
                            <p>User</p>
                        </div>
                    </Link>
                </div>

                <div className='navBottom-basket' onClick={() => { setMenu("navBottom-basket") }}>
                    <Link to='/basket' className='navBottom-link' >
                        <span>{getTotalCartItems()}</span>
                        <div className='navBottom-div' style={{ color: menu === "navBottom-basket" && "#659f00" }}>
                            <BiBasket />
                            <p>Basket</p>
                        </div>
                    </Link>
                </div>
            </div>

            {categoryList && isHome === true && <CategoryListBottom />}
            {userSignupLoginBtn === true && <UserSignupLoginBtn />}
        </>
    )
}

export default NavBottom
