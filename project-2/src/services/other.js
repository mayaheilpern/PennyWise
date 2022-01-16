import axios from "axios";

const BASE = proccess.env.REACT_APP_API_BASE;
const KEY = proccess.env.REACT_APP_API_KEY;

const baseURL = `https://api.airtable.com/v0/${BASE}/other`

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${KEY}`,
  }
});

export default api;