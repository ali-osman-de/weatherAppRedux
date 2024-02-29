import React from 'react'
import "./hero.css"
import { Button } from 'reactstrap'

function Hero() {

    const scrollDown = () => {
        window.scrollBy({
            top: 750,
            behavior: 'smooth'
        });
    };

    return (
        <div className='backgroundHero bg-dark text-white p-5 text-center shadow-lg rounded-pill d-flex align-items-center justify-content-center my-4'>
            <div className='text-center '>
                <h1 className='fs-1'>
                    Weather Updates Now
                </h1>
                <p className='fs-5'>Check Weather Information</p>
                <Button onClick={scrollDown} color="warning" className='shadow-lg rounded-pill'>
                    Check Local Weather
                </Button>
            </div>
        </div >
    )
}

export default Hero