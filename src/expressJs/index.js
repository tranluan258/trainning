const express =  require('express')

const app = express()

let arr = [
    {
        id: 1,
        username: 'foo'
    },
    {
        id: 2,
        username: 'der'
    },
    {
        id: 3,
        username: 'dfe'
    },
    {
        id: 4,
        username: 'abc'
    }
]

app.get('/', (req, res) => {
    res.json(arr)
})

app.post('/', (req, res) => {
    let user = {
        id: arr.length + 1,
        username: "arr"
    }
    arr.push(user)
    res.json(arr)
})

app.put('/:id', (req, res) => {
    const id = req.params.id
    arr.forEach(user => {
        if(user.id.toString() === id){
            user.username = "update"
        }
    })
    res.json(arr)
})

app.delete('/:id', (req, res) => {
    const id = req.params.id
    let index = arr.findIndex(user => user.id.toString() === id)
    arr.splice(index, 1)
    res.json(arr)
})

app.listen(3000, () => console.log('listening on port 3000'))