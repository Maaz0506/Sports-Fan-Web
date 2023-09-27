const express=require("express")
const cors=require("cors")
const userRouter=require("./routes/User.router")
const app=express()
const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Sports-Fan-Web")
app.use(cors())
app.use(express.json())



app.use("/auth", userRouter);
app.listen(4000,()=>{
    console.log(`Server running on ${4000}`)
})