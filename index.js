const express=require("express")
const app=express();

app.get('/get',(req,res)=>{
    res.json({
        data:"ALLAH IS GREAT"
    })
})
app.get('/api/get',(req,res)=>{
    res.send("Getting User Detail")
})
app.listen(8000,(req,res)=>{
    console.log("App is Running in Port 8000");
})