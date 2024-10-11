import moment from 'moment';
import { Request } from 'express';

const posts =  [
    {
        name: 'Post 1', 
        author: 'Author 1',
        description: 'desc',
        time: moment().format('dddd')
    },
    {
        name: 'Post 2', 
        author: 'Author 2',
        description: 'desc',
        time: moment().format('dddd')
    },
    {
        name: 'Post 3', 
        author: 'Author 3',
        description: 'desc',
        time: moment().format('dddd')
    
    }
]

export function getAllPosts(){
    const context = {posts: posts}
    return context;
}

export function getPostById(id: number){
    const context = {
        post: posts[id-1]
    }

    return {
        context: context,
        posts: posts,
    }
};


export function createPost(req: Request){
    posts.push(req.body)
    console.log("123")
}
