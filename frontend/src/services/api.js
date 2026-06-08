import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

export const checkHealth = () => api.get("/health");

export const submitContactForm = (data) => api.post("/contact", data);

export default api;
