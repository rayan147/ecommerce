import axios from 'axios'


const API_URL = 'http://73.195.210.32';

const api = axios.create({
    baseURL: `${API_URL}`,
});

export default api;