import { Router } from "express";
import { createCommentToPost } from "./commentController";
import { getCommentsByPostId } from "./commentController";
import { authMiddleware } from "../middlewares/authMiddleware";


const router = Router();

router.post('/create', authMiddleware, createCommentToPost);
router.post('/:id', getCommentsByPostId);

export default router;