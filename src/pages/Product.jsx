import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import NavBottom from '../components/navBottom/NavBottom'
import { HomeContext } from '../context/HomeContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/productDisplay/ProductDisplay'
import Footer from '../components/footer/Footer'

const Product = () => {
    const { all_product } = useContext(HomeContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('Little Basket - Product');
    }, []);

    return (
        <div>
            <Navbar />
            <NavBottom />
            <ProductDisplay product={product} />
            <Footer />
        </div>
    )
}

export default Product
