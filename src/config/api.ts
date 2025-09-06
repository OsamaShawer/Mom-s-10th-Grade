// API Configuration
const API_BASE_URL = import.meta.env.PROD
  ? "https://osamashawer.github.io/Mom-s-10th-Grade" // Temporary: serve from GitHub Pages
  : "http://localhost:3000";

export default API_BASE_URL;
