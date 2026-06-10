import { User } from "../../DB/models/userSchema.js";


export const getAllUsers = async(req,res,next)=>{

    const users = await User.find();

    if(!users) return res.status(400).json({message:"no users founded"})

 res.status(200).json({message :"success", data:users})
}

export const getoneUser = async(req,res,next)=>{

    const user = await User.findById(req.params.id);

    if(!user) return res.status(400).json({message:"user is not founded"})

        
 res.status(200).json({message :"success", data:user})
}

export const toggleUserStatus = async(req,res,next)=>{

const {status} = req.body;

 const user = await User.findById(req.params.id).select("+password");

if(!user) return res.status(400).json({message:"user is not founded"})


user.status = status ;

await user.save();

 res.status(200).json({message :`you changed the user's status to ${status} successfuly`, data:user})
}