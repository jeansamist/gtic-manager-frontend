import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.RASENGAN_BACKEND_SERVER_URL || "",
});
axiosInstance.interceptors.request.use((config) => {
  const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
  if (AUTH_TOKEN) {
    config.headers.Authorization = `Bearer ${AUTH_TOKEN}`;
  }
  return config;
});
export { axiosInstance };
