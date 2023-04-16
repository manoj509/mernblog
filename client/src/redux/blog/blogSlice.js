import { createSlice } from "@reduxjs/toolkit"
import { addBlog, getBlog } from "./blogActon"

const blogSlice = createSlice({
    name: "blog",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            state.added = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addBlog.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addBlog.fulfilled, (state, { payload }) => {
                state.loading = false,
                    state.added = true
            })
            .addCase(addBlog.rejected, (state, { payload }) => {
                state.loading = false,
                    state.error = payload
            })

        .addCase(getBlog.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getBlog.fulfilled, (state, { payload }) => {
                state.loading = false,
                    state.blogs = payload
            })
            .addCase(getBlog.rejected, (state, { payload }) => {
                state.loading = false,
                    state.error = payload
            })

    }
})

export const { invalidate } = blogSlice.actions

export default blogSlice.reducer