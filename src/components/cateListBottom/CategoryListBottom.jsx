import React from 'react'
import './CategoryListBottom.css'
import { Link } from 'react-router-dom';
import { useMenu } from '../../context/MenuContext';


const CategoryListBottom = () => {
    const { category, setCategory } = useMenu();
    const { categoryList, setCategoryList } = useMenu();

    return (
        <div className='categoryListBottom'>
            <Link className='link' to='/category/Produce'>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>
                    Fresh Produce
                </p>
            </Link>
            <Link className='link' to='/category/Grain'>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>
                    Food Grains
                </p>
            </Link>
            <Link className='link' to='/category/Beverage'>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>
                    Beverages
                </p>
            </Link>
            <Link className='link' to='/category/Snacks'>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>
                    Snacks & Branded Food
                </p>
            </Link>
            <Link className='link' to='/category/Hygiene'>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>
                    Hygiene
                </p>
            </Link>
            <Link className='link' to='/category/Household'>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>
                    Cleaning & Household
                </p>
            </Link>
            <Link className='link' to='/category/Dairy'>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>
                    Dairy Products
                </p>
            </Link>
            <Link className='link' to='/category/Meat'>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>
                    Meat
                </p>
            </Link>
        </div>
    )
}

export default CategoryListBottom
