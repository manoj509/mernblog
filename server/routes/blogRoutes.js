const { addBlog, getAllBlog, updateBlog, deleteBlog, destroyBlog } = require("../controller/blogController")

const router = require("express").Router()

router
    .get("/", getAllBlog)
    .put("/update-blog/:blogId", updateBlog)
    .delete("/delete-blog/:blogId", deleteBlog)
    .delete("/destroy", destroyBlog)
    .post("/add-blog", addBlog)

module.exports = router