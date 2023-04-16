import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const admin_getusersAction = createAsyncThunk("admin/user/get", async(arg, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/admin/user", {
            headers: {
                authorization: getState().user.info.token
            }
        })
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})
export const admin_userBlocUnblockAction = createAsyncThunk("admin/user/bloc-unblock", async(userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.put("/admin/user/block-unblock", userData, {
            headers: {
                authorization: getState().user.info.token
            }
        })
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})
export const admin_userBlogPublishUnpublishAction = createAsyncThunk("admin/user/blog-publish-ubpublish", async(userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.put("/admin/user/blog-publish-unpublish", userData, {
            headers: {
                authorization: getState().user.info.token
            }
        })
        return data.resudlt
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})
export const admin_getAllStatitics = createAsyncThunk("admin/user/statistics", async(userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/admin/statistics", {
            headers: {
                authorization: getState().user.info.token
            }
        })
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})
export const admin_getAllBlogs = createAsyncThunk("admin/user/blogs", async(userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.get("/admin/get/blogs", )
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})