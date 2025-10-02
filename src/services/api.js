import Axios from "axios";

export const api = Axios.create({
    baseURL: "http://localhost:3000",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    config.headers.authorization = `Bearer ${token}`;
    return config;
});