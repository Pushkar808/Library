const jwt = require('jsonwebtoken');

const users = [
    {
        userName: "scaleXtest1",
        password: "123456",
        userType: "users"
    },
    {
        userName: "scaleXtest2",
        password: "123456",
        userType: "users"
    },
    {
        userName: "scaleXadmin",
        password: "123456",
        userType: "admin"
    },

]
exports.login = async (req, res, next) => {
    const { userName, password } = req?.body;
    const getPassbyname = users.filter((element) => element.userName == userName && element.password == password)
    if (getPassbyname[0]) {
        const tokenData = getPassbyname[0]
        let token = jwt.sign(tokenData, "secretKey", { expiresIn: '2D' });
        console.log(token)
        return res.json({
            status: true,
            message: "Login Success",
            data: {
                token: token
            }
        })
    } else {
        return res.json({
            status: false,
            message: "Please check username/password",
            data: null
        });
    }
}