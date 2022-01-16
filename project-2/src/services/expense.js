import axios from "axios";

const BASE = process.env.REACT_APP_API_BASE;
const KEY = process.env.REACT_APP_API_KEY;

const baseURL = `https://api.airtable.com/v0/${BASE}/expense`

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${KEY}`,
  }
});

export default api;