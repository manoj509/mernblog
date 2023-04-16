const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Blog = require("../models/Blog")

exports.addUser = async(req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const result = await User.create({...req.body, password: hashPassword })
        res.json({
            message: "user added "
        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}
exports.getAllUser = async(req, res) => {
    try {
        const result = await User.find().select("name email active role")
            // const result = await User.find().select("-password -__v")
        res.json({
            message: "User fetched suucess ",
            result

        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}
exports.updateUser = async(req, res) => {
    try {
        const { userId } = req.params
        const result = await User.findByIdAndUpdate(userId, req.body, { new: true })
        res.json({
            message: "User updated suucess",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}
exports.deleteUser = async(req, res) => {
    try {
        const { userId } = req.params
        await User.findByIdAndDelete(userId)
        res.json({
            message: "User dleted suucess",
        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}
exports.destroyUser = async(req, res) => {
    try {
        await User.deleteMany()
        res.json({
            message: " all user deleted suucess",
        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}
exports.userLogin = async(req, res) => {
    try {
        const { email, password } = req.body
        const foundUser = await User.findOne({ email: email })
        if (!foundUser) {
            return res.status(401).json({
                message: "email is not registerd"
            })
        }
        const veryfy = await bcrypt.compare(password, foundUser.password)
        if (!veryfy) {
            return res.status(401).json({
                message: "Invalid password"
            })
        }
        if (!foundUser.active) {
            return res.status(401).json({
                message: "Accounty is Block by admin , Plesae get touch with admin"
            })
        }
        const token = jwt.sign({ userId: foundUser._id }, process.env.JWT_KEY, { expiresIn: "1w" })
        res.json({
            message: "Login suucess",
            result: {
                name: foundUser.name,
                email: foundUser.email,
                role: foundUser.role,
                token
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}
exports.userStat = async(req, res) => {
    try {
        const { userId } = req.body
        const totalBlogs = await Blog.countDocuments({ userId })
        const totalPublish = await Blog.countDocuments({ userId, publish: true })
        res.json({
            message: "user blog stat fetch success",
            result: {
                totalBlogs,
                totalPublish
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}