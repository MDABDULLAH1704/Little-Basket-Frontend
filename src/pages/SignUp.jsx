import React, {useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import NavBottom from '../components/navBottom/NavBottom'
import SignUpComponent from '../components/signUpComponent/SignUpComponent'

const SignUp = () => {
    // Function for Title
    useEffect(() => {
        function useTitle(title) {
            document.title = title;
        }
        useTitle('Little Basket - SignUp');
    }, []);

    return (
        <div>
            <Navbar />
            <NavBottom />
            <SignUpComponent />
        </div>
    )
}

export default SignUp
