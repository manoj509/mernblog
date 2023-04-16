import axios from "axios"
export const BACKEND = "http://localhost:5000"
const api = axios.create({
    baseURL: "http://localhost:5000"
})

export default api