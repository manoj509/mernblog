const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is requred"]
    },
    desc: {
        type: String,
        required: [true, "desc is requred"]
    },
    image: {
        type: String,
        required: [true, "image is requred"]
    },
    publish: {
        type: Boolean,
        default: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        default: [true, "Please Provide Id"]
    },

}, { timestamps: true })

module.exports = mongoose.model("blog", blogSchema)