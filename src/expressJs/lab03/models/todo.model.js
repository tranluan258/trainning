const connection = require("../config/db");

module.exports = {
    getAllToDo: (callback) => {
        let query = 'SELECT * FROM todo';
        connection.execute(query, (err, results) => {
            callback(results)
        })
    },

    addTodo: (id,name,callback) => {
        let query = 'INSERT INTO todo(id,name) values (?,?)';
        connection.query(query,[id,name], (err, results) => {
            if (err) return callback(err, null);
            return callback(null,results)
        })

    },

    deleteTodo: (id, callback) => {
        let query = 'DELETE FROM todo WHERE id = ?';
        connection.query(query,[id], (err, results) => {
            if(err) return callback(err, null);
            return callback(null,results)
        })
    },

    assignTodo: (id, callback) => {
        let query = "UPDATE todo SET status = 'Completed' WHERE id = ?";
        connection.query(query,[id], (err, results) => {
            if(err) return callback(err, null);
            return callback(null,results)
        })
    }
}