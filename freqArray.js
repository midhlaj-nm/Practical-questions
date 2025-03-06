let arr = [1,2,3,4,5,6,6,5,4,3,2,3,5,5]

let freq = arr.reduce((freq,item) => {
    freq[item] = (freq[item] || 0) +1;
    return freq
}, {})
console.log(freq)