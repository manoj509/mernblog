const mongoose = require("mongoose")

const conncet = () => {
    mongoose.connect(process.env.MONGO_URL)
}

module.exports = conncet