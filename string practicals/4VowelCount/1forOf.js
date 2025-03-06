function vowelCount(str){
    const vowel='aeiouAEIOU'
    let vowelCount=0;
    let constonentCount=0;
    for(char of str){
        if(vowel.includes(char)){
            vowelCount++;
        }else if(char.match(/[a-zA-Z]/)){
            constonentCount++;
        }
    }return `number of vowels is ${vowelCount}`
}
console.log(vowelCount("qwertyuiosdfghjkasdfghzxcvbnm"))