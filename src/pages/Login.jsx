import React, {useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
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
            <LoginComponent />
        </div>
    )
}

export default Login
