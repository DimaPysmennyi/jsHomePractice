import userService from './userService'
import { Request, Response } from "express";
import { SECRET_KEY } from '../config/token';
import { sign } from 'jsonwebtoken';


export function renderLogin(req: Request, res: Response){
    res.render('login')
}

export async function authLogin(req: Request, res: Response){
    const user = await userService.authLogin(req.body);
    // console.log(data)
    if (user.status == "error"){
        res.sendStatus(401);
    } else{
        const token = sign(user.data, SECRET_KEY, {expiresIn: "24h"})
        res.cookie('token', token);
        res.sendStatus(200);
    }

    // console.log('success');
}

export function renderRegistration(req: Request, res: Response){
    res.render('registration');
}

export async function authRegistration(req: Request, res: Response){
    let result = await userService.authRegistration(req.body);
    
    if (result.status == 'error'){
        console.log('user exists');
        res.sendStatus(401);
        return;
    }

    const token = sign(result.data, SECRET_KEY, {expiresIn: '24h'})

    res.cookie('token', token);
    res.sendStatus(200);
}