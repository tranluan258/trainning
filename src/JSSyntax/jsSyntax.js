// JSON
const json = '{"a":true, "b":42}';
const obj = JSON.parse(json); 

console.log(obj.a)

const stringifyJSON = JSON.stringify(obj)

// console.log(stringifyJSON)

// Array

//concat merged 2 or more array
let a = [1,2,3,4,5,6,7]
let b = [5,6,7,8,9]

console.log(b.concat(a))

// find
const resultFind = a.find((element)  => {
    return element % 2 == 0
}) // return first element
console.log(resultFind);

//map 
const resultMap = a.map((element) => {
    return element * 2; // return value add new array
})

console.log(resultMap)

// forEach
let sum = 0;

const sumFunction =  (a, b) => a + b;

a.forEach( (element) => { // duyệt qua từng element của mảng
  sum =  sumFunction(sum, element);
});

console.log(sum);

// reduce

const resultReduce = a.reduce((pre,cur,index) => {return pre + cur}, 5)

console.log(resultReduce)
