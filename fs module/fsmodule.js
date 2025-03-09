const fs = require('fs')

//create Folder
fs.mkdir('TodaysDate',(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log('File created Successfully')
    }
})

//Delete folder
fs.rmdir('TodaysDate',(err)=>{
    if(err){
        console.log('Error found')
    } else {
        console.log('Deletion completed')
    }
})

//list files and folders
fs.readdir('.',(err, files) => {
    if(err) throw err;
    console.log('Directory contents:',files) 
})