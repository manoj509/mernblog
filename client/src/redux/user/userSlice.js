import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "./userAction"
const local = JSON.parse(localStorage.getItem("info"))
const userSlice = createSlice({
    name: "user",
    initialState: { info: local },
    reducers: {
        logout: state => {
            state.info = null
            localStorage.removeItem("info")
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false,
                    state.registered = true
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false,
                    state.error = payload
            })

        .addCase(loginUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.info = payload
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})
export const { logout } = userSlice.actions
export default userSlice.reducer