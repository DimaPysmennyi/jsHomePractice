import express from 'express';
import { getAllPosts, getPostById, createPost } from './postController';

const router = express.Router();

router.get('/all', getAllPosts)
router.get('/:id', getPostById)
router.post('/create', createPost)


export default router