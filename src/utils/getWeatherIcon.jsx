import { BsCloudLightningRain } from "react-icons/bs";
import { IoMdPartlySunny, IoMdSunny } from "react-icons/io";
import * as Wi from "react-icons/wi";

const getWeatherIcon =  (weatherCondition, weatherIconStyle = { height: "200px", width: "200px" }) => {
    switch (weatherCondition) {
        case 1000:
            return <IoMdSunny className="text-warning" style={weatherIconStyle} />;
        case 1003:
            return <IoMdPartlySunny style={weatherIconStyle} />;
        case 1006:
            return <Wi.WiCloud style={weatherIconStyle} />;
        case 1009:
            return <Wi.WiCloudy style={weatherIconStyle} />;
        case 1030:
            return <Wi.WiFog style={weatherIconStyle} />;
        case 1063:
            return <Wi.WiDayShowers style={weatherIconStyle} />;
        case 1066:
            return <Wi.WiSnow style={weatherIconStyle} />;
        case 1069:
            return <Wi.WiSleet style={weatherIconStyle} />;
        case 1072:
            return <Wi.WiDayHail style={weatherIconStyle} />;
        case 1087:
            return <Wi.WiThunderstorm style={weatherIconStyle} />;
        case 1114:
            return <Wi.WiSnowWind style={weatherIconStyle} />;
        case 1117:
            return <Wi.WiSnowWind style={weatherIconStyle} />;
        case 1135:
            return <Wi.WiFog style={weatherIconStyle} />;
        case 1147:
            return <Wi.WiFog style={weatherIconStyle} />;
        case 1150:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1153:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1168:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1171:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1180:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1183:
            return <BsCloudLightningRain style={weatherIconStyle} />;
        case 1186:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1189:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1192:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1195:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1198:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1201:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1204:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1207:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1210:
            return <Wi.WiSnow style={weatherIconStyle} />;
        case 1213:
            return <Wi.WiSnow style={weatherIconStyle} />;
        case 1216:
            return <Wi.WiSnow style={weatherIconStyle} />;
        case 1219:
            return <Wi.WiSnow style={weatherIconStyle} />;
        case 1222:
            return <Wi.WiSnow style={weatherIconStyle} />;
        case 1225:
            return <Wi.WiSnow style={weatherIconStyle} />;
        case 1237:
            return <Wi.WiSleet style={weatherIconStyle} />;
        case 1240:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1243:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1246:
            return <Wi.WiRain style={weatherIconStyle} />;
        case 1249:
            return <Wi.WiSleet style={weatherIconStyle} />;
        case 1252:
            return <Wi.WiSleet style={weatherIconStyle} />;
        case 1255:
            return <Wi.WiSnow style={weatherIconStyle} />;
        case 1258:
            return <Wi.WiSnow style={weatherIconStyle} />;
        case 1261:
            return <Wi.WiSleet style={weatherIconStyle} />;
        case 1264:
            return <Wi.WiSleet style={weatherIconStyle} />;
        case 1273:
            return <Wi.WiThunderstorm style={weatherIconStyle} />;
        case 1276:
            return <Wi.WiThunderstorm style={weatherIconStyle} />;
        case 1279:
            return <Wi.WiThunderstorm style={weatherIconStyle} />;
        case 1282:
            return <Wi.WiThunderstorm style={weatherIconStyle} />;
        default:
            return null;
    }
};

export default getWeatherIcon;
