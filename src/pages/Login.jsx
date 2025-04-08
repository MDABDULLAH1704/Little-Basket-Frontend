import React, {useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import NavBottom from '../components/navBottom/NavBottom'
import LoginComponent from '../components/loginComponent/LoginComponent'

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
        </div>
    )
}

export default Login
