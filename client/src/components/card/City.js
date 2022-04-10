import React, { useEffect } from "react";
import "./city.css";
import imgMoon from "../../img/moon.svg";
import imgSun from "../../img/sun.svg";
import imgCloudy from "../../img/cloudy.svg";
import imgClear from "../../img/clear.svg";

const City = ({
    name,
    temperature,
    lat,
    long,
    weatherDesc,
    wind,
    precipitation,
    feelsLike,
    humidity,
    visibility,
    pressure,
    uvIndex,
    windSpeed,
}) => {
    const weather = {
        Sunny: imgSun,
        Mist: imgMoon,
        "Partly cloudy": imgCloudy,
        Clear: imgClear,
    };

    return (
        <div className="city">
            <img src={weather[weatherDesc]} alt="day-night" />
            <div className="container">
                <h1>{name}</h1>
                <h4>
                    {temperature} Degrees, {weatherDesc}
                </h4>
                <h4>Feels like: {feelsLike}</h4>
                <h4>Humidity: {humidity} %</h4>
                <h4>Precipitation: {precipitation} %</h4>
                <h4>Visibility: {visibility} km</h4>
                <h4>
                    Wind: {wind} {windSpeed} Km/h
                </h4>
                <h4>Pressure: {pressure} mb</h4>
                <h4>
                    lat: {lat} long: {long}
                </h4>
            </div>
        </div>
    );
};

export default City;
