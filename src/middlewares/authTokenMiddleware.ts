import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";

interface IToken {
    iat: number,
    exp: number,
    id: number,
}

export function authTokenMiddleware(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers['authorization']
    if (!authHeader){
        res.json({status: "error", message: "Did not get token"})
        return;
    }

    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token){
        res.json({status: "error", message: "Wrong token format"})
        return;
    }

    // const token = verify(authHeader, SECRET_KEY);
    try{
        const newToken = verify(authHeader, SECRET_KEY) as IToken;
        res.locals.userId = newToken.id;
        next()
    } catch(error){
        res.json({status: "error", message: "Invalid token"})
    }
}