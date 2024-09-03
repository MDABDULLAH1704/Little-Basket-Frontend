import React from 'react';
import './ScrollToTop.css';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import { BiArrowToTop } from 'react-icons/bi';


const ScrollToTop = () => {
    const scrollToTop = () => {
        animateScroll.scrollToTop({
            duration: 300,
            smooth: true,
        });
    };

    return (
        <ScrollLink to="top" spy={true} smooth={true} duration={300}>
            <div className="scrollToTop" onClick={scrollToTop}>
                <span><BiArrowToTop /></span>
            </div>
        </ScrollLink>
    );
};

export default ScrollToTop;
