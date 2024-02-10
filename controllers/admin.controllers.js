const adminModel = require("../models/admin.model");

exports.addBook = async (req, res, next) => {
    if (req?.user?.userType === 'admin') {
        if (typeof req.body.bookName === "string" && typeof req.body.author === "string" && typeof req.body.year === "number") {
            const response = await adminModel.addBook(req.user, req.body)
            return res.json(response);
        }
        else
            res.status(400).json({ message: 'Undefinded Parameters' });
    }
    else res.status(403).json({ message: 'Forbidden' });
}
exports.deleteBook = async (req, res, next) => {
    if (req?.user?.userType === 'admin') {
        if (typeof req.body.bookName === "string") {
            const response = await adminModel.deleteBook(req.user, req.body)
            return res.json(response);
        }
        else
            res.status(400).json({ message: 'Undefinded Parameters' });
    }
    else res.status(403).json({ message: 'Forbidden' });
}