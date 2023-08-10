import axios from 'axios'

const app = axios.create({
    baseURL: 'https://localhost:7023/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default app

/* 

API route:

https://localhost:7023/


*/