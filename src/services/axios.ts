import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient() {
    const { '@moto-user-auth-token': token } = parseCookies();

    const api = axios.create({
        baseURL: process.env.API_URL,
    });

    api.interceptors.request.use(config => {
        return config;
    });

    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }

    return api;
}
