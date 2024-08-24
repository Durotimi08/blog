import axios from "axios";

export const api = axios.create({
    // baseURL: "https://blog-wb5z.onrender.com/",
    baseURL: "https://blog-1-9ozt.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
