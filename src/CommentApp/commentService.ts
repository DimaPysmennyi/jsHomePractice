import { IError, ISuccess, Comment } from "../types";
import { commentRepository } from "./commentRepository";



async function createCommentToPost(postId: number): Promise< ISuccess<Comment> | IError >{
    let comment = await commentRepository.createCommentToPost(postId);
    if (!comment){
        return {status: "error", message: "Couldn't create a comment"}
    }
    return {status: "success", data: comment}
}

async function getCommentsByPostId(postId: number): Promise< ISuccess<Comment[]> | IError >{
    let comments = await commentRepository.getCommentsByPostId(postId);
    if (!comments){
        return {status: "error", message: "Comments Not Found"}
    }
    return {status: "success", data: comments}
}


export const commentService = {
    createCommentToPost: createCommentToPost,
    getCommentsByPostId: getCommentsByPostId
}