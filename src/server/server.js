const express=require("express")
const userRouter=require('./user')

const mongoose=require("mongoose")
//链接mongo
const DB_URL='mongodb://127.0.0.1:27017//i58'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',()=>{
    console.log('success')
})


const app=express()

app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.send("<h1>hello<h1>")
})
app.listen(9093,()=>{
    console.log("监听成功") 
})