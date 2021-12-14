import axios from 'axios'


const API_URL = 'http://69.141.53.112';

const api = axios.create({
    baseURL: `${API_URL}`,
});

export default api;