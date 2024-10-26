import { renderLogin, authLogin, renderRegistration, authRegistration } from "./userController";
import express from "express";

const userRouter = express.Router();

userRouter.get('/login', renderLogin);
userRouter.post('/login', authLogin);

userRouter.get('/registration', renderRegistration);
userRouter.post('/registration', authRegistration);

export default userRouter;