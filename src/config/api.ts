// API Configuration
const API_BASE_URL = import.meta.env.PROD
  ? "https://your-backend-url.railway.app" // Replace with your actual backend URL
  : "http://localhost:3000";

export default API_BASE_URL;
