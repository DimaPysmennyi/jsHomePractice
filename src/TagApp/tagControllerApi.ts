import tagService from "./tagService";
import { Request, Response } from "express";

async function getAllPosts(req: Request, res: Response){
    let context = await tagService.getAllTags();
    if (context.status == "error"){
        res.json(context.message)
        return;
    }

    res.json(context.data);
}

const tagControllerApi = {
    getAllPosts: getAllPosts
}

export default tagControllerApi;