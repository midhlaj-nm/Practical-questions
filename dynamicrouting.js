const express = require('express')
const app = express()

app.get('/user/:id',(req,res)=>{
    const id = req.params.id
    res.send(`This is the user id: ${id}`)
})

app.get('/products/:category/:code',(req,res)=>{
    const code = req.params.code
    const category = req.params.category
    res.send(`This is product category: ${category}<br>and this is the code: ${code}`)
})


app.listen(3000, ()=>{
    console.log('Port is running in 3000')
})