import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeCarousel from '../components/homeCarousel/HomeCarousel'
import HomeCategory from '../components/homeCategory/HomeCategory'
import HomeProduct from '../components/homeProduct/HomeProduct'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import Footer from '../components/footer/Footer'

const Home = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('Little Basket - Home');
    }, []);

    return (
        <div>
            <Navbar />
            <HomeCarousel />
            <HomeCategory />
            <HomeProduct />
            <ScrollToTop />
            <Footer />
        </div>
    )
}

export default Home
