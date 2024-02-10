const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretKey', //secretKey for authentication
}

const adminUser = {

}
//passport JWT for authentication
passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    try {
        if (jwt_payload?.userType == "admin")
            return done(null, jwt_payload)
        else if (jwt_payload?.userType == "users")
            return done(null, {userType:"users"})
        else {
            console.log("No user type Provided");
            return done(null, false)
        }

    } catch (error) {
        return done(error, false);
    }

}));

module.exports = passport;