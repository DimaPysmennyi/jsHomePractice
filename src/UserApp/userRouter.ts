import { renderLogin, renderRegistration } from "./userController";
import express from "express";

const userRouter = express.Router();

userRouter.get('/login', renderLogin);
userRouter.get('/registration', renderRegistration);

export default userRouter;