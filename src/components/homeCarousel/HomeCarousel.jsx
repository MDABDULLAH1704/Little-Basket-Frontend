import React from 'react'
import './HomeCarousel.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide, Fade, Zoom } from 'react-slideshow-image';
import caro1 from '../assets/caro1.png'
import caro2 from '../assets/caro2.png'
import caro3 from '../assets/caro3.png'

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
            <Slide duration={3000} >
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
