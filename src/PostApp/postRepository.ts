import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import client from "../client/client";
import { Prisma } from "@prisma/client";


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

async function getAllPosts(){
    try {
        let posts = await client.post.findMany({});
        return posts;
    } catch(error) {
        handleError(error)
    }
}

async function getPostById(id: number){
    try {
        let post = await client.post.findUnique({
            where: {
                id: id
            }
        })

        return post
    } catch (error) {
        handleError(error);
    }
}

async function createPost(data: Prisma.PostCreateInput){
    try {
        await client.post.create({
            data: data
        })
    } catch (error){
        handleError(error);
    }
}

const postRepository = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
}

export default postRepository;