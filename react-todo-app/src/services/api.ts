import axios from "axios";
import { toast } from 'sonner'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("aTkn");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Token expired atau invalid, clear storage & redirect ke login
      localStorage.removeItem("aTkn");
      localStorage.removeItem("aUsr");

      toast.error("Session expired. Please re-login.");
      
      // Cara redirect di luar komponen React:
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);

      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default API;
