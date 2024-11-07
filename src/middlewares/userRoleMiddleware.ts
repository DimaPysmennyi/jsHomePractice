import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";

export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies;
    const userObject: any = verify(cookies.token, SECRET_KEY);
    console.log(userObject)

    if (userObject["role"] == "admin"){
        next()
    } else{
        res.sendStatus(403);
    }
}
