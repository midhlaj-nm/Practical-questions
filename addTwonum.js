// const express = require('express')
// const app = express()

// app.get('/user/:num1/:num2',(req,res)=>{
//     const num1 = parseFloat(req.params.num1)
//     const num2 = parseFloat(req.params.num2)

//     const result = num1+num2
//     res.send({result})
// })



// // app.get('/add', (req,res)=>{
// //     const num1 = parseInt(req.query.num1)
// //     const num2 = parseInt(req.query.num2)


// //     const result = num1 + num2
// //     res.send(`The sum of ${num1} and ${num2} is ${result}`)
// // })

// app.listen(3000,()=>{
//     console.log('server started')
// })































const express = require('express')
const app = express()

// app.get('/add/:num1/:num2',(req,res) => {
//     const num1 = parseFloat(req.params.num1)
//     const num2 = parseFloat(req.params.num2)


//     const result = num1 + num2;
//     res.send(`The sum of ${num1} + ${num2} is ${result}`)


// })

app.get('/add', (req,res) => {
    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)

    const result = num1 + num2
    res.send({result})
})


app.listen(3000)