require("dotenv").config({ path: "./config/.env" })
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const conncet = require("./config/db")

const app = express()
conncet()
app.use(express.json())
app.use(cors())
app.use(express.static("uploads"));
app.use("/blog", require("./routes/blogRoutes"))
app.use("/user", require("./routes/userRoutes"))
app.use("/admin", require("./routes/adminRoutes"))
mongoose.connection.once("open", () => {
    console.log(`DB CONNCETED`);
    app.listen(process.env.PORT, err => err ?
        console.log("COULD NOT START", err) :
        console.log("SERVER RUNNING")
    )

})
mongoose.connection.on("error", (err) => {
    console.log(`SOMETHING WENT WRONG `, err);
})