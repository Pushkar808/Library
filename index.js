const express=require('express');
const app=express();
const port=process.env.PORT || 8000;
const passportJWT = require('./middleware/passportJWT');
const session = require('express-session');
app.use(express.json());
app.use('/api/v1/admin', require('./routes/admin.routes'));
app.use('/api/v1/user', require('./routes/user.routes'));
app.use('/api/v1/auth', require('./routes/auth.routes'));
app.use('/api/v1/common', require('./routes/common.routes'));
app.listen(port, (err) => {
    if (err) {
        console.log("error in connecting to server");
    }
    console.log("Connected to server at port: " + port);
})