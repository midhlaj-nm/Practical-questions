const express = require('express')
const app = express()
const router = express.Router()

router.use((req,res,next)=>{
    console.log('Middleware Apllied')
    next();
})

router.get('/users',(req,res)=>{
    res.send('Hello Users')
})

app.use('/api', router)

app.listen(3000)