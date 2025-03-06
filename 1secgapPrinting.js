function gap(limit){
    let num = 2;
    let interval= setInterval(() => {
        console.log(num)
        num += 2
        if(num > limit) clearInterval(interval)
    },1000)
}
gap(20)