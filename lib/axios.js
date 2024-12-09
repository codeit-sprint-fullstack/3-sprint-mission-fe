import axios from "axios";

// const baseURL = "http://localhost:8000";
const baseURL = "https://three-sprint-mission-fe-jksb.onrender.com";
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;