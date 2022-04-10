import React, { useState, useSyncExternalStore } from "react";
import "./App.css";
import City from "./components/card/City";

function App() {
    const getValue = async () => {
        // console.log(citySearch);
        // `http://localhost:5000/getweather?address=${citySearch}`
        const result = await fetch(`http://localhost:5000/getweather`); //fetch data from API
        let dataJson = await result.json();
        setNewCity(dataJson);
        // console.log(dataJson);
    };

    const [newCity, setNewCity] = useState([]);
    const [citySearch, setCitySearch] = useState("");

    return (
        <div className="App">
            <h1>Weather Data Lookup</h1>
            <p className="appText">Search for a city: </p>
            <div className="inputForm">
                <input
                    className="textInput"
                    type="text"
                    id="cityName"
                    name="cityName"
                    placeholder="City"
                    value={citySearch}
                    onChange={(e) => setCitySearch(e.target.value)}
                />
                <input
                    className="searchBtn"
                    type="submit"
                    id="submitCity"
                    name="submitCity"
                    onClick={getValue}
                />
            </div>

            {newCity.map((data, i) => (
                <City
                    key={i}
                    name={data.location.name}
                    temperature={data.current.temperature}
                    lat={data.location.lat}
                    long={data.location.lon}
                    weatherDesc={data.current.weather_descriptions[0]}
                    wind={data.current.wind_dir}
                    precipitation={data.current.precip}
                    feelsLike={data.current.feelslike}
                    humidity={data.current.humidity}
                    visibility={data.current.visibility}
                    pressure={data.current.pressure}
                    uvIndex={data.current.uv_index}
                    windSpeed={data.current.wind_speed}
                />
            ))}
        </div>
    );
}

export default App;
