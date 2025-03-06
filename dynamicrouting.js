const express = require('express')
const app = express()

app.get('/user/:id',(req,res)=>{
    const id = req.params.id
    res.send(`This is the user id: ${id}`)
})

app.get('/products/:code',(req,res)=>{
    const code = req.params.code
    res.send(`This is product code: ${code}`)
})


app.listen(3000, ()=>{
    console.log('Portis running in 3000')
})