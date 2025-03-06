const fs = require("fs")
const path = require("path")

const today = new Date().toLocaleDateString()
// console.log(today)
const filepath = path.join(__dirname, 'todaysDate.txt');

fs.writeFile(filepath, today, (err) => {
    if(err){
        console.log(err)
    } else {
        console.log('File Created successfully')
    }
})

fs.readFile('todaysDate.txt', 'utf8' ,(err, data) =>{
    if(err){
        console.log(err)
    } else {
        console.log('File readed successfuly and the data is :',data)
    }
})