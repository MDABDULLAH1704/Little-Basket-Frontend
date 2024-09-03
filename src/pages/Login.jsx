import React, {useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import NavBottom from '../components/navBottom/NavBottom'
import LoginComponent from '../components/loginComponent/LoginComponent'
import Footer from '../components/footer/Footer'

const Login = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('Little Basket - Login');
    }, []);

    return (
        <div>
            <Navbar />
            <NavBottom />
            <LoginComponent />
            <Footer />
        </div>
    )
}

export default Login
