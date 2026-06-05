
import mongoose from"mongoose"

export const connectDb = mongoose.connect('mongodb://127.0.0.1:27017/projects-manager')
.then(()=>{
    console.log("db connected successfully");})
.catch((err)=>{console.log("connection failed ",err)})