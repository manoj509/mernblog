import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api"

export const registerUser = createAsyncThunk("user/register", async(userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/add-user", userData)
        return true
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})
export const loginUser = createAsyncThunk("user/loginn", async(userData, { rejectWithValue, getState }) => {
    try {
        const { data } = await api.post("/user/login", userData)
        localStorage.setItem("info", JSON.stringify(data.result))
        return data.result
    } catch (error) {
        return rejectWithValue(error.response.data.message || error.message)
    }
})