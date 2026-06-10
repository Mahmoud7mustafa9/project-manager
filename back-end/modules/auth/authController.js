import { User } from "../../DB/models/userSchema.js";
import jwt from"jsonwebtoken";
import  bcrypt from 'bcrypt';

export const signUp = async(req,res) => {

const data = new User(req.body);

await data.save();

res.status(200).json({message:"user created successfully", data})
}

export const signIn = async (req,res) => {
const {email , password} = req.body

const data = await User.findOne({email}).select("+password");

if(!data) return res.status(400).json({message:"user is not found"})

const isMatch = await bcrypt.compare( password , data.password);

if(!isMatch) return res.status(400).json({message:"wrong password"})

if(data.status === "inactive") return res.status(400).json ({message : "you are not active , please contact the admin .."})

return jwt.sign({id:data._id,name:data.name, role:data.nole},process.env.SECRET,(err,token)=>{
    
  res.status(200).json({message:"you signed in successfully", token })
})    


}