import React from 'react'
import { TiWeatherDownpour, TiWeatherWindy, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny } from "react-icons/ti";
import "./Description.css"



function Description() {
    return (

        <div className='reliable'>
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