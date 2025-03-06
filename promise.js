//promise
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Are you okay!'), 1000)
})
let myFirst = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Are you okay'), 2000)
})
let mySec = new Promise((resolve,reject)=> {
    setTimeout(() => resolve('Are you okay'), 3000)
})
let mylas = new Promise((resolve,reject)=> {
    setTimeout(() => reject('Are you fine'), 4000)
})
myPromise
.then(res => console.log(res))
.catch(err => console.log(err))

//Promise all()
Promise.all([myPromise, myFirst, mySec, mylas])
.then(res => console.log(res))
.catch(err => console.log(err))

//Promise race()
Promise.race([myPromise, myFirst, mySec, mylas])
.then(res => console.log(res))
.catch(err => console.log(err))

//Promise.allSettled()
Promise.allSettled([myPromise, myFirst, mySec, mylas])
.then(res => console.log(res))
.catch(err => console.log(err))

//Promise any
Promise.any([myPromise, myFirst, mySec, mylas])
.then(res => console.log(res))
.catch(err => console.log(err))