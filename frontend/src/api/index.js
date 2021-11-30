import axios from 'axios'


const API_URL = 'http://192.168.0.11:9080';

const api = axios.create({
    baseURL: `${API_URL}`,
});

export default api;