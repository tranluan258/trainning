const express = require('express');
const app = express();
require('dotenv').config()
const morgan = require('morgan'); 
const todoRouter = require('./routes/todo.routes');
const jsonMiddleware = require('./middleware/json.middleware');
// eslint-disable-next-line no-unused-vars
const connection = require('./config/db');
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000


app.use(morgan('dev'));
app.use(jsonMiddleware);
// app.use(express.json())

app.use('/api', todoRouter);
app.get('/api', (req, res) => {
    res.json({message: 'Welcome to api'});
})
app.listen(PORT, () => console.log('listening on port 3000'));

