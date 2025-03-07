import { Request, Response } from 'express';
import { commentService } from './commentService';

export async function createCommentToPost(req: Request, res: Response){
    let comment = await commentService.createCommentToPost(req.body);
    res.json(comment);
}

export async function getCommentsByPostId(req: Request, res: Response){
    let comments = await commentService.getCommentsByPostId(+req.params.id);
    res.json(comments);
}