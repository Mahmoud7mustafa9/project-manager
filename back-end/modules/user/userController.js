import { User } from "../../DB/models/userSchema.js";


export const addUser = async (req,res) => { 
    const data = new User(req.body);

    await data.save();
    
    return res.status(200).json({message: "user added sucessfully", data})

}