import { sign } from "jsonwebtoken";
import userService from "./userService";
import { Request, Response } from "express";
import { SECRET_KEY } from "../config/token";

export async function authRegistration(req: Request, res: Response){
    let result = await userService.authRegistration(req.body);
    res.json(result);
}

export async function authLogin(req: Request, res: Response){
    const data = req.body
    const result = await userService.authLogin(data.email, data.password);
    // console.log(data)
    
    res.json(result);

    // console.log('success');
}

export async function getUserByToken(req: Request, res: Response){
    const result = await userService.getUserByToken(+res.locals.userId);
    res.json(result);
}