const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is requred"]
    },
    email: {
        type: String,
        required: [true, "Email is requred"]
    },
    password: {
        type: String,
        required: [true, "Password is requred"],
        // select: false
    },
    active: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)