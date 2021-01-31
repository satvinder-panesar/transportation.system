import axios from "axios";

export function registerRequestInterceptor(){
    axios.interceptors.request.use(function(config){
        console.log("reached request interceptor")
        return config
    }, function(error){
        return Promise.reject(error)
    })
}

export function registerResponseInterceptor(){
    axios.interceptors.response.use(function(config){
        console.log("reached response interceptor")
        return config
    }, function(error){
        return Promise.reject(error)
    })
}