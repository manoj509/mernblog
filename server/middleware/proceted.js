const jwt = require("jsonwebtoken");
const User = require("../models/User");



exports.procted = (req, res, next) => {
    try {
        console.log("procted callled");
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({
                message: "Please Provide a token"
            })
        }
        jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid Token"
                })
            }
            req.body.userId = decode.userId
            next()
        })
    } catch (error) {
        res.status(401).json({
            message: "Servre error",
            error
        })
    }
}
exports.adminProcted = (req, res, next) => {
    try {
        console.log("procted callled");
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({
                message: "Please Provide a token"
            })
        }
        jwt.verify(token, process.env.JWT_KEY, async(err, decode) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid Token"
                })
            }
            const foundUser = await User.findOne({ _id: decode.userId })
            if (!foundUser) {
                return res.status(401).json({
                    message: "You are not reigister with us"
                })
            }
            if (foundUser.role !== "admin") {
                return res.status(401).json({
                    message: "You are not admin"
                })
            }
            next()
        })
    } catch (error) {
        res.status(401).json({
            message: "Servre error",
            error
        })
    }
}