import React from 'react'
import './HomeCategory.css'
import { Link } from 'react-router-dom'
import category1 from '../assets/category1.webp'
import category2 from '../assets/category2.jpeg'
import category3 from '../assets/category3.jpeg'
import category4 from '../assets/category4.jpeg'
import category5 from '../assets/category5.jpeg'
import category6 from '../assets/category6.webp'
import category7 from '../assets/category7.webp'
import category8 from '../assets/category8.webp'

const HomeCategory = () => {
    return (
        <div className="homeCategory">
            <div className='child-homeCategory'>
                <Link to='/category/Produce'>
                    <img src={category1} alt='img' />
                </Link>
                <p>Fresh Produce</p>
            </div>
            <div className='child-homeCategory'>
                <Link to='/category/Grain'>
                    <img src={category2} alt='img' />
                </Link>
                <p>Food Grains</p>
            </div>
            <div className='child-homeCategory'>
                <Link to='/category/Beverage'>
                    <img src={category3} alt='img' />
                </Link>
                <p>Beverages</p>
            </div>
            <div className='child-homeCategory'>
                <Link to='/category/Snacks'>
                    <img src={category4} alt='img' />
                </Link>
                <p>Snacks</p>
            </div>
            <div className='child-homeCategory'>
                <Link to='/category/Hygiene'>
                    <img src={category5} alt='img' />
                </Link>
                <p>Hygiene</p>
            </div>
            <div className='child-homeCategory'>
                <Link to='/category/Household'>
                    <img src={category6} alt='img' />
                </Link>
                <p>Household</p>
            </div>
            <div className='child-homeCategory'>
                <Link to='/category/Dairy'>
                    <img src={category7} alt='img' />
                </Link>
                <p>Dairy</p>
            </div>
            <div className='child-homeCategory'>
                <Link to='/category/Meat'>
                    <img src={category8} alt='img' />
                </Link>
                <p>Meat</p>
            </div>
        </div>
    )
}

export default HomeCategory
