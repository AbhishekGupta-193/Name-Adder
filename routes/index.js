const router=require('express').Router(); //create a new router object
const path=require('path')

// router.get('/router1',(req,res)=>{
//     res.send("Wow i used router for the 1st time")
// })

// router.get('/router2',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'../public/index.html'))
    
// })
router.get('/',(req,res)=>{
    // const {name}=req.body;
    res.send("name");
    // console.log(name)

})
router.get('/name',(req,res)=>{
    const {name}=req.body;
    res.send(name);
    // console.log(name)

})
router.post('/name',(req,res)=>{
    const {name}=req.body;
    console.log(req.body)
    res.send(name);

})


module.exports=router;