const fs = require("fs");
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const port = 5000;
const whitelist = ["http://localhost:3000"];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
const urltest = `https://oaosman84.github.io/statics/mock_transaction_data`;
app.use(cors(corsOptions));
app.use(express.json());

async function getWeather() {
    // const url = `http://api.weatherstack.com/current?access_key=6bff94d32b0fe01ce3ebbf3f1e5387c3&query=${city}`;
    const dataOld = fs.readFileSync("./utils/current.json");
    dataOldJSON = await JSON.parse(dataOld);
    return dataOldJSON;
    // try {
    //     let response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // } catch (error) {
    //     console.log("getweather error", error);
    // }
}

app.get("/getweather", async (req, res) => {
    // console.log(req.query.address);
    let data = await getWeather();
    // const dataOld = fs.readFileSync("tempdata.json");
    // dataOldJSON = await JSON.parse(dataOld);

    // const newDataJSON = [...dataOldJSON, data];
    // const x = await JSON.stringify(newDataJSON);
    // console.log(x);
    // fs.writeFileSync("tempdata.json", JSON.stringify(data), (err) => {
    //     if (err) {
    //         res.render("Error writing data");
    //         return;
    //     }
    //     return data;
    // });

    res.send(data);
    // console.log(data);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
