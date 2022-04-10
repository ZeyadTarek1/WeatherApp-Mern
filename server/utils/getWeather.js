const { json } = require("express");
const fs = require("fs");

const dataOld = fs.readFileSync("tempdata.json");
dataOldJSON = JSON.parse(dataOld);

json.push;

console.log(dataOldJSON);
