import { Request, Response, NextFunction } from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies;
    if (cookies.user){
        const userObject = JSON.parse(cookies.user)
        if (userObject["email"] && userObject["username"] && userObject["role"]){
            next()
            // console.log(1231231123)
        } else{
            res.sendStatus(401);
        }
    } else{
        res.sendStatus(401);
    }
}