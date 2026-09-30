// const API_BASE_URL = (process.env.REACT_APP_API_URL || "http://localhost:7000").replace(/\/+$/, "");

const API_BASE_URL = (process.env.REACT_APP_API_URL || "https://investnow-faf0.onrender.com").replace(/\/+$/, "");



export const apiUrl = (path) => `${API_BASE_URL}/${path.replace(/^\/+/, "")}`;