const express = require('express')
const app = express()

app.get('/search',(req,res) => {
    const product = req.query.product
    const category = req.query.category
    res.send(`I searched ${product} in the ${category} category`)
})

app.listen(3000)