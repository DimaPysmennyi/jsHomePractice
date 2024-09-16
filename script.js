const moment = require('moment');
const express = require('express')

function getDate(){
    let date = moment().format("YYYY/DD/MM HH:mm:ss");
    return date;
}

const app = express();

const HOST = "localhost";
const PORT = 8000;

app.get("/date", () => {
    console.log(getDate());
})

app.listen(PORT, HOST, () => {
    console.log("running");
})