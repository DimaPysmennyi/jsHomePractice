import path from 'path';
import moment from 'moment';
import express, { Express, Request, Response } from 'express';
import postRouter from './PostApp/postRouter';



function getDate(): string{
    let date: string = moment().format("YYYY/DD/MM HH:mm:ss");
    return date;
}

const app: Express = express();

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "templates"))

app.use('/static/', express.static(path.join(__dirname, 'static'))) 
app.use(express.json())
app.use('/post/', postRouter)

const HOST: string = "localhost";
const PORT: number = 8000;

app.get('/', (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname, './templates/index.html'));
})

app.get('/user', (req: Request, res: Response): void => {
    res.sendFile(path.join(__dirname, './templates/user.html'));
})

app.get("/date", (): void => {
    console.log(getDate());
})

app.listen(PORT, HOST, () => {
    console.log("running");
})