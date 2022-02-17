// JSON
const json = '{"a":true, "b":42}';
const obj = JSON.parse(json); // parse Json to Javascript type

console.log(obj.a)

const stringifyJSON = JSON.stringify(obj) // convert Javascript type to JSON

console.log(stringifyJSON)

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
// if have initial value , the first start pre = initial value. cur = the first in array, index = 0
// if not have initial value , the first start pre = the first in array . cur = the second in array, index = 1

console.log(resultReduce)

//find
// parameter is one callback function with (value.index,arr[]) => return value of first element 
const findMethod  = a.find((el,index) => el === 2)
console.log(findMethod)

//findIndex
// parameter is one callback function with (value.index,arr[]) => return index that satisfies the provided if not return -1
const findIndexMethod = a.findIndex((el,index) => el === 1)