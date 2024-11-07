import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";

export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies;
    if (!cookies.token){
        res.sendStatus(401);
    }


    const token: any = verify(cookies.token, SECRET_KEY)
    
    if (!token["email"] && !token["username"] && !token["role"]){
        res.sendStatus(401);
    }

    next()
}