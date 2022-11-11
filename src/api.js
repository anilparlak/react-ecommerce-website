import axios from 'axios';

const BASE_URL = "https://nodejs-api-for-ecommerce.herokuapp.com/api";

export function api(){
    return axios.create({
        baseURL: BASE_URL
    })
}

export function userRequest(accessToken){
    return axios.create({
        baseURL: BASE_URL,
        headers: {token: `Bearer ${accessToken ? accessToken : ""}`},
    })
}


