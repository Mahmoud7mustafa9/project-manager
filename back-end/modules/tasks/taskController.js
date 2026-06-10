import { Task } from "../../DB/models/taskSchema.js";


export const addTask = async(req,res)=>{

let task = await new Task(req.body);

await task.save();

res.status(200).json({message:"task created successfully >>> "})


}


export const getAllTasks = async (req,res)=>{

    let filter = {} ;

    if(req.query.projectId) filter.projectId = req.query.projectId;
    if(req.query.assignedUser) filter.assignedUser = req.query.assignedUser;

    const tasks = await Task.find(filter).populate({path:"projectId", select:"title"}) ; 

if (!tasks) return res.status(400).json({message:"no tasks found"})
res.status(200).json({message:"tasks you searched" , resaults:tasks.length, data:tasks})


}
export const getOneTask = async (req,res)=>{

    const task = await Task.findById(req.params.id);
 
if (!task) return res.status(400).json({message:"no tasks found"})

res.status(200).json({message:"task you searched" , task })


}
export const updateTask = async (req,res)=>{

    const task = await Task.findByIdAndUpdate(req.params.id);
 
if (!task) return res.status(400).json({message:"no tasks found"})
    
Object.assign(task, req.body)

await task.save();

res.status(200).json({message:"task updated successfully" , data: task })


}

export const changeTaskStatus = async (req,res)=>{

    const {status} = req.body;

    const task = await Task.findById(req.params.id);

if (!task) return res.status(400).json({message:"no tasks found"})
    
task.status = status ; 
 
let changedStatus = await task.save();

res.status(200).json({message:"task's status changed successfully" , changedStatus})


}

export const deleteTask = async (req,res)=>{


    const task = await Task.findByIdAndDelete(req.params.id);

if (!task) return res.status(400).json({message:"no tasks found"})
    

res.status(200).json({message:"task is deleted successfully"})


}