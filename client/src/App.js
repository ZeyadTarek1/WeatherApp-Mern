import React, { useState, useSyncExternalStore } from "react";
import "./App.css";
import City from "./components/card/City";
import imgMoon from "./img/moon.svg";
import imgSun from "./img/sun.svg";

function App() {
    const getValue = async () => {
        console.log(citySearch);

        const result = await fetch(
            `http://localhost:5000/getweather?address=${citySearch}`
        ); //fetch data from API
        let dataJson = await result.json();
        setNewCity(dataJson);
        console.log(dataJson);
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

            {newCity.map((data) => (
                <City
                    key={data.id}
                    name={data.name}
                    forecast={data.forecast}
                    img={data.img}
                    lat={data.lat}
                    long={data.long}
                />
            ))}
        </div>
    );
}

export default App;
