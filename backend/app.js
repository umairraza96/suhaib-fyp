const express = require("express")

const PORT = process.env.PORT || 4040
const app = express()

app.get("/api",(req,res)=>{
    res.status(200).json("Hello World")
})

app.listen(PORT,()=>{
    console.log("Server Started at port:",PORT)
})