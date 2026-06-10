import { Project } from "../../DB/models/projectSchema.js";
import { Task } from "../../DB/models/taskSchema.js";


export const addProject = async (req,res)=>{

let project = await new Project(req.body);

await project.save();

res.status(200).json({message:"project created successfully >>> "})

}


export const getAllProjects = async (req,res)=>{


    const projects = await Project.find()
    .populate({path:"users",select:"name email status -_id"}) 
    .populate({path:"tasksList",select:"title status assignedUser"}) ; 

if (!projects) return res.status(400).json({message:"no projects founded"})

res.status(200).json({message:"sucecss" ,data: projects}) ;


}
export const getOneProject = async (req,res)=>{

    const project = await Project.findById(req.params.id)
    .populate({path:"users",select:"name email status -_id"}) 
    .populate({path:"tasksList",
        populate:({
            path:"assignedUser", select:"name email -_id" })
        }) ; 
 
if (!project) return res.status(400).json({message:"no project found"})

res.status(200).json({message:"sucesss" , project })


}
export const updateProject = async (req,res)=>{

    const project = await Project.findByIdAndUpdate(req.params.id);
 
if (!project) return res.status(400).json({message:"no project founded"})

    Object.assign(project,req.body)

    await project.save();

res.status(200).json({message:"project updated successfully" , data: project })


}

export const deleteProject = async (req,res)=>{


    const project = await Project.findByIdAndDelete(req.params.id);

if (!project) return res.status(400).json({message:"no project founded"})
    
    await Task.deleteMany({projectId : req.params.id})

res.status(200).json({message:"project is deleted successfully"})


}