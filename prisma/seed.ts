import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createPost() {
    await prisma.post.create({
        data: {
            name: 'New Post',
            author: 'Author',
            description: 'desc',
            time: '14:00',
            userId: 1
        }
    }).then(() => {
        console.log(1231)
    })
}

async function createManyPosts() {
    await prisma.post.createMany({
        data: [
            { name: 'New Post', author: 'Author', description: 'desc', time: '14:00', userId: 1},
            { name: 'New Post', author: 'Author', description: 'desc', time: '14:00', userId: 1},
            { name: 'New Post', author: 'Author', description: 'desc', time: '14:00', userId: 1},
        ]
    })
    
    
}

async function updatePost() {
    await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            name: "Post Update"
        }
    })
}

async function getAllPosts() {
    const posts = await prisma.post.findMany();
    
    return posts
}

async function findPost() {
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })
    
    return post
}

async function deletePost() {
    await prisma.post.delete({
        where: {
            id: 2
        }
    })
}

// Коментарі
async function createComment() {
    await prisma.comment.create({
        data: {
            headline: 'headline',
            body: 'body',
            postId: 1,
            userId: 1
        }
    })
}

async function createManyComments() {
    await prisma.comment.createMany({
        data: [
            { headline: 'headline1', body: 'body', postId: 1, userId: 1},
            { headline: 'headline2', body: 'body', postId: 1, userId: 1},
            { headline: 'headline3', body: 'body', postId: 1, userId: 1}
        ]

    })
}

async function deleteComment() {
    await prisma.comment.delete({
        where: {
            id: 1
        }
    })
}

async function findCommentById() {
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1
        }
    })
    
    return comment
}

async function findCommentAndPrint() {
    const comment = await findCommentById();
    
    console.log(comment?.headline, comment?.body, comment?.src)
}

async function findPostByComment(){
    const comment = await prisma.comment.findUnique({
        where: {
            id: 1
        }
    })

    console.log(comment?.postId)
}

async function updateComment(){
    await prisma.comment.update({
        where: {
            id: 1
        },
        data: {
            headline: 'new headline'
        }
    })
}


async function main(){
    // await createPost();
    // await createManyPosts();
    // await updatePost();
    // await findPost();
    const posts = await getAllPosts();
    await console.log(posts.length)
    // await deletePost();
    // await createComment();
    // await findCommentAndPrint();
}

main().then(() => {
    console.log(123)
}).catch((error) => {
    console.log(error);
    prisma.$disconnect;
})
