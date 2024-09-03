import React, { useState } from 'react'
import './SignUpComponent.css'
import user from '../assets/user.jpeg'
import baseURL from '../../baseURL/BaseURL'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../../utils'

const SignUpComponent = () => {
    const navigate = useNavigate();

    const [signUpInfo, setSignUpInfo] = useState({
        name: '',
        email: '',
        password: ''
    })

    // Handler for form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignUpInfo = { ...signUpInfo };
        copySignUpInfo[name] = value;
        setSignUpInfo(copySignUpInfo);
    }

    // handleSignUp function
    const handleSignUp = async (e) => {
        e.preventDefault();
        const { name, email, password } = signUpInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
            const url = `${baseURL}/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signUpInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 2500)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <>
            <div className="signUp-btn">
                <div>SignUp</div>
            </div>

            <div className='signUp'>
                <div>
                    <img src={user} alt="Image" />
                </div>
                <div>
                    <form onSubmit={handleSignUp}>
                        <div className='input'>
                            <input
                                value={signUpInfo.name}
                                onChange={handleChange}
                                type='text'
                                name='name'
                                placeholder='Enter name' />
                        </div>
                        <div className='input'>
                            <input
                                value={signUpInfo.email}
                                onChange={handleChange}
                                type='email'
                                name='email'
                                placeholder='Enter email' />
                        </div>
                        <div className='input'>
                            <input
                                value={signUpInfo.password}
                                onChange={handleChange}
                                type='password'
                                name='password'
                                placeholder='Enter password' />
                        </div>

                        <button type='submit'>Create Account</button>

                        <div>
                            <p>Already Have An Account</p>
                            <p><span>Go For <Link to='/login' className='loginLink' ><b>Login</b></Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default SignUpComponent
