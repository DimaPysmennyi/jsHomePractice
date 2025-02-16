import { Prisma } from "@prisma/client"

export type Post = Prisma.PostGetPayload<{}>;
export type Comment = Prisma.CommentGetPayload<{}>;
export type User = Prisma.UserGetPayload<{}>;

export interface IError{
    status: 'error',
    message: string
}

export interface ISuccess<T>{
    status: 'success',
    data: T
}

