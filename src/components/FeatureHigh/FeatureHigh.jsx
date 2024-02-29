import React from 'react'
import { TbTimeDuration5, TbTriangleSquareCircle, TbTrendingUp, TbTerminal } from "react-icons/tb";


function FeatureHigh() {
    return (
        <div className='my-5 p-3'>
            <div className='my-3'>
                <h1 className='text-warning fs-5 fw-semibold'>Real-Time Forecast</h1>
            </div>
            <div className='my-3'>
                <h1 className='text-light fw-light'>
                    Stay Updated with Precise Weather Info
                </h1>
            </div>

            <div className='my-5'>
                <p className='fs-6 fw-light text-light opacity-50'>
                    Get continuous updates on the latest weather conditions to plan your day efficiently
                </p>
            </div>

            <div className='my-5 d-flex justify-content-between text-light'>
                <div>
                    <p className='opacity-75'><TbTimeDuration5 className='fs-3' /> Stay Informed in Real-Time</p>
                    <p className='opacity-75'><TbTrendingUp className='fs-3' /> Confidently Plan Your Activities</p>
                </div>
                <div>
                    <p className='opacity-75'><TbTriangleSquareCircle className='fs-3' /> Continuous Weather Updates</p>
                    <p className='opacity-75'><TbTerminal className='fs-3' /> Early Warning System and Preparedness</p>
                </div>
            </div>


        </div>
    )
}

export default FeatureHigh