const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

const fetchWeatherRequest = () => ({
    type: FETCH_WEATHER_REQUEST
});

const fetchWeatherSuccess = (weatherData) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: weatherData
});

const fetchWeatherFailure = (error) => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error
});

export const fetchWeatherData = (city) => {
    return async (dispatch) => {
        dispatch(fetchWeatherRequest());
        try {
            const apiKey = '2d06ccc131844b18b71204828231604';
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }

            const data = await response.json();
            dispatch(fetchWeatherSuccess(data));
        } catch (error) {
            dispatch(fetchWeatherFailure(error.message));
        }
    };
};
