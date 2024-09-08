const moment = require('moment');

function getDate(){
    let date = moment().format("YYYY/DD/MM HH:mm:ss");
    console.log(date);
}

getDate()