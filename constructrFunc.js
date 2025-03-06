function midh(name,age){
    this.name = name;
    this.age = age;
    this.greet() = function(){
        console.log(`My name is ${name} , my age is ${age}`)
    }
}

const per1 = new midh('midhlaj',18)
const per2 = new midh('minhaj',19)

per1.greet()