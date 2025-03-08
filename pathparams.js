const express = require('express')
const app = express()

app.get('/product/:id',(req,res)=>{
    const Id = req.params.id
    res.send(`The product id = ${Id}`)
})


app.listen(3000, ()=>{
    console.log('started')
})