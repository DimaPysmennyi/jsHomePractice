import { userRepository } from "./userRepository"
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
    password: string,
}

async function authLogin(data: any): Promise< IUserError | IUserSuccess >{
    let user = await userRepository.findUserByEmail(data.email);
    console.log(user);
    if (!user){
        return {status: "error", message: "User doesn't exist"};
    } 

    if (user.password == data.password){
        return {status: "success", data: user};
    } 
    
    return {status: "error", message: "Wrong Password"};
    // return user;
}

async function authRegistration(data: Prisma.UserCreateInput): Promise< IUserError | IUserSuccess >{
    let user = await userRepository.findUserByEmail(data.email)
    // console.log(user)
    
    if (!user){
        data["role"] = "user";
        // console.log(data)
        user = await userRepository.createUser(data);
        return {'status': 'success', data: user}
    } 
    return {status: 'error', message: 'User Exists'};




}

const userService = {
    authLogin: authLogin,
    authRegistration: authRegistration
}

export default userService