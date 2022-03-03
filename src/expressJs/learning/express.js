const express =  require('express')
const app = express()
const router = express.Router();

app.use(express.json({reviver: (key, value) => {
    if(typeof value === 'string' && key === 'date') { //check value body, convert date from  frontend
        const valueDate = new Date(value).getTime();
            if(!isNaN(valueDate)){
                return new Date(value);
            }
    }
    return value
}}))

// Middleware application level  The function is executed every time the app receives a request.
// Single middleware
// Tùy vào vị trí đật app.use

app.use('/router', router)

app.use((req,res,next) => {
    console.log("Single middleware")
    next()
})


app.get('/', (req, res) => {
    res.json({message: 'Welcome to api!'})
})

app.get('/app', (req, res) => {
    res.json({message: 'Welcome to app!'})
})

//Middleware router level
router.use((req, res, next) => {
    console.log("Middleware router level")
    next()
})

router.get('/', (req, res) => {
    res.json({message: 'Welcome to router'})
})


app.listen(3000, () => console.log('listening on port 3000'))