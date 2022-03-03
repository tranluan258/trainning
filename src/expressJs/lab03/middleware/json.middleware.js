module.exports = (req, res, next) => {
    let body = ''

    req.on('data', (chunk) => {
        body += chunk.toString()
    })
    
    req.on('end', () => {  
        if(body.length > 0) {
            req.body = JSON.parse(body)
        }
        next()
    })
}