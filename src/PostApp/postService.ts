import moment from 'moment';
import { Request } from 'express';
import postRepository from './postRepository';

export async function getAllPosts(){
    const context = {posts: await postRepository.getAllPosts()}
    return context;
}

export async function getPostById(id: number){
    const context = {
        post: await postRepository.getPostById(id)
    }

    return context;
};


export async function createPost(req: Request){
    await postRepository.createPost(req.body)
    console.log("123")
}