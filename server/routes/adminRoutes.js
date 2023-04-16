const { getAllUsers, userAccountBlockUnblock, statistics, getAllBlogs, userBlogPublishUnpublish } = require("../controller/adminController")
const { adminProcted } = require("../middleware/proceted")

const router = require("express").Router()

router
    .get("/get/blogs", getAllBlogs)
    .get("/statistics", adminProcted, statistics)
    .get("/user", adminProcted, getAllUsers)
    .put("/user/block-unblock", adminProcted, userAccountBlockUnblock)
    .put("/user/blog-publish-unpublish", adminProcted, userBlogPublishUnpublish)

module.exports = router