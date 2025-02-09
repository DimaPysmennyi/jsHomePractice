import { Prisma } from "@prisma/client";
import client from "../client/client";

async function findUserByEmail(emailValue: string){
    let user = await client.user.findUnique({
        where: {
            email: emailValue
        }
    })

    return user;


} 

async function createUser(data: Prisma.UserCreateInput){
    let user = await client.user.create({
        data: data
    })

    return user;

}

export const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
}