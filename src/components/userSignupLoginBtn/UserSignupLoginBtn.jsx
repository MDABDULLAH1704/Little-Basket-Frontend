import React from 'react'
import './UserSignupLoginBtn.css'
import { Link } from 'react-router-dom'
import { useMenu } from '../../context/MenuContext'

const UserSignupLoginBtn = () => {
    const { userSignupLoginBtn, setUserSignupLoginBtn } = useMenu();

    return (
        <div className='userBottom' >
            <Link to='/signup' className='userBottom-link'><p onClick={() => { setUserSignupLoginBtn(!userSignupLoginBtn) || window.scrollTo(0, 0) }}>SignUp</p></Link>
            <Link to='/login' className='userBottom-link'><p onClick={() => { setUserSignupLoginBtn(!userSignupLoginBtn) || window.scrollTo(0, 0) }}>Login</p></Link>
        </div>
    )
}

export default UserSignupLoginBtn
