import { IError, ISuccess } from "../types";
import { CreateUser, User } from "./types";
import { userRepository } from "./userRepository"
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";



async function authLogin(email: string, password: string): Promise< IError | ISuccess<string> >{
    let user = await userRepository.findUserByEmail(email);
    console.log(user);
    if (!user){
        return {status: "error", message: "User doesn't exist"};
    } 
    console.log(password)
    const isMatch = await compare(password, user.password);
    console.log(isMatch);
    if (isMatch){
        const token = sign(user.id.toString(), SECRET_KEY, {expiresIn: '24h'})
        return {status: "success", data: token};
    } 
    
    return {status: "error", message: "Wrong Password"};
    // return user;
}

async function authRegistration(data: CreateUser): Promise< IError | ISuccess<string> >{
    let user = await userRepository.findUserByEmail(data.email)
    // console.log(user)
    
    
    if (!user){
        const hashedPassword = await hash(data.password, 10)
        const userData = {
            ...data,
            password: hashedPassword
        }
        const newUser = await userRepository.createUser(userData);
        if (!newUser){
            return {"status": "error", message: "User creation error"}
        }
        
        const token = sign(newUser.id.toString(), SECRET_KEY, {expiresIn: '24h'})
        return {'status': 'success', data: token}
    } 
    return {status: 'error', message: 'User already exists'};
}

async function getUserByToken(id: number): Promise< IError | ISuccess<User> >{
    let user = await userRepository.findUserById(id);
    if (!user){
        return {status: "error", message: "User Not Found"}
    }
    return {status: "success", data: user}
}

const userService = {
    authLogin: authLogin,
    authRegistration: authRegistration,
    getUserByToken: getUserByToken,
}

export default userService