const postService = require('./postService')
import { Request, Response } from 'express';

export async function getAllPosts(req: Request, res: Response) {
    const context: object = await postService.getAllPosts()
    res.render('posts', context)
}

export async function getPostById(req: Request, res: Response) {
    const id: string = req.params.id

    const context = await postService.getPostById(+id);
    const posts = await postService.getAllPosts();
    console.log(posts['posts'].length)

    // console.log(context.post);

    if (+id <= posts['posts'].length){
        res.render('post', context);
    } else{
        res.send('<h1>Пост не знайдено</h1> <a href="/post/all">Всі пости</a>')
        // res.send("not found")
    }
}

export async function createPost(req: Request, res: Response) {
    await postService.createPost(req);
}