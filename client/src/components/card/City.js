import React, { useEffect } from "react";
import "./city.css";

const City = ({ name, forecast, img, lat, long }) => {
    // useEffect(() => {}, []);

    return (
        <div className="city">
            <img src={img} alt="day-night" />
            <div className="container">
                <h2>{name}</h2>
                <h4>{forecast}</h4>
            </div>
        </div>
    );
};

export default City;
