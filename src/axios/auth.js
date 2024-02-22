import axios from "axios";
const accessToken = localStorage.getItem("accessToken");

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr/",
  timeout: 1500,
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` }
});

authApi.interceptors.request.use(
  (config) => {
    console.log("요청보냄");
    return config;
  },
  (error) => {
    alert("인증이 필요합니다.");
    return Promise.reject(error);
  }
);
