import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      id,
      password
    };

    try {
      const response = await axios.post("https://moneyfulpublicpolicy.co.kr/login", obj);
      // console.log(response.data);
      const { userId, nickname, accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("userId", userId);
      alert("로그인에 성공하였습니다. 메인 페이지로 이동할게요");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">id</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하러가기
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
