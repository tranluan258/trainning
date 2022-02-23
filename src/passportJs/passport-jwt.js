const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const options = {}

options.jwtFromRequest =  ExtractJwt.fromAuthHeaderAsBearerToken() // split token Header
options.secretOrKey =  'secret'

passport.serializeUser((user,done) => {
    return done(null,user)
})

passport.deserializeUser((user,done) => {
    return done(null,user)
})

//return unauthorized status code 301 if token invalid
passport.use(new JwtStrategy(options, function(jwt_payload,done) {
    if(jwt_payload.username =  'luan'){
        done(null,jwt_payload)
    }else {
        done(null,false,"Invalid token")
    }
}))