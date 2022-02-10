// Blocking methods execute synchronously and non-blocking methods execute asynchronously.
const fs = require("fs")

const data = fs.readFileSync("./general.md")  // block here when read file done
console.log(data);


fs.readFile('./general.md', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log("data"); // run before readFile