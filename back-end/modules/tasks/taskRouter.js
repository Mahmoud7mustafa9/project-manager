import { addTask, changeTaskStatus, deleteTask, getAllTasks, getOneTask, updateTask } from "./taskController.js";

import { Router } from "express";

export const taskRouter = Router() ;

taskRouter.post("/addtask", addTask) ;
taskRouter.get("/gettasks", getAllTasks) ;
taskRouter.get("/:id", getOneTask) ;
taskRouter.put("/:id",updateTask) ;
taskRouter.patch("/:id",changeTaskStatus) ;
taskRouter.delete("/:id",deleteTask) ;