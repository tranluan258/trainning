const lodash = require("lodash") 
let a = [1,2,3,4,5]
let b = [1,5,7]


//get first
console.log(lodash .first(a))
//get last
console.log(lodash .last(a))

//chunk
let c = lodash .chunk(a) // create an array in into group the length of size
console.log(c)

let d = lodash .difference(a,b) // return new array filtered values
console.log(d) // expected output [2,3,4]

let drop = lodash .drop(a, 1); // Creates a slice of array with n elements dropped from the beginning.
console.log(drop)