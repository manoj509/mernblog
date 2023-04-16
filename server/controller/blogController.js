const { blogUpload } = require("../middleware/upload")
const Blog = require("../models/Blog")
const jwt = require("jsonwebtoken")

exports.addBlog = async(req, res) => {
    blogUpload(req, res, async err => {
        if (err) {
            console.log(err);
            req.status(400).json({
                message: "multer error",
                error: err
            })
        }
        try {
            const token = req.headers.authorization
            const x = jwt.verify(token, process.env.JWT_KEY)

            const result = await Blog.create({
                title: req.body.title,
                desc: req.body.desc,
                image: req.file.filename,
                userId: x.userId
            })
            res.status(200).json({
                message: "blog Added",
                result
            })
        } catch (error) {
            res.status(400).json({
                message: "Error",
                error
            })
        }
    })


}

exports.getAllBlog = async(req, res) => {
    try {
        const result = await Blog.find({ publish: true })
        res.json({
            message: "blog fetched suucess ",
            result

        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}
exports.updateBlog = async(req, res) => {
    try {
        const { blogId } = req.params
        const result = await Blog.findByIdAndUpdate(blogId, req.body, { new: true })
        res.json({
            message: "blog updated suucess",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}
exports.deleteBlog = async(req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndDelete(blogId)
        res.json({
            message: "blog dleted suucess",
        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}
exports.destroyBlog = async(req, res) => {
    try {
        await Blog.deleteMany()
        res.json({
            message: "blog all blog deleted suucess",
        })
    } catch (error) {
        res.status(400).json({
            message: "ERRROR " + error.message
        })
    }
}