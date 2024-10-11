const postService = require('../services/postService')
import { Request, Response } from 'express';

export function getAllPosts(req: Request, res: Response): void{
    const context: object = postService.getAllPosts()
    res.render('posts', context)
}

export function getPostById(req: Request, res: Response): void{
    const id: string = req.params.id

    const data = postService.getPostById(id)

    const context = data['context'];
    const posts = data['posts'];

    // console.log(context.post);

    if (id <= posts.length){
        res.render('post', context);
    } else{
        res.send('<h1>Пост не знайдено</h1> <a href="/post/all">Всі пости</a>')
        // res.send("not found")
    }
}

export function createPost(req: Request, res: Response): void{
    postService.createPost(req);
}

