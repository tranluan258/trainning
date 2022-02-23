const express =  require('express')
const app = express()

app.use(express.json({inflate: false, reviver: (key, value) => {
    if(typeof value === 'string' && key === 'date') { //check value body, convert date from  frontend
        const valueDate = new Date(value).getTime();
            if(!isNaN(valueDate)){
                return new Date(value);
            }
    }
    return value
}}))

// Single middleware
app.use((req,res,next) => {
    console.log("Single middleware")
    next()
})

// array middleware
const r1 = express.Router()
r1.get('/', (req, res, next) =>  {
    console.log("R1 middleware")
    next()
})

const r2 = express.Router()
r2.get('/', (req, res, next) =>  {
    console.log("R2 middleware")
    next()
})

app.use([r1, r2])


app.get('/', [r1, r2], (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(3000, () => console.log('listening on port 3000'))