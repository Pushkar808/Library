const userModel = require("../models/common.model");

exports.home = async (req, res, next) => {
    if (req?.user?.userType === 'admin' || req?.user?.userType === 'users') {
        const response = await userModel.home(req.user, req.body)
        return res.json(response);
    }
    else res.status(403).json({ message: 'Forbidden' });
}