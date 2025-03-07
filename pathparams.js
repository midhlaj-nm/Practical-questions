const express = require('express')
const app = express()

app.get('/product/shoe',(req,res)=>{
    res.send(`path: ${req.path}`)
})


app.listen(3000, ()=>{
    console.log('started')
})