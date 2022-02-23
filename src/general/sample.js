const fs = require('fs')

const express = require('express')

const app = express()

app.get('/read-file-sync', (req, res) => {
    console.log("1")
            
    const data1  = fs.readFileSync("./test.txt")
    const data2 = fs.readFileSync("./test.txt")
    const data3 = fs.readFileSync("./test.txt")
    const data4 = fs.readFileSync("./test.txt")
    const data5 = fs.readFileSync("./test.txt")
    
    console.log("2")
    res.send(data1)
    console.log("3")
})

app.get('/read-file-async', (req, res) => {
    console.log("1")
    fs.readFile("./test.txt", (err,data) => {
        console.log("2")
        fs.readFile("./test.txt", (err,data) => {
            fs.readFile("./test.txt", (err,data) => {
                fs.readFile("./test.txt", (err,data) => {
                    fs.readFile("./test.txt", (err,data) => {
                        res.send(data)
                    })
                })
            })
        })
    })
    console.log("3")
})

app.get("/read-file-async-with-promise", (req, res) => {
    const promise = new Promise((resolve, reject) => {
        fs.readFile("./test.txt", (err,data) => {
            reject("Error")
        })
    })
    console.log(promise.then(data =>res.send(data))
    .catch(err => {
        console.log(err)
        res.status(500).send({error: "Error client"})
        // res.status(500).json("abc")
    }))
})

app.listen(8080, (req, res) => console.log("Running"))