let uuid = require('short-uuid')
const todoModel = require('../models/todo.model')
module.exports = {
    getAllTodo : (req, res) => {
        todoModel.getAllToDo((result) => {
            return res.status(200).json({message: "Get all to do", todo: result})
        })
        
    },

    addTodo : (req, res) => {
        const {name} = req.body
        if(name && name.length > 0) {
            todoModel.addTodo(uuid.generate(),name, (err) => {
                if(err) {
                    return res.status(500).json({message: "Please enter a name"})
                }
                return res.status(201).json({message: "Add to complete"})
            })
        }
        // return res.status(400).json({message: "Please enter a name"})
    },

    assignTodo : (req, res) => {
        const id = req.params.id
        todoModel.assignTodo(id, (err) => {
            if(err) {
                return res.status(500).json({message: "Server error"})
            }
            return res.status(201).json({message: "Assign complete"})
        })
    },

    deleteTodo : (req, res) => {
        const id = req.params.id
        todoModel.deleteTodo(id, (err) => {
            if(err) {
                return res.status(500).json({message: "Server error"})
            }
            return res.status(201).json({message: "Delete complete"})
        })
    }
}