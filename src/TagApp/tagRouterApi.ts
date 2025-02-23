import tagControllerApi from "./tagControllerApi";
import { Router } from "express";

const router = Router();

router.get('/getAllTags', tagControllerApi.getAllPosts);

export default router;