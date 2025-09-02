import React, { useContext, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import { HomeContext } from '../context/HomeContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import Footer from '../components/footer/Footer';

const Product = () => {
    const { All_Product } = useContext(HomeContext);
    const { id } = useParams();
    const product = All_Product.find((e) => e.id === Number(id));

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
            <ProductDisplay product={product} />
            <Footer />
        </div>
    )
}

export default Product
