import axios from "axios";

const baseURL = 'https://backendconnection-14tc.onrender.com';

const instance = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default instance;