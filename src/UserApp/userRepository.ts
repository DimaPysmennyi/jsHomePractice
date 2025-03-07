import client from "../client/client";
import { CreateUser } from "./types";
import { handlePrismaError } from "../tools/handlePrismaError";

async function findUserByEmail(emailValue: string){
    try {
        let user = await client.user.findUnique({
            where: {
                email: emailValue
            }
        })
    
        return user;
    } catch(error){
        handlePrismaError(error);
    }


} 

async function findUserById(id: number){
    try {
        let user = await client.user.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
            }
        })
    
        return user;
    } catch(error){
        handlePrismaError(error);
    }
} 

async function createUser(userData: CreateUser){
    try{
        let user = await client.user.create({
            data: {
                ...userData,
                role: 'user'
            }
        })
    
        return user;
    } catch(error){
        handlePrismaError(error);
    }
}

export const userRepository = {
    findUserByEmail: findUserByEmail,
    findUserById: findUserById,
    createUser: createUser,
}