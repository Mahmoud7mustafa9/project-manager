import express from "express" ;
import dotenv from "dotenv";
import { connectDb } from "./DB/db.connection.js";

const app = express();

dotenv.config()


app.get ("/", (req,res)=>{
return res.send(" hello everyone")

})

app.listen(process.env.PORT,()=>{

connectDb ;
console.log("server is working >>>")
})
