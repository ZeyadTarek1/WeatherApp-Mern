const fetch = require("node-fetch");
const fs = require("fs");

// const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/cairo.json?access_token=pk.eyJ1IjoiemV5YWR0YXJlayIsImEiOiJja3pndWk2bGUxcGp3MzRvNjFjZGM3NWh1In0.hrokGij2h43Rhl5S9CiErg&limit=1`;
const urlTest = `https://oaosman84.github.io/statics/mock_transaction_data`;

async function getCoordinatesTest() {
    try {
        const response = await fetch(urlTest);
        const data = await response.json();
        console.log(data);
        fs.writeFile("datajson.json", JSON.stringify(data), (err) => {
            console.log("Saved Data");
            if (err) {
                res.render("Error writing data");
                return;
            }
        });
    } catch (error) {
        console.log("Coordinates fetch error", error);
    }
}

getCoordinatesTest();

async function getCoordinates(city) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        city
    )}.json?access_token=pk.eyJ1IjoiemV5YWR0YXJlayIsImEiOiJja3pndWk2bGUxcGp3MzRvNjFjZGM3NWh1In0.hrokGij2h43Rhl5S9CiErg&limit=1`;
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    // } catch (error) {
    //     console.log("Coordinates fetch error", error);
    // }
    console.log(url);
}

module.exports = getCoordinates;
