import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createPost() {
    await prisma.post.create({
        data: {
            name: 'New Post',
            author: 'Author',
            description: 'desc',
            time: '14:00'
        }
    })
    
    
}

async function createManyPosts() {
    await prisma.post.createMany({
        data: [
            { name: 'New Post', author: 'Author', description: 'desc', time: '14:00'},
            { name: 'New Post', author: 'Author', description: 'desc', time: '14:00'},
            { name: 'New Post', author: 'Author', description: 'desc', time: '14:00'},
        ]
    })
    
    
}

async function updatePost() {
    await prisma.post.update({
        where: {
            id: 1
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

async function main(){
    await createPost();
    await createManyPosts();
    await updatePost();
    await findPost();
    await getAllPosts();
    await deletePost();
}

main().then(() => {
    prisma.$disconnect;
}).catch((error) => {
    console.log(error);
    prisma.$disconnect;
})
