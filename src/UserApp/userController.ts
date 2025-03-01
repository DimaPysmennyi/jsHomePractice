import userService from './userService'
import { Request, Response } from "express";
import { SECRET_KEY } from '../config/token';
import { sign } from 'jsonwebtoken';


export function renderLogin(req: Request, res: Response){
    res.render('login')
}



export function renderRegistration(req: Request, res: Response){
    res.render('registration');
}

