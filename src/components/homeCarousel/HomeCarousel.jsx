import React from 'react'
import './HomeCarousel.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import caro1 from '../assets/caro1.png'
import caro2 from '../assets/caro2.png'
import caro3 from '../assets/caro3.png'

// Custom arrow components (you can use icons instead of text)
const arrowStyles = {
    width: '30px',
    height: '30px',
    background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '20px',
    cursor: 'pointer',
    zIndex: 2
}

const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover'
}

const slideImages = [
    {
        url: caro1,
    },
    {
        url: caro2,
    },
    {
        url: caro3,
    },
];

const HomeCarousel = () => {
    return (
        <div className='slide-container' >
            <Slide
                duration={1500}
                prevArrow={
                    <div style={{ ...arrowStyles, marginRight: '10px' }}>
                        &#10094; {/* Left arrow symbol */}
                    </div>
                }
                nextArrow={
                    <div style={{ ...arrowStyles, marginLeft: '10px' }}>
                        &#10095; {/* Right arrow symbol */}
                    </div>
                }
            >
                {slideImages.map((image, index) => (
                    <div key={index} className='Slide-div'>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${image.url})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default HomeCarousel
