import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://jenlog.herokuapp.com/api"
})

export const proxyLocal = axios.create({
    baseURL : "https://localHost:5000/api/"
})