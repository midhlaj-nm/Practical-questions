// //Constructor Function
// function man(name,height,weight){
//     this.name = name;
//     this.height = height;
//     this.weight = weight


//     this.greet = function(){
//         console.log(`My name is ${this.name}, My weight is ${this.weight}, My hight is ${this.height}`)
//     }
// }
// const man1 = new man('Midhlaj',5.9,'70kg')

// man1.greet()



// //Factory Function
// function women(name,height,weight){
//     return {
//         name: name,
//         height: height,
//         weight: weight,
//         lady(){
//             console.log(`My name is ${name}, My weight is ${weight}, My heigth is ${height}`)
//         }
//     };
// }
// const shifa = women('Shifa',2.3,'68kg')

// shifa.lady()


//promise

// const promise = new Promise ((resolve,reject)=> {
//     let set = true;

//     if(set){
//         resolve('Thanks')
//     }else{
//         reject('No Thanks')
//     }
// })

// promise
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

//callback

// function add(a,b,callback){
//     sum = a + b
//     callback(sum)
// }
// function result(total){
//     console.log(`The total is ${total}`)
// }

// add(45,99,result)


// const express = require('express');
// const app = express();

// // Middleware function
// app.use((req, res, next) => {
//   console.log('Request received at:', Date.now());
//   next();
// });

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(3000, () => console.log('Server running'));


// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('greet', () => console.log('Hello, Event-Driven World!'));
// emitter.emit('greet');


// const fs = require('fs');

// const data = "My name is midhlaj, iam from venmenad"

// fs.writeFile("me.txt",data,(err)=> {
//     if (err){
//         console.log(err)
//     } else {
//         console.log('file created successfully')
//     }
// });


// fs.readFile("me.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log('file reading completed, data : ',data)
//     }
// })



// const express = require('express')
// const app = express()

// const PORT = 3000;

// app.get('/add',(req,res) => {
//     const num1 = parseFloat(req.query.num1)
//     const num2 = parseFloat(req.query.num2)

//     const result = num1 + num2
//     res.send({result})
// })

// app.listen(PORT,()=>console.log(`server running on ${PORT}`))


const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');


localStorage.setItem('name', 'Alice');
localStorage.setItem('class', 'plusTwo')
console.log(localStorage.getItem('name',"class"));
