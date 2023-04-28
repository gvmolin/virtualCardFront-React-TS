import axios from "axios";
// import env from "react-dotenv";

export const client = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3001",
})