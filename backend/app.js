const express=require("express")

const mongoose=require("mongoose")

async function connectDb(){
    await mongoose.connect('mongodb://localhost:27017',{
        dbName:'CartNova'
    })
    console.log("Connected")
}
connectDb().catch((err)=>{
    console.error(err)
})

const app=express()

const port=3000

app.listen(port,()=>{
    console.log("Server Runnig On :",port)
})