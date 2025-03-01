import { Prisma } from "@prisma/client"

export type Post = Prisma.PostGetPayload<{}>;
export type Comment = Prisma.CommentGetPayload<{}>;
export type Tag = Prisma.TagGetPayload<{}>;

export interface IError{
    status: 'error',
    message: string
}

export interface ISuccess<T>{
    status: 'success',
    data: T
}

