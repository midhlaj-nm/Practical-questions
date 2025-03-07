const express=require('express')
const app=express()
app.use((req,res,next)=>{
    if(req.method==='GET'||req.method==='POST'){
        return res.status(403).send('get and post is blocked')
    }
    next();
})
app.get((req,res)=>{
    console.log("this is get method")
})
app.post('/',(req,res)=>{
    console.log("this is post method")
})

app.put('/',(req,res)=>{
   return res.json({msg:"put working"})
})



app.listen(3013,()=>{
    console.log("server is running 3013")
})