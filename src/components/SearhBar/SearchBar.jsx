import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Card, CardBody, CardTitle, CardSubtitle, Input, Button } from 'reactstrap'
import { fetchWeatherData } from '../../actions/fetchWeatherData';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [city, setCity] = useState('')


    const handleCity = (event) => {
        setCity(event.target.value)
    };

    const handleSearchWeather = () => {
        if (city === "") {
            return
        }
        else {
            dispatch(fetchWeatherData(city));
            navigate(`/result/${city}&${city.toLowerCase()}`)
        }
    };

    return (
        <div className='text-center d-flex my-4'>
            <Card
                className='shadow-lg rounded-4'
                body
                color="dark"
                inverse
                style={{
                    width: '18rem'
                }}
            >
                <CardBody>
                    <CardTitle tag="h2" className='fw-light'>
                        Check Weather
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <div className='mb-3'>
                        <Input
                            placeholder='Type your city'
                            id='searchName'
                            className='text-center opacity-75 rounded-pill'
                            bsSize=""
                            type="search"
                            value={city}
                            onChange={handleCity}
                        />
                    </div>
                    <Button
                        className='rounded-pill border-dark'
                        color='warning'
                        onClick={handleSearchWeather}
                    >
                        Check Weather
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default SearchBar
