import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import HomeCarousel from '../components/homeCarousel/HomeCarousel';
import { HomeContext } from '../context/HomeContext';
import { useParams } from 'react-router-dom';
import CategoryDisplay from '../components/categoryDisplay/CategoryDisplay';

const Category = () => {
    const { All_Product } = useContext(HomeContext);
    const { category } = useParams();

    // filter products that match category
    const categoryProduct = All_Product.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <>
            <Navbar />
            <HomeCarousel />
            <CategoryDisplay category={category} categoryProduct={categoryProduct} />
        </>
    )
}

export default Category
