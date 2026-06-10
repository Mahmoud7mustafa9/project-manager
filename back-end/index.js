import express from "express" ;
import dotenv from "dotenv";
import { connectDb } from "./DB/db.connection.js";
import { bootstrap } from "./bootstrap.js";

const app = express();
dotenv.config()
app.use(express.json());
bootstrap(app)

app.listen(process.env.PORT,()=>{

connectDb ;
console.log("server is working >>>")
})
