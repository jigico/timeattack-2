import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1500
});

commentsAxios.interceptors.request.use(
  async (config) => {
    console.log("요청보냄");
    await authApi.get("/user");

    return config;
  },
  (error) => {
    alert("인증이 필요합니다.");
    return Promise.reject(error);
  }
);

commentsAxios.interceptors.response.use(
  (config) => {
    console.log("요청 성공입니다.");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default commentsAxios;
