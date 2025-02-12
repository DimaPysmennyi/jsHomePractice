import { IPostError, IPostsSuccess, IPostSuccess } from '../types';
import postRepository from './postRepository';
import { Prisma } from '@prisma/client';



export async function getAllPosts(): Promise< IPostsSuccess | IPostError >{
    const context = await postRepository.getAllPosts()

    if (!context){
        return {status: "error", message: 'Posts Not Found'}
    }

    return {status: "success", data: context}
}

export async function getPostById(id: number): Promise< IPostSuccess | IPostError >{
    const context = await postRepository.getPostById(id);
    
    if (!context){
        return {status: "error", message: 'Post Not Found'}
    }

    return {status: "success", data: context}
};


export async function createPost(data: Prisma.PostCreateInput): Promise< IPostSuccess | IPostError >{
    let post = await postRepository.createPost(data);
    if (!post){
        return {status: "error", message: 'Post Creation Error'}
    }
    return {status: "success", data: post}
}

export async function deletePost(id: number): Promise< IPostSuccess | IPostError >{
    let post = await postRepository.deletePost(id);
    if (!post){
        return {status: "error", message: 'Post Delete Error'};
    }
    return {status: "success", data: post};
}