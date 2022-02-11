const fs = require("fs")

function readFile(filename, callback){
    fs.readFile(filename, {encoding: 'utf-8'},(err,data) => {
        callback(err,data)
    })
}


console.log("Start")

readFile("./callback.md", (err,data) => {
    console.log(data)
})

console.log("End")


// Example callback hell
readFile("./callback.md", (err,data) => {
    if (err) throw err;
    readFile("./callback.js", (err,data) => {
        if (err) throw err;
        readFile("./callback.js", (err,data) => {
            console.log(data)
        })
    })
})
