import axios from "axios";
import { useLogoutQuery } from "../features/auth";

export const api = axios.create({
    // baseURL: "https://blog-1-9ozt.onrender.com",
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error (e.g., redirect to login)
            console.log("Unauthorized, redirecting to login...");
            const { refetch: logout } = useLogoutQuery();
            logout();
        }
        return Promise.reject(error);
    },
);

export default api;
