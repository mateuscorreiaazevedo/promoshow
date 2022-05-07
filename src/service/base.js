import axios from "axios";

const BASE_URL = "http://localhost:9002";

export const api = axios.create({
    baseURL: BASE_URL
})