import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api-developer-hajarif.hmifunej.id/api'
})