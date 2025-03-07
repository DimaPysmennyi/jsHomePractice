import client from "../client/client";
import { handlePrismaError } from "../tools/handlePrismaError";

async function getAllTags(){
    try{
        const tags = client.tag.findMany({});
        return tags;
    } catch(error){
        handlePrismaError(error);
    }
}

const tagRepository = {
    getAllTags: getAllTags
}

export default tagRepository;