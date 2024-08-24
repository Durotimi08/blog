import axios from "axios";

export const api = axios.create({
    // baseURL: "https://blog-wb5z.onrender.com/",
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
