import axios from 'axios';

const api = axios.create({
    
    baseURL: 'https://apibarber1.herokuapp.com/',
    // baseURL: 'https://daruanbarber.herokuapp.com',
    // baseURL: 'localhost:4041',
    // timeout: 1000,
    headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api;