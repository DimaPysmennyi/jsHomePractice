import { Router } from "express";
import { authLogin, authRegistration, getUserByToken } from "./userControllerApi";
import { authTokenMiddleware } from "../middlewares/authTokenMiddleware";

const router = Router();

router.post('/register', authRegistration);
router.post('/login/', authLogin);
router.get('/me', getUserByToken, authTokenMiddleware);

export default router;