const mysql = require('mysql2')
// eslint-disable-next-line no-undef
const {HOST,USER,PASSWORD,DATABASE} =  process.env
const connection = mysql.createConnection({
    host: HOST, 
    user: USER,
    password: PASSWORD,
    database: DATABASE
})

connection.connect((error) => {
    if (error) throw error;
    console.log("Connect database")
})

module.exports = connection