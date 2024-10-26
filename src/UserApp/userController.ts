import userService from './userService'
import { Request, Response } from "express";

export function renderLogin(req: Request, res: Response){
    res.render('login')
}

export async function authLogin(req: Request, res: Response){
    const data = await userService.authLogin(req.body);
    // console.log(data)
    if (data != "Not Found"){
        res.cookie('user', JSON.stringify(data));
        res.sendStatus(200);
        console.log('success');
    } else{
        res.sendStatus(401);
    }
}

export function renderRegistration(req: Request, res: Response){
    res.render('registration');
}

export async function authRegistration(req: Request, res: Response){
    let user = await userService.authRegistration(req.body);
    if (user != 'User Exists'){
        res.cookie('user', JSON.stringify(user));
        res.sendStatus(200);
    } else{
        console.log('user exists');
        res.sendStatus(401);
    }
}