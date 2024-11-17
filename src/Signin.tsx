import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import email from "./assets/emailIcon.svg";
import pw from "./assets/passwordIcon.svg";
import Authform from "./Authform";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

function Signin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const loginData = {
        email: data.email,
        password: data.password,
      };

      // 서버 연동 시 실제 endpoint로 변경 필요
      const response = await axios.post("/api/login", loginData);

      if (response.status === 200) {
        // 토큰이 있다면 localStorage에 저장
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }

        // 사용자 정보가 있다면 저장
        if (response.data.user) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        // 로그인 성공 시 홈으로 이동
        nav("/home");
      }
    } catch (error: any) {
      console.error("Login failed:", error);

      // 에러 메시지 처리
      if (error.response) {
        switch (error.response.status) {
          case 401:
            setError("password", {
              type: "manual",
              message: "이메일 또는 비밀번호가 일치하지 않습니다.",
            });
            break;
          case 404:
            setError("email", {
              type: "manual",
              message: "존재하지 않는 이메일입니다.",
            });
            break;
          default:
            setError("password", {
              type: "manual",
              message: "로그인 중 오류가 발생했습니다.",
            });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    nav("/register");
  };

  return (
    <Authform type="signin" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <InputField
          placeholder="이메일"
          icon={email}
          register={register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "올바른 이메일 형식이 아닙니다",
            },
          })}
          type="email"
          signin={true}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message?.toString()}
          </p>
        )}
      </div>

      <div className="relative">
        <InputField
          placeholder="비밀번호"
          icon={pw}
          register={register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 6,
              message: "비밀번호는 6자 이상이어야 합니다",
            },
          })}
          type="password"
          signin={true}
          minlength={6}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message?.toString()}
          </p>
        )}
      </div>

      <div className="flex flex-col mt-4 gap-2">
        <button
          type="submit"
          disabled={isLoading}
          className="px-[135px] py-5 rounded-[20px] bg-blue-500 text-white text-xl disabled:bg-blue-300"
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </button>
        <button
          type="button"
          onClick={handleRegister}
          className="px-[135px] py-5 rounded-[20px] bg-blue-500 text-white text-xl"
        >
          회원가입
        </button>
      </div>
    </Authform>
  );
}

export default Signin;
