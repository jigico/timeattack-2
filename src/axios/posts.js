import axios from "axios";

const postsAxios = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1500,
  headers: { "Content-Type": "application/json" }
});

export default postsAxios;
