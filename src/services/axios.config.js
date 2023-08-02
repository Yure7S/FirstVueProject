import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://localhost:7023',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axios