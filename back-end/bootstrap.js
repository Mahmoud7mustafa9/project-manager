import { userRoute } from "./modules/user/userRoutes.js";
import { authRouter } from "./modules/auth/authRouter.js";
import { taskRouter } from "./modules/tasks/taskRouter.js";
import { ProjectRouter } from "./modules/projects/project.router.js";

export const bootstrap = (app) =>{

    
    app.use("/user", userRoute)
    app.use("/auth", authRouter )
    app.use("/task", taskRouter )
    app.use("/project", ProjectRouter )
    
    app.get ("/", (req,res)=>{
    return res.send(" hello everyone")
    
    })
}