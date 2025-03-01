import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";

export function authTokenMiddleware(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers['Authorization']
    if (!authHeader){
        res.json({status: "error", message: "Did not get token"})
        return;
    }

    if (typeof(authHeader) != 'string' || authHeader.substring(0,7) !== "Bearer "){
        res.json({status: "error", message: "Wrong token format"})
        return;
    }

    const token = verify(authHeader, SECRET_KEY);
    if (!token){
        res.json({status: "error", message: "Token expired"});
        return;
    }

    res.locals.userId = token;
    next();


    console.log(authHeader);
}