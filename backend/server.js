import express from "express"
import cors from "cors"
import routs from "./API/route.controller.js"
const app=express()
app.use(cors())
app.use(express.json())                             //establishing connection



app.use("/api/v1/registform",routs)                      //
app.use("*",(req, res)=>res.status(404).json({error:"page not ofund"}))




export default app