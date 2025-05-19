import React, {useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
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
            <SignUpComponent />
        </div>
    )
}

export default SignUp
