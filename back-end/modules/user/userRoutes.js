import Router from "express";
import { getAllUsers, getoneUser, toggleUserStatus } from "./userController.js";

export const userRoute = Router();


userRoute.get("/users",getAllUsers )
userRoute.get("/:id",getoneUser )
userRoute.patch("/changestatus/:id",toggleUserStatus )