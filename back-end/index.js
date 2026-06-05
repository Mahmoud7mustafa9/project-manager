import express from "express" ;
import dotenv from "dotenv";
import { connectDb } from "./DB/db.connection.js";
import { userRoute } from "./modules/user/userRoutes.js";

const app = express();
app.use(express.json())
dotenv.config()


app.use("/user", userRoute)

app.get ("/", (req,res)=>{
return res.send(" hello everyone")

})

app.listen(process.env.PORT,()=>{

connectDb ;
console.log("server is working >>>")
})
