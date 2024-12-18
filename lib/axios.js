import axios from "axios";

const baseURL = "http://localhost:8000";
// const baseURL = "https://three-sprint-mission-be-lnfs.onrender.com";
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
    },
});

export default instance;