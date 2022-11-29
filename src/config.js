import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://jennieblog.herokuapp.com/api/"
})