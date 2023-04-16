const Blog = require("../models/Blog");
const User = require("../models/User");

exports.getAllUsers = async(req, res) => {
    try {
        const result = await User.find({ role: "user" }).select("-password -__v -createdAt -updatedAt")
        res.json({
            message: "user fetch success",
            count: result.length,
            result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Something went wrong",
            error
        })
    }
}
exports.userAccountBlockUnblock = async(req, res) => {
    try {
        const { userId, active } = req.body
        const result = await User.findByIdAndUpdate(userId, { active })
        res.json({
            message: `User Account ${active ? "Ubblock" : "Block"}`,

        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Something went wrong",
            error
        })
    }
}
exports.userBlogPublishUnpublish = async(req, res) => {
    try {
        const { userId, publish } = req.body
        const result = await Blog.findByIdAndUpdate(userId, { publish })
        res.json({
            message: `User Blog ${publish ? "Unpublish" : "publish"}`,
            result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Something went wrong",
            error
        })
    }
}
exports.statistics = async(req, res) => {
    try {
        const totalUsers = await User.countDocuments({ role: "user" })
        const totalBlockUsers = await User.countDocuments({ role: "user", active: false })
        const totalBlogs = await Blog.countDocuments()
        const totalPublishBlogs = await Blog.countDocuments({ publish: true })
        res.json({
            message: `statcis fetch success`,
            result: {
                totalUsers,
                totalBlockUsers,
                totalBlogs,
                totalPublishBlogs,
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Something went wrong",
            error
        })
    }
}
exports.getAllBlogs = async(req, res) => {
    try {
        const result = await Blog.find().select("-__v -createdAt -updatedAt")
        res.json({
            message: "blog fetch  success",
            result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Something went wrong",
            error
        })
    }
}