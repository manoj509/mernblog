import { createSlice } from "@reduxjs/toolkit"
import { admin_getAllBlogs, admin_getAllStatitics, admin_getusersAction, admin_userBlocUnblockAction, admin_userBlogPublishUnpublishAction } from "./adminActions"

const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(admin_getusersAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(admin_getusersAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.users = payload
            })
            .addCase(admin_getusersAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

        .addCase(admin_userBlocUnblockAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(admin_userBlocUnblockAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.update = true
            })
            .addCase(admin_userBlocUnblockAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(admin_getAllStatitics.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(admin_getAllStatitics.fulfilled, (state, { payload }) => {
                state.loading = false
                state.stat = payload
            })
            .addCase(admin_getAllStatitics.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(admin_getAllBlogs.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(admin_getAllBlogs.fulfilled, (state, { payload }) => {
                state.loading = false
                state.blogs = payload
            })
            .addCase(admin_getAllBlogs.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
            .addCase(admin_userBlogPublishUnpublishAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(admin_userBlogPublishUnpublishAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.updatedd = !state.updatedd
            })
            .addCase(admin_userBlogPublishUnpublishAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }

})

export default adminSlice.reducer