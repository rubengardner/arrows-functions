let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array: ", arr2)
console.log("First array: ", arr1)

let arr3 = [4,8,60];
let arr4 = [...arr3]
arr4.push(12)
console.log("3º array: ", arr3)
console.log("4º array: ", arr4)

let obj1 = { a:1, b:2, c:3};
let obj2 = {...obj1, d:4};
console.log("Second Object: ", obj2);
console.log("First Object: ", obj1);