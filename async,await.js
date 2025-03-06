let thisP = new Promise((resolve,reject) => {
    resolve('Are you okay')
})

async function thisPr() {
    try{
        let data = await thisP
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}
thisPr()