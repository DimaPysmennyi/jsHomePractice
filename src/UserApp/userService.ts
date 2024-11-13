import { StringMappingType } from "typescript";
import { findUserByEmail, createUser } from "./userRepository"
import { Prisma } from "@prisma/client";

interface IUserError{
    status: 'error',
    message: string
}

interface IUserSuccess{
    status: 'success',
    data: IUser
}

interface IUser{
    id: number,
    username: string,
    email: string,
    password: string
}

async function authLogin(data: any){
    let user = await findUserByEmail(data.email);
    console.log(user);
    if (!user){
        return null;
    } 
    if (user.password == data.password){
        return user;
    } else {
        return null;
    }
    // return user;
}

async function authRegistration(data: Prisma.UserCreateInput): Promise< IUserError | IUserSuccess >{
    let user = await findUserByEmail(data.email)
    // console.log(user)
    
    if (!user){
        data["role"] = "user";
        // console.log(data)
        user = await createUser(data);
        return {'status': 'success', data: user}
    } 
    return {status: 'error', message: 'User Exists'};




}

const userService = {
    authLogin: authLogin,
    authRegistration: authRegistration
}

export default userService