const number = [1,2,3,4,5,6,7,8,9,10]

const avgOdd = (odd) => {
    const oddNum = odd.filter(num => num % 2 !== 0);
    const sum = oddNum.reduce((acc,num) => acc+num, 0)
    return sum/ oddNum.length
}

console.log(avgOdd(number))