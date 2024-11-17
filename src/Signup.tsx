import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import email from "./assets/emailIcon.svg";
import pw from "./assets/passwordIcon.svg";
import phone from "./assets/phoneIcon.svg";
import nameIcon from "./assets/name.svg";
import spoon from "./assets/spoonIcon.svg";
import Authform from "./Authform";
import InputField from "./InputField";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [emailMessage, setEmailMessage] = useState<String>("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const signupData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "ADMIN",
      };

      // 서버 연동 시 실제 endpoint로 변경 필요
      const response = await axios.post("/api/signup", signupData);

      if (response.status === 200) {
        // 성공 시 로그인 페이지로 이동
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const restaurants = {
    option1: "바비든든",
    option2: "경성카츠",
    option3: "포포420",
  };

  const password = watch("password");

  const emailValidation = async (mail: string) => {
    try {
      // 서버 연동 시 실제 endpoint로 변경 필요
      const response = await axios.post("/api/check-email", { email: mail });

      if (response.status !== 200) {
        setError("email", {
          type: "existingEmail",
          message: "이미 존재하는 이메일입니다.",
        });
        setEmailMessage("");
        return false;
      }

      clearErrors("email");
      setEmailMessage("사용할 수 있는 이메일입니다.");
      return true;
    } catch (error) {
      setError("email", {
        type: "existingEmail",
        message: "이미 존재하는 이메일입니다.",
      });
      setEmailMessage("");
      console.error("Email validation failed:", error);
      return false;
    }
  };

  return (
    <Authform type="signup" onSubmit={handleSubmit(onSubmit)}>
      <select
        {...register("restaurant")}
        className="pl-16 text-xl h-[63px] rounded-[20px] bg-[#e9e9e9]/60"
        style={{
          backgroundImage: `url(${spoon})`,
          backgroundSize: "35px",
          backgroundPosition: "20px center",
          backgroundRepeat: "no-repeat",
        }}
        required
      >
        <option value="" disabled selected>
          식당을 선택하세요.
        </option>
        {Object.values(restaurants).map((restaurant) => (
          <option key={restaurant} value={restaurant}>
            {restaurant}
          </option>
        ))}
      </select>

      <InputField
        placeholder="이름"
        icon={nameIcon}
        register={register("name")}
        type="text"
      />

      <InputField
        placeholder="전화번호 (010-xxxx-xxxx)"
        icon={phone}
        register={register("tel")}
        type="tel"
        pattern="(010)-\d{3,4}-\d{4}"
      />

      <div className="relative">
        <input
          type="email"
          {...register("email")}
          placeholder="이메일"
          style={{
            backgroundImage: `url(${email})`,
            backgroundSize: "35px",
            backgroundPosition: "20px center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full pl-16 text-xl h-[63px] rounded-[20px] bg-[#e9e9e9]/60"
          required
        />
        {errors.email && (
          <p className="text-red-500 text-center mt-2">
            {errors.email.message?.toString()}
          </p>
        )}
        {emailMessage && (
          <p className="text-green-500 text-center mt-2">{emailMessage}</p>
        )}
        <button
          onClick={() => emailValidation(watch("email"))}
          type="button"
          className="btn hover:bg-blue-600 absolute right-4 top-2 drop-shadow-md bg-blue-500 text-gray-200"
        >
          중복확인
        </button>
      </div>

      <InputField
        placeholder="비밀번호"
        icon={pw}
        register={register("password")}
        type="password"
      />

      <InputField
        placeholder="비밀번호 확인"
        icon={pw}
        register={register("confirmPassword", {
          validate: (value) =>
            value === password || "비밀번호가 일치하지 않습니다.",
        })}
        type="password"
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-center mt-2">
          {errors.confirmPassword.message?.toString()}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="px-[135px] py-4 rounded-[20px] bg-blue-500 text-white text-xl disabled:bg-blue-300"
      >
        {isLoading ? "처리중..." : "가입하기"}
      </button>
    </Authform>
  );
}

export default Signup;
