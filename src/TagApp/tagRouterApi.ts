import tagControllerApi from "./tagControllerApi";
import { Router } from "express";

const router = Router();

router.get('/all', tagControllerApi.getAllTags);

export default router;