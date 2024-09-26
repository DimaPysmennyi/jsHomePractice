const moment = require('moment');
const path = require('path');
const express = require('express')

function getDate(){
    let date = moment().format("YYYY/DD/MM HH:mm:ss");
    return date;
}

const app = express();

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "templates"))

app.use('/static/', express.static(path.join(__dirname, 'static'))) 

const HOST = "localhost";
const PORT = 8000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './templates/index.html'));

})

app.get('/posts', (req, res) => {
    const context = {posts: [
        {name: 'post 1', author: 'Author 1'},
        {name: 'post 2', author: 'Author 2'},
        {name: 'post 3', author: 'Author 3'}
    ]}

    res.render('posts', context);
})

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, './templates/user.html'));
})

app.get("/date", () => {
    console.log(getDate());
})

app.listen(PORT, HOST, () => {
    console.log("running");
})