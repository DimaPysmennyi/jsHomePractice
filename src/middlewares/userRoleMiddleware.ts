import { Request, Response, NextFunction } from "express";

export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies;
    const userObject = JSON.parse(cookies.user)
    if (userObject["role"] == "user"){
        next()
        // console.log(234234234243324)
    } else{
        res.sendStatus(403);
    }
}
