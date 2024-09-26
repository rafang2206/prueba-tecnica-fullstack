import axios from 'axios';

export const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND_URL,
  timeout: 90000
})