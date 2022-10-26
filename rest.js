const sumAll = (a,b,c) => a+b+c;
let sum = sumAll(1,2,3);

const sumRest = (a,b,c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum2=sumRest(1,2,3,4,5,6)
console.log("Sum3: ", sum2)