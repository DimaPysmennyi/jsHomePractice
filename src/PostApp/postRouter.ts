import express from 'express';
import { getAllPosts, getPostById, createPost, deletePost } from './postController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { userRoleMiddleware } from '../middlewares/userRoleMiddleware';

const router = express.Router();

router.use(authMiddleware)

router.get('/all', getAllPosts)
router.get('/:id', getPostById)
router.post('/create', userRoleMiddleware, createPost);
router.get('/delete/:id', userRoleMiddleware, deletePost);


export default router