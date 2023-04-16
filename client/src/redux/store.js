import { configureStore } from "@reduxjs/toolkit"
import adminSlice from "./admin/adminSlice"
import blogSlice from "./blog/blogSlice"
import userSlice from "./user/userSlice"

const store = configureStore({
    reducer: {
        user: userSlice,
        blog: blogSlice,
        admin: adminSlice
    }
})

export default store