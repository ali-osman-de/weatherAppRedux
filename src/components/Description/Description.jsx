import React from 'react'
import { TiWeatherDownpour, TiWeatherWindy, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny } from "react-icons/ti";




function Description() {
    return (

        <div className='my-5 p-3 bg-dark text-light d-flex align-items-center justify-content-evenly shadow-lg rounded-4'>
            <h1 className='fs-4 fw-medium'>Reliable Data</h1>
            <hr className="my-0" style={{ height: "40px", borderLeft: "2px solid white" }} />
            <TiWeatherDownpour
                style={{
                    height: "30px",
                    width: "30px"
                }}
            />
            <hr className="my-0" style={{ height: "40px", borderLeft: "2px solid white" }} />
            <TiWeatherWindy
                style={{
                    height: "30px",
                    width: "30px"
                }}
            />
            <hr className="my-0" style={{ height: "40px", borderLeft: "2px solid white" }} />
            <TiWeatherSnow
                style={{
                    height: "30px",
                    width: "30px"
                }}
            />
            <hr className="my-0" style={{ height: "40px", borderLeft: "2px solid white" }} />
            <TiWeatherStormy
                style={{
                    height: "30px",
                    width: "30px"
                }}
            />
            <hr className="my-0" style={{ height: "40px", borderLeft: "2px solid white" }} />

            <TiWeatherSunny
                style={{
                    height: "30px",
                    width: "30px"
                }}
            />
        </div>

    )
}

export default Description