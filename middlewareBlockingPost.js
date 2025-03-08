const express=require('express')
const app=express()
app.use((req,res,next)=>{
    if(req.method==='GET'||req.method==='POST'){
        return res.status(403).send('get and post is blocked')
    }
    next();
})
app.get((req,res)=>{
    res.send("this is get method")
})
app.post('/',(req,res)=>{
    res.send("this is post method")
})

app.put('/',(req,res)=>{
   res.send("put working")
})

app.listen(3013,()=>{
    console.log("server is running 3013")
})