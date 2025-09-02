import React from 'react'
import './Footer.css'
import logo1 from '../assets/logo1.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* <div className="footer-p">
                <Link to='/about' className='footer-link'><p>About</p></Link>
                <Link to='/contact' className='footer-link'><p>Contact</p></Link>
                <Link to='/blog' className='footer-link'><p>Blog</p></Link>
                <Link to='/faq' className='footer-link'><p>FAQs</p></Link>
                <Link to='/termsConditions' className='footer-link'><p>Terms and Conditions</p></Link>
                <Link to='/privacyPolicy' className='footer-link'><p>Privacy Policy</p></Link>
            </div> */}

            <div className="footer-last">
                <p>Copyright &copy; {currentYear} Little Basket - All rights reserved!</p>
            </div>
        </>
    )
}

export default Footer
