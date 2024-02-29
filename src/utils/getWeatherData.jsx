
function getWeatherData(weather) {

    const language = navigator.language;
    const loading = weather.loading;
    const city = weather?.weather?.location?.name;
    const country = weather?.weather?.location?.country;
    const temp = weather?.weather?.current?.temp_c;
    const wind = weather?.weather?.current?.wind_dir;
    const windSpeed = weather?.weather?.current?.wind_kph;
    const humidity = weather?.weather?.current?.humidity;
    const visibility = weather?.weather?.current?.vis_km;
    const pressure = weather?.weather?.current?.pressure_mb;
    const uv = weather?.weather?.current?.uv;
    const local_time = weather?.weather?.location?.localtime;
    const last_updated = weather?.weather?.current?.last_updated;
    const weatherCondition = weather?.weather?.current?.condition?.code;

    return {
        language,
        loading,
        city,
        country,
        temp,
        wind,
        windSpeed,
        humidity,
        visibility,
        pressure,
        uv,
        local_time,
        last_updated,
        weatherCondition
    };
}

export default getWeatherData;
