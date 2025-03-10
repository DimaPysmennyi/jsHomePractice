import { IError, ISuccess } from '../types';
import postRepository from './postRepository';
import { CreatePost, Post } from './types';



export async function getAllPosts(): Promise< ISuccess<Post[]> | IError >{
    const context = await postRepository.getAllPosts()

    if (!context){
        return {status: "error", message: 'Posts Not Found'}
    }

    return {status: "success", data: context}
}

export async function getPostById(id: number): Promise< ISuccess<Post> | IError >{
    const context = await postRepository.getPostById(id);
    
    if (!context){
        return {status: "error", message: 'Post Not Found'}
    }

    return {status: "success", data: context}
};


export async function createPost(data: CreatePost): Promise< ISuccess<Post> | IError >{
    let post = await postRepository.createPost(data);
    if (!post){
        return {status: "error", message: 'Post Creation Error'}
    }
    return {status: "success", data: post}
}

export async function deletePost(id: number): Promise< ISuccess<Post> | IError >{
    let post = await postRepository.deletePost(id);
    if (!post){
        return {status: "error", message: 'Post Delete Error'};
    }
    return {status: "success", data: post};
}

export const postService = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost,
    deletePost: deletePost
}