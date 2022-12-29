const express = require('express')
const { default: mongoose } = require('mongoose')
const path=require('path')
const router=require('./routes/index.js')


const app=express()

// mongoose.connect("mongodb://localhost/todo_app",{
//     useNewUrlParse:true,
//     useUnifiedTopology :true,
// });


//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static("./public"))
app.set("view engine","ejs")   // useful for rendering web pages
app.use(router)

//path-folder passed to port 3000
// app.get('/api/people',(req,res)=>{
    
//     res.sendFile(path.resolve(__dirname,"./public/index.html"))
// })

//post

// app.post('./api/people',(req,res)=>{
    //  const name=req.body;
//      res.json({success:"true",person:"name"})
// })

// app.get('/',(req,res)=>{
//     res.send("get command executed")
// })
// app.all('*',(req,res)=>{
//     res.send("Kuch nhi mil rha bhai yha")
// })

app.listen(3000,(req,res)=>{
    
    console.log("server is listening to 3000...")
    
})