//Testing event Loop
const fs = require("fs")

function someAsyncOperation(callback) { 
  fs.readFile('./general.md', {encoding: "utf-8"}, callback);
}

//


// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

someAsyncOperation(() => {
  const startCallback = Date.now();
  console.log("Read file 1")  
  while(Date.now() - startCallback < 100){

  }
}); 


// example Phase event loop
// fs.readFile("./general.md",{encoding: "utf-8"}, (err, data) => { // poll phase registration callback and queue in pool phase empty
//   console.log("Read file 2")  
//   setTimeout(() => { // revert phase timer execute setTimeout()
//     console.log("timed out")
//   },0)
//   setImmediate(() => {
//     console.log("Immediate"); //have setImmediate change phase check execute setImmediate()
//   },0)
// })
