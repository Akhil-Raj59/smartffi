import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api/v1/user",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  withCredentials: true,
});

export const coursesApiClient = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE_URL ? import.meta.env.VITE_API_BASE_URL.replace("/user", "/courses") : null) || "http://localhost:5001/api/v1/courses",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
  withCredentials: true,
});

export default apiClient;
