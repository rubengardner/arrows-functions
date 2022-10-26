let nums = [1,2,3,4,5];
let results = [];

for (let i of nums){
    results.push(i*2);
}
console.log(results);


const multByTwo = function (num) {
    return num * 2;

}
const mapResults = nums.map(nums=>nums*2);
console.log(mapResults)

const students = [
    {
        id:1,
        name: 'MArk',
        skill: 'Html'
    },
    {
        id:2,
        name: 'Hugo',
        skill: 'Java'
    },
    {
        id:3,
        name: 'Julia',
        skill: 'C++'
    }
]
const stu = students.map(student => [student.id,student.name])
console.log(stu)