import axios from "axios";

// const baseURL = "http://localhost:8000";
const baseURL = "https://panda-market-api.vercel.app";
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    }
});

export default instance;