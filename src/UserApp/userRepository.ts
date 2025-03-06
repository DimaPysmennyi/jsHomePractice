// Импорт не используется, нужно убрать
import { Prisma } from "@prisma/client";
import client from "../client/client";
import { CreateUser } from "./userTypes";
// Импорт не используется, нужно убрать
import { hash } from "bcrypt";

async function findUserByEmail(emailValue: string){
    // try catch для всех репо
    let user = await client.user.findUnique({
        where: {
            email: emailValue
        }
    })

    return user;


} 

async function findUserById(id: number){
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


} 

async function createUser(userData: CreateUser){
    let user = await client.user.create({
        data: {
            username: userData.username,
            email: userData.email,
            password: userData.password,
            role: 'user'
        }
    })

    return user;

}

export const userRepository = {
    findUserByEmail: findUserByEmail,
    findUserById: findUserById,
    createUser: createUser,
}