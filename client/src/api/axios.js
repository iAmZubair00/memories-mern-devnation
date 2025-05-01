import axios from "axios";
import { AppConstants } from "../constants";

const BASE_URL = process.env.REACT_APP_API_URL;

// Axios instance for private API requests with JSON headers
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor for axiosPrivate to add the Authorization headers
axiosPrivate.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(AppConstants.TOKEN)
        if (token && config.headers) {
            if (!config.headers[AppConstants.AUTH_HEADER]) {
                config.headers[AppConstants.AUTH_HEADER] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error),
);

// Response interceptor for axiosPrivate to handle token refresh
/* axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
        const prevRequest = error.config;
        if (error.response?.status === 401 && !prevRequest.sent) {
            prevRequest.sent = true;
            const newAccessToken = await refreshToken();
            if (newAccessToken) {
                prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            }
            return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
    }
); */

// Function to refresh the JWT token
/* const refreshToken = async () => {
    const token = JSON.parse(localStorage.getItem('token') || 'null');
    const refresh = token?.refresh;

    if (!refresh) {
        localStorage.clear();
        window.location.reload();
        return;
    }

    try {
        const response = await axios.post(
            `${BASE_URL}/auth/token/refresh/`,
            { refresh },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        token['access'] = response.data.access;
        localStorage.setItem('token', JSON.stringify(token));
        return response.data.access;
    } catch (error) {
        localStorage.clear();
        window.location.reload();
    }
}; */
