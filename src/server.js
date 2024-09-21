const moment = require('moment');
const path = require('path');
const express = require('express')

function getDate(){
    let date = moment().format("YYYY/DD/MM HH:mm:ss");
    return date;
}

const app = express();

app.use('/static/', express.static(path.join(__dirname, 'static'))) 

const HOST = "localhost";
const PORT = 8000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './templates/index.html'))
})

app.get("/date", () => {
    console.log(getDate());
})

app.listen(PORT, HOST, () => {
    console.log("running");
})