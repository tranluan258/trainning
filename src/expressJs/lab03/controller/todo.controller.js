let uuid = require('short-uuid')
const todoModel = require('../models/todo.model')
let arrTodo = [
    {
        id: uuid.generate(),
        name: "To do 1",
        status: "New",
    },
    {
        id: uuid.generate(),
        name: "To do 2",
        status: "New",
    },
    {
        id: uuid.generate(),
        name: "To do 3",
        status: "New",
    } 
]

module.exports = {
    getAllTodo : (req, res) => {
        todoModel.getAllToDo((result) => {
            return res.status(200).json({message: "Get all to do", todo: result})
        })
        
    },

    addTodo : (req, res) => {
        const {name} = req.body
        if(name && name.length > 0) {
            let todo = {
                id: uuid.generate(),
                name: name,
                status: "New"
            }
            arrTodo.push(todo)
            return res.status(201).json({message: "Add to complete", todo: todo})
        }
        return res.status(400).json({message: "Please enter a name"})
    },

    assignTodo : (req, res) => {
        const id = req.params.id
        let index = arrTodo.findIndex(todo => todo.id === id)
        if(index < 0) {
            return res.status(404).json({message: "Not found"})
        }
        if(arrTodo[index].status === "Complete") {
            return res.status(400).json({message: "Status todo completed"})
        }

        arrTodo[index].status = "Complete"
        return res.status(200).json({message: "Assign to done", todo: arrTodo[index]})
    },

    deleteTodo : (req, res) => {
        const id = req.params.id
        let index = arrTodo.findIndex(todo => todo.id === id)
        if(index < 0) {
            return res.status(404).json({message: "Not found"})
        }

        arrTodo.splice(index, 1)
        return res.status(200).json({message: "Delete todo complete"})
    }
}