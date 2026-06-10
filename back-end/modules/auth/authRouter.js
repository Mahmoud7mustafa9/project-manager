import { Router } from "express";
import { signIn, signUp } from "./authController.js";
import { isExist } from './../../middlewares/isExist.js';

export const authRouter = Router();

authRouter.post("/signup", isExist , signUp) ;
authRouter.post("/signin", signIn) ;