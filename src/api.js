import axios from 'axios';

const BASE_URL = "https://nodejs-api-for-ecommerce.herokuapp.com/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWZmNTFmZWU1NzZmY2FlYjM0NGI5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzExODY0MCwiZXhwIjoxNjQzMzc3ODQwfQ.YBfDfCDC4twGyRrDjHPrx4j5GWPE3OKtM2wPPGjdGiQ"

export function api(){
    return axios.create({
        baseURL: BASE_URL
    })
}

export function userRequest(){
    return axios.create({
        baseURL: BASE_URL,
        headers: {token: `Bearer ${TOKEN}`},
    })
}


