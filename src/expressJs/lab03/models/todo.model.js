const connection = require("../config/db");

module.exports = {
    getAllToDo: (callback) => {
        let query = 'SELECT * FROM todo';
        connection.execute(query, (err, results) => {
            callback(results)
        })
    }
}