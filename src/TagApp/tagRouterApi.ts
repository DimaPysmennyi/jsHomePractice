import tagControllerApi from "./tagControllerApi";
import { Router } from "express";

const router = Router();
// просто all
                                        // getAll Tags
router.get('/getAllTags', tagControllerApi.getAllPosts);

export default router;