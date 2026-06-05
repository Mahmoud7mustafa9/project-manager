import Router from "express";
import { addUser } from "./userController.js";

export const userRoute = Router();


userRoute.post("/adduser", addUser)