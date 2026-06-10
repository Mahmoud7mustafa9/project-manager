import { User } from "../DB/models/userSchema.js"


export const isExist = async(req,res,next)=>{

    let isExist = await User.findOne({email:req.body.email});

    if(isExist) {
        
        res.status(400).json({message:"email is already exist"})
    }
    else{
        
        next()
    }
}