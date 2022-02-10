const fs = require("fs")

function readFile(filename, callback){
    fs.readFile(filename,(err,data) => {
        callback(data)
    })
}


console.log("Start")

readFile("./callback.md", (data) => {
    console.log(data)
})

console.log("End")