function lim(limit){
    let num = 2
    const pr = setInterval(()=>{
      console.log(num)
      num += 2
      if(num > limit){
         clearInterval(pr)
         console.log('Timer stopped succssefully')
        }
    }, 2000)
  }
  
  lim(10)