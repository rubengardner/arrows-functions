/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b){
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum)
// Arrow Function With Parameters
const addTwoNumbers2 = (a,b) =>{
    return a + b;
}
let sum2 = addTwoNumbers2(3,5);
console.log(sum2)
// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a,b) => (a+b);
let sum3 = addTwoNumbers3(6,4)
console.log(sum3)
// Implicit Returns
const sayHello = () => console.log("I'm a very happy kid");
sayHello();
// Returning Multiple Lines
const returnMutltipleLine = () =>
 """
    Hi there, Im a 
    very happy kid
 """