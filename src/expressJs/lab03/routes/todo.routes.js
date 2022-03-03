const express =  require('express');
const routes = express.Router();
const todoControllers = require('../controller/todo.controller')

routes.post('/add-to-do',  todoControllers.addTodo)
routes.get('/get-all-to-do',  todoControllers.getAllTodo)
routes.delete('/delete-to-do/:id', todoControllers.deleteTodo)
routes.put('/assign-to-do/:id', todoControllers.assignTodo)

module.exports = routes;
