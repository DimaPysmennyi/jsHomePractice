import { Prisma } from "@prisma/client";
import { IError, ISuccess, Tag } from "../types";
import tagRepository from "./tagRepository";




async function getAllTags(): Promise <IError | ISuccess<Tag[]>>{
    const context = await tagRepository.getAllTags();
    if (!context){
        return {status: "error", message: "Tags Not Found"}
    }
    return {status: "success", data: context}
}

const tagService = {
    getAllTags: getAllTags
}

export default tagService;