const postService = require('./postService')
import { Request, Response } from 'express';

export async function getAllPosts(req: Request, res: Response) {
    const context = await postService.getAllPosts()
    if (context.status == "error"){
        res.send("error occured")
    } else{
        res.render('posts', context)
    }
}

export async function getPostById(req: Request, res: Response) {
    const id: string = req.params.id
    const context = await postService.getPostById(+id);

    if (context.status == "error"){
        res.send("error occured")
    } else{
        const posts = await postService.getAllPosts();
        console.log(posts.data.length)

        if (+id <= posts.data.length){
            res.render('post', context);
        } else{
            res.send('<h1>Пост не знайдено</h1> <a href="/post/all">Всі пости</a>')
            // res.send("not found")
        }
    }
}

export async function createPost(req: Request, res: Response) {
    let post = await postService.createPost(req.body);
    if (post.status == "error"){
        res.send("error occured")
    } else{
        res.send("success");
    }
}

export async function deletePost(req: Request, res: Response){
    const id: string = req.params.id;
    let post = await postService.deletePost(+id);
    if (post.status == "error"){
        res.send("error occured")
    } else{
        res.send("success")
    }
}