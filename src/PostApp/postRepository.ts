import client from "../client/client";
import { Prisma } from "@prisma/client";
import { handlePrismaError } from "../tools/handlePrismaError";

async function getAllPosts(){
    try {
        let posts = await client.post.findMany({});
        return posts;
    } catch(error) {
        handlePrismaError(error)
    }
}

async function getPostById(id: number){
    try {
        let post = await client.post.findUnique({
            where: {
                id: id
            },
            include: {
                comments: true
            }
        })

        return post
    } catch (error) {
        handlePrismaError(error);
    }
}

async function createPost(data: Prisma.PostCreateInput){
    try {
        let post = await client.post.create({
            data: data
        })
        console.log(123123123)
        return post;
        
    } catch (error){
        handlePrismaError(error);
    }
}

async function deletePost(id: number){
    try{
        let post = client.post.delete({
            where: {
                id: id
            }
        })
        return post;
    } catch (error){
        handlePrismaError(error);
    }
}

const postRepository = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    deletePost: deletePost
}

export default postRepository;