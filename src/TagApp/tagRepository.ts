import { Prisma } from "@prisma/client";
import client from "../client/client";

function handleError(error: unknown){
    if (error instanceof Prisma.PrismaClientKnownRequestError){
        switch (error.code) {
            case 'P2002': 
                console.log(error.message)
                throw error;
            
            case 'P2015':
                console.log(error.message);
                throw error;
            
            case 'P2019':
                console.log(error.message)
                throw error;
        }
    }
}

async function getAllTags(){
    try{

        const tags = client.tag.findMany({});
        return tags;
    } catch(error){
        handleError(error);
    }
}

const tagRepository = {
    getAllTags: getAllTags
}

export default tagRepository;