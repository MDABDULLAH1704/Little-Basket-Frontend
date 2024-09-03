import React from 'react'
import './NotFoundPage.css'
import NotFound from '../assets/notFound.webp'
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <div className='notFoundImg'>
                <img src={NotFound} alt="PageNotFound" />
            </div>

            <div className='notFoundPara'>
                <p>LOOKS LIKE YOU'RE LOST</p>
            </div>

            <Link to='/' className='notFoundLink-link'>
                <div className='notFoundLink'>
                    <div>Back to Home <span><HiOutlineArrowNarrowLeft /></span> </div>
                </div>
            </Link>
        </>
    )
}

export default NotFoundPage
