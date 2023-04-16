import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api"

export const addBlog = createAsyncThunk("user/add-blog", async(blog, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/blog/add-blog", blog, {
            headers: {
                authorization: getState().user.info.token
            }
        })
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})
export const getBlog = createAsyncThunk("blog/get", async(blog, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/blog", blog)
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})