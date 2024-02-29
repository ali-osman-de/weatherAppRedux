import * as icon from "react-icons/md";

function getWeatherWindDir(windDir, weatherIconStyle = { height: "60px", width: "60px" }) {
    const { MdNorth, MdNorthEast, MdNorthWest, MdEast, MdSouthEast, MdSouth, MdSouthWest, MdWest } = icon;

    switch (windDir) {
        case "N":
            return <MdNorth style={weatherIconStyle} />;
        case "NNE":
            return <MdNorthEast style={weatherIconStyle} />;
        case "NE":
            return <MdNorthWest style={weatherIconStyle} />;
        case "ENE":
            return <MdNorthEast style={weatherIconStyle} />;
        case "E":
            return <MdEast style={weatherIconStyle} />;
        case "ESE":
            return <MdSouthEast style={weatherIconStyle} />;
        case "SE":
            return <MdSouthEast style={weatherIconStyle} />;
        case "SSE":
            return <MdSouthEast style={weatherIconStyle} />;
        case "S":
            return <MdSouth style={weatherIconStyle} />;
        case "SSW":
            return <MdSouthWest style={weatherIconStyle} />;
        case "SW":
            return <MdSouthWest style={weatherIconStyle} />;
        case "WSW":
            return <MdSouthWest style={weatherIconStyle} />;
        case "W":
            return <MdWest style={weatherIconStyle} />;
        case "WNW":
            return <MdNorthWest style={weatherIconStyle} />;
        case "NW":
            return <MdNorthWest style={weatherIconStyle} />;
        case "NNW":
            return <MdNorthWest style={weatherIconStyle} />;
        default:
            return null;
    }
}

export default getWeatherWindDir;
