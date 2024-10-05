const moment = require('moment');
const path = require('path');
const express = require('express')

const posts =  [
    {
        name: 'Post 1', 
        author: 'Author 1',
        description: 'desc',
        time: moment().format('dddd')
    },
    {
        name: 'Post 2', 
        author: 'Author 2',
        description: 'desc',
        time: moment().format('dddd')
    },
    {
        name: 'Post 3', 
        author: 'Author 3',
        description: 'desc',
        time: moment().format('dddd')
    
    }
]

function getDate(){
    let date = moment().format("YYYY/DD/MM HH:mm:ss");
    return date;
}

const app = express();

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "templates"))

app.use('/static/', express.static(path.join(__dirname, 'static'))) 
app.use(express.json())

const HOST = "localhost";
const PORT = 8000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './templates/index.html'));

})

app.get('/posts', (req, res) => {
    const context = {posts: posts}

    res.render('posts', context);
})

app.get('/post/:id', (req, res) => {
    const id = req.params.id

    const context = {
        post: posts[id-1]
    }

    // console.log(context.post);

    if (id <= posts.length){
        res.render('post', context);
    } else{
        res.send('<h1>Пост не знайдено</h1> <a href="/posts/">Всі пости</a>')
        // res.send("not found")
    }
})

app.post('/post/create', (req, res) => {
    posts.push(req.body)
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