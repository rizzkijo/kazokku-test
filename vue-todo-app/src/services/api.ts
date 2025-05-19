import axios from "axios"
import { toast } from "vue-sonner"

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("aTkn")
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      // Expired or invalid token, clear storage
      localStorage.removeItem("aTkn")
      localStorage.removeItem("aUsr")

      toast.error("Session expired. Please re-login.")

      // Redirect to login
      setTimeout(() => {
        window.location.href = "/"
      }, 3000)

      return Promise.reject(error)
    }
    return Promise.reject(error)
  },
)

export default API
