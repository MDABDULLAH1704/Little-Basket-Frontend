import React from 'react'
import './CategoryList.css'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useMenu } from '../../context/MenuContext';


const CategoryList = () => {
    const { category, setCategory } = useMenu();
    const { categoryList, setCategoryList } = useMenu();

    // Define different offsets based on screen size
    const laptopOffset = 0; // Change this value as per your requirement

    // Function to get offset based on screen width
    const getOffset = () => {
        return window.innerWidth >= 576 && laptopOffset;
    };

    return (
        <>
            <div className='categoryList'>
                <ScrollLink className='link' to='Vegetables' spy={true} smooth={true} offset={getOffset() - 140} duration={500}>
                    <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>Vegetables</p>
                </ScrollLink>

                <ScrollLink className='link' to='Fruits' spy={true} smooth={true} offset={getOffset() - 140} duration={500}>
                    <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>Fruits</p>
                </ScrollLink>

                <ScrollLink className='link' to='NonVegetable' spy={true} smooth={true} offset={getOffset() - 140} duration={500}>
                    <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>Non-Vegetable</p>
                </ScrollLink>
            </div>
        </>
    )
}

export default CategoryList
