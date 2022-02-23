const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user,done) => { //determines  stored data in the session, call: req.session.passport.user
    return done(null,user)
})

passport.deserializeUser((user,done) => { // used to retrieve the whole object, req.user
    //thường parameter truyền vào là id user và call database để kiểm tra và trả về user qua req.user
    return done(null,user)
})

//return bad request if invalid key or value status code 400
passport.use(new LocalStrategy( { 
    usernameField: 'username',
    passwordField: 'password',
}, (username,password,done) => {
    if(username === "luan" && password === "12345") {
        let user = {
            username: username,
            password: password
        }
        return  done(null,user)
    }else {
       return done(null,null)
    }
}))