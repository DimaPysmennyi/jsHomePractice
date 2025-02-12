import { Prisma } from "@prisma/client"

type Post = Prisma.PostGetPayload<{}>;
type Comment = Prisma.CommentGetPayload<{}>;
type User = Prisma.UserGetPayload<{}>;

export interface IPostSuccess{
    status: 'success',
    data: Post
}

export interface IPostError{
    status: 'error',
    message: string
}

export interface IPostsSuccess{
    status: 'success',
    data: Post[]
}

export interface ICommentSuccess{
    status: "success",
    data: Comment
}

export interface ICommentsSuccess{
    status: "success",
    data: Comment[]
}

export interface ICommentError{
    status: "error",
    message: string
}

export interface IUserError{
    status: 'error',
    message: string
}

export interface IUserSuccess{
    status: 'success',
    data: User
}

