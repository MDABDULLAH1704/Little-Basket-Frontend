import React from 'react'
import './CategoryListBottom.css'
import { Link as ScrollLink } from 'react-scroll';
import { useMenu } from '../../context/MenuContext';


const CategoryListBottom = () => {
    const { category, setCategory } = useMenu();
    const { categoryList, setCategoryList } = useMenu();

    // Define different offsets based on screen size
    const mobileOffset = 0; // Change this value as per your requirement

    // Function to get offset based on screen width
    const getOffset = () => {
        return window.innerWidth < 576 && mobileOffset;
    };

    return (
        <div className='categoryListBottom'>
            <ScrollLink className='link' to='Vegetables' spy={true} smooth={true} offset={getOffset() - 70} duration={500}>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>Vegetables</p>
            </ScrollLink>

            <ScrollLink className='link' to='Fruits' spy={true} smooth={true} offset={getOffset() - 70} duration={500}>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>Fruits</p>
            </ScrollLink>

            <ScrollLink className='link' to='NonVegetable' spy={true} smooth={true} offset={getOffset() - 70} duration={500}>
                <p onClick={() => { setCategory(!category) || setCategoryList(!categoryList) }}>Non-Vegetable</p>
            </ScrollLink>
        </div>
    )
}

export default CategoryListBottom
