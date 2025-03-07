import { Prisma } from "@prisma/client";
import client from "../client/client";
import { CreateComment } from "./types";

function handleError(error: unknown){
    if (error instanceof Prisma.PrismaClientKnownRequestError){
        switch (error.code) {
            case 'P2002': 
                console.log(error.message)
                throw error;
            
            case 'P2015':
                console.log(error.message);
                throw error;
            
            case 'P2019':
                console.log(error.message)
                throw error;
        }
    }
}


async function createCommentToPost(data: CreateComment){
    try{
        let comment = client.comment.create({
            data: data
        })
        return comment
    } catch(error){
        handleError(error);
    }
}

async function getCommentsByPostId(postId: number){
    try{
        let comments = client.comment.findMany({
            where: {
                postId: postId
            }
        })
        return comments;
    } catch(error){
        handleError(error);
    }
}

export const commentRepository = {
    createCommentToPost: createCommentToPost,
    getCommentsByPostId: getCommentsByPostId
}