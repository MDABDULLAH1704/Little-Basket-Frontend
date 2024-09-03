import React, { useState } from 'react'
import './LoginComponent.css'
import user from '../assets/user.jpeg'
import baseURL from '../../baseURL/BaseURL'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../../utils'

const LoginComponent = () => {
    const navigate = useNavigate();

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    // Handler for form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    // handleLogin function
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            const url = `${baseURL}/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/')
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
            <div className="login-btn">
                <div>Login</div>
            </div>

            <div className='login'>
                <div>
                    <img src={user} alt="Image" />
                </div>
                <div>
                    <form onSubmit={handleLogin}>
                        <div className='input'>
                            <input
                                value={loginInfo.email}
                                onChange={handleChange}
                                type='email'
                                name='email'
                                placeholder='Enter email' />
                        </div>
                        <div className='input'>
                            <input
                                value={loginInfo.password}
                                onChange={handleChange}
                                type='password'
                                name='password'
                                placeholder='Enter password' />
                        </div>

                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default LoginComponent
