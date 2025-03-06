import { Prisma } from "@prisma/client";
import client from "../client/client";

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


async function createCommentToPost(postId: number){
    try{
        let comment = client.comment.create({
            data: {
                headline: 'New Comment',
                body: "Comment text",
                postId: postId,
                // userId тоже должно передаваться, для create можно использовать middleware на авторизацию
                userId: 1,
            }
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