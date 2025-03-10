const fs = require('fs')
const path = require('path')

//create Folder
fs.mkdir('TodaysDate',(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log('File created Successfully')
    }
})

// Delete folder
fs.rmdir('TodaysDate',(err)=>{
    if(err){
        console.log('Error found',err)
    } else {
        console.log('Deletion completed')
    }
})

//list files and folders
fs.readdir('.',(err, files) => {
    if(err) throw err;
    console.log('Directory contents:',files) 
}) 

//create a file
fs.writeFile('TodaysDate.txt',new Date().toString(), (err)=>{
    if(err){
        console.log(err)
    } else {
        console.log('File created Successfully')
    }
})

//read file 
fs.readFile('TodaysDate.txt','utf8',(data,err)=>{
    if(err){
        console.log(err)
    } else {
        console.log("The contentof the page is : ",data)
    }
})

//Delete a file
fs.unlink('TodaysDate.t',(err)=>{
    err ? err : 'File deleted Successfuly'
})

console.log('Process.cwd() ',process.cwd())
console.log('Dir name ',__dirname) 

//file in anothr Directory
const dir = 'C:\\Users\\midhl\\Documents\\VScode\\JavaScript\\fs module\\TodaysDate'
const filename = path.join(dir, 'Date.txt')

if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive : true});
}

fs.writeFile(filename, new Date().toString(), (err)=>{
     return err ? err : 'File created Successfully'
})