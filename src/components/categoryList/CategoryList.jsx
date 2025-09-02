import React from 'react'
import './CategoryList.css'
import { Link } from 'react-router-dom';
import { useMenu } from '../../context/MenuContext';


const CategoryList = () => {
    const { setCategory } = useMenu();
    const { setCategoryList } = useMenu();

    return (
        <>
            <div className='categoryList category-wrapper'>
                <Link className='link' to='/category/Produce'>
                    <p onClick={() => { setCategory(false); setCategoryList(false); }}>
                        Fresh Produce
                    </p>
                </Link>
                <Link className='link' to='/category/Grain'>
                    <p onClick={() => { setCategory(false); setCategoryList(false); }}>
                        Food Grains
                    </p>
                </Link>
                <Link className='link' to='/category/Beverage'>
                    <p onClick={() => { setCategory(false); setCategoryList(false); }}>
                        Beverages
                    </p>
                </Link>
                <Link className='link' to='/category/Snacks'>
                    <p onClick={() => { setCategory(false); setCategoryList(false); }}>
                        Snacks & Branded Food
                    </p>
                </Link>
                <Link className='link' to='/category/Hygiene'>
                    <p onClick={() => { setCategory(false); setCategoryList(false); }}>
                        Hygiene
                    </p>
                </Link>
                <Link className='link' to='/category/Household'>
                    <p onClick={() => { setCategory(false); setCategoryList(false); }}>
                        Cleaning & Household
                    </p>
                </Link>
                <Link className='link' to='/category/Dairy'>
                    <p onClick={() => { setCategory(false); setCategoryList(false); }}>
                        Dairy Products
                    </p>
                </Link>
                <Link className='link' to='/category/Meat'>
                    <p onClick={() => { setCategory(false); setCategoryList(false); }}>
                        Meat
                    </p>
                </Link>
            </div>
        </>
    )
}

export default CategoryList
