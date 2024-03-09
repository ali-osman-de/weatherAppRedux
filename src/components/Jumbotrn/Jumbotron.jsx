import React from 'react';
import getWeatherIcon from '../../utils/getWeatherIcon';
import getWeatherWindDir from '../../utils/getWeatherWindDir';
import { WiHumidity } from 'react-icons/wi';
import { MdOutlineVisibility } from 'react-icons/md';
import { CgCompressV } from 'react-icons/cg';
import { GiRadiations } from 'react-icons/gi';
import getFormatDate from '../../utils/getFormatDate';
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import getWeatherData from '../../utils/getWeatherData';
import "./Jumbotron.css"


function Jumbotron() {
    const weather = useSelector(state => state.weather);

    // const language = navigator.language;
    // const loading = weather.loading;
    // const city = weather?.weather?.location?.name;
    // const country = weather?.weather?.location?.country;
    // const temp = weather?.weather?.current?.temp_c;
    // const wind = weather?.weather?.current?.wind_dir;
    // const windSpeed = weather?.weather?.current?.wind_kph;
    // const humidity = weather?.weather?.current?.humidity;
    // const visibility = weather?.weather?.current?.vis_km;
    // const pressure = weather?.weather?.current?.pressure_mb;
    // const uv = weather?.weather?.current?.uv;
    // const local_time = weather?.weather?.location?.localtime;
    // const last_updated = weather?.weather?.current?.last_updated;
    // const weatherCondition = weather?.weather?.current?.condition?.code;

    const renderWeatherWindDir = () => {
        return getWeatherWindDir(getWeatherData(weather).wind);
    }

    const renderWeatherIcon = () => {
        return getWeatherIcon(getWeatherData(weather).weatherCondition);
    };

    const renderFormatDate = () => {
        return getFormatDate(getWeatherData(weather).last_updated, getWeatherData(weather).language);
    };

    const renderFormatDateLocal = () => {
        return getFormatDate(getWeatherData(weather).local_time, getWeatherData(weather).language)
    }

    return (
        <div className="my-3 bg-dark text-light shadow-lg border border-info rounded-4">
            {getWeatherData(weather).loading ? (
                <Loading />
            ) : (
                <>
                    <div className='fs-6 fw-light p-3'>
                        <p>{renderFormatDate()}</p>
                    </div>
                    <div className='text-center mt-5'>
                        <h1 className='fw-lighter'>{getWeatherData(weather).city}, {getWeatherData(weather).country}</h1>
                    </div>
                    <div className='fs-6 fw-light p-3 text-center'>
                        <h1 className='fs-6 fw-medium'>
                            Local Time
                        </h1>
                        <p>
                            {renderFormatDateLocal()}
                        </p>
                    </div>
                    <div className="p-3 text-center rounded-3">
                        <div className="d-flex justify-content-evenly align-items-center mt-4 mb-3">
                            {renderWeatherIcon()}
                            <h1 className='fs-1 fw-medium'>{Math.floor(getWeatherData(weather).temp)}°C</h1>
                        </div>
                        <div className='border-2 border-top m-5 opacity-50'></div>
                        <div className='weatherInfoSection'>
                            <div>
                                <div className='d-flex justify-content-center align-items-center fs-4'>
                                    {getWeatherData(weather).wind}{renderWeatherWindDir()}
                                </div>
                                <h1 className='mt-3 fs-2 fw-light'>{Math.floor(getWeatherData(weather).windSpeed)} Knot</h1>
                            </div>
                            <hr className="mx-4" style={{ height: "120px", borderLeft: "2px solid white" }} />
                            <div >
                                <div className='d-flex justify-content-center align-items-center'>
                                    <WiHumidity style={{ height: "60px", width: "60px" }} />
                                </div>
                                <h1 className='mt-3 fs-2 fw-light'>% {getWeatherData(weather).humidity}</h1>
                            </div>
                            <hr className="mx-4" style={{ height: "120px", borderLeft: "2px solid white" }} />
                            <div >
                                <div className='d-flex justify-content-center align-items-center'>
                                    <MdOutlineVisibility style={{ height: "60px", width: "60px" }} />
                                </div>
                                <h1 className='mt-3 fs-2 fw-light'>{getWeatherData(weather).visibility} Km</h1>
                            </div>
                            <hr className="mx-4" style={{ height: "120px", borderLeft: "2px solid white" }} />
                            <div >
                                <div className='d-flex justify-content-center align-items-center'>
                                    <CgCompressV style={{ height: "60px", width: "60px" }} />
                                </div>
                                <h1 className='mt-3 fs-2 fw-light'>{getWeatherData(weather).pressure} mb</h1>
                            </div>
                            <hr className="mx-4" style={{ height: "120px", borderLeft: "2px solid white" }} />
                            <div >
                                <div className='d-flex justify-content-center align-items-center'>
                                    <GiRadiations style={{ height: "60px", width: "60px" }} />
                                </div>
                                <h1 className='mt-3 fs-2 fw-light'>{getWeatherData(weather).uv}</h1>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Jumbotron;
