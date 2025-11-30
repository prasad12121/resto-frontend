import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// AUTO-LOGOUT ON TOKEN EXPIRE
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Token expired. Auto logging out...");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      window.location.href = "/login"; // force redirect
    }
    return Promise.reject(error);
  }
);

export default api;




