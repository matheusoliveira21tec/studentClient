import axios from 'axios';

const api = axios.create({
    baseURL :"https://localhost:7276/api"
});
export default api;