import { addProject, deleteProject, getAllProjects, getOneProject, updateProject } from "./project.controller.js";

import { Router } from "express";

export const ProjectRouter = Router() ;

ProjectRouter.post("/addproject", addProject) ;
ProjectRouter.get("/getprojects", getAllProjects) ;
ProjectRouter.get("/:id", getOneProject) ;
ProjectRouter.put("/:id",updateProject) ;
ProjectRouter.delete("/:id",deleteProject) ;