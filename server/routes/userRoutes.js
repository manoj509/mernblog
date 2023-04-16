const { getAllUser, updateUser, deleteUser, destroyUser, addUser, userLogin, userStat } = require("../controller/userControler")
const { procted } = require("../middleware/proceted")

const router = require("express").Router()

router
    .get("/", getAllUser)
    .get("/stat", procted, userStat)
    .put("/update-user/:userId", updateUser)
    .delete("/delete-user/:userId", deleteUser)
    .delete("/destroy", destroyUser)
    .post("/add-user", addUser)
    .post("/login", userLogin)

module.exports = router