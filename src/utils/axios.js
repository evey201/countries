import axios from 'axios'

const setUp = {
    baseUrl: 'https://restcountries.com/v2',
    headers: {
        Accept: 'application/json,text/plain,*/*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
}

export const request = axios.create(setUp)