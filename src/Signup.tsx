import { useForm } from "react-hook-form";
import email from "./assets/emailIcon.svg";
import pw from "./assets/passwordIcon.svg";
import phone from "./assets/phoneIcon.svg";
import nameIcon from "./assets/name.svg";
import spoon from "./assets/spoonIcon.svg";
import Authform from "./Authform";
import InputField from "./InputField";
import { useState } from "react";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [emailMessage, setEmailMessage] = useState<String>(""); // 이메일 메시지 상태 추가

  const onSubmit = (data: any) => {
    // 이메일 중복 확인 로직을 여기에 추가
    if (data.email === "1@gmail.com") {
      setError("email", {
        type: "existingEmail",
        message: "이미 존재하는 이메일입니다.",
      });
    } else {
      console.log(data); // 회원가입 처리 로직
    }
  };
  const restaurants = {
    option1: "바비든든",
    option2: "경성카츠",
    option3: "포포420",
  };

  const password = watch("password");
  // const mail = watch("email");
  const emailValidation = (mail) => {
    if (mail !== "1@gmail.com") {
      console.log("good");
      clearErrors("email");
      setEmailMessage("사용할 수 있습니다."); // 이메일 사용 가능 메시지 설정
      return true;
    } else {
      console.log("no");
      setError("email", {
        type: "existingEmail",
        message: "이미 존재하는 이메일입니다.",
      });
      setEmailMessage(""); // 중복된 이메일일 경우 메시지 초기화
      ra;
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

      <div className="relative ">
        <input
          type="email"
          {...register("email", {
            validate: (value) => {
              emailValidation(value);
            },
          })}
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
          <p className="text-red-500 text-center mt-2 mb-">
            {errors.email.message}
          </p>
        )}
        <button
          onClick={emailValidation}
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
      <div>
        <InputField
          placeholder="비밀번호 확인"
          icon={pw}
          register={register("confirmPassword", {
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.", // 비밀번호 확인 유효성 검사
          })}
          type="password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-center mt-2">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="px-[135px] py-4 rounded-[20px] bg-blue-500 text-white text-xl"
      >
        가입하기
      </button>
    </Authform>
  );
}

export default Signup;
