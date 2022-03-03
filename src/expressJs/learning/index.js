const express =  require('express')
const fs = require('fs')

const app = express()

let arr = fs.readFileSync("./data.json", {encoding: "utf8"})


app.get('/', (req, res) => {
    res.json(JSON.parse(arr))
})

app.post('/', (req, res) => {
    let data = JSON.parse(arr)
    let user = {
        id: data.length + 1,
        username: "arr"
    }
    data.push(user)
    res.json(data)
})

app.put('/:id', (req, res) => {
    const id = req.params.id
    arr.forEach(user => {
        if(user.id.toString() === id){
            user.username = "update"
        }
    })
    res.json(JSON.parse(arr))
})

app.delete('/:id', (req, res) => {
    const id = req.params.id
    let index = arr.findIndex(user => user.id.toString() === id)
    arr.splice(index, 1)
    res.json(JSON.parse(arr))
})

app.listen(3000, () => console.log('listening on port 3000'))