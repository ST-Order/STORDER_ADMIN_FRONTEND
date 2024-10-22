import { useForm } from "react-hook-form";
import email from "./assets/email.svg";
import pw from "./assets/password.png";
import Authform from "./Authform";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // 로그인 처리 로직
  };
  const nav = useNavigate();

  return (
    <Authform type="signin" onSubmit={handleSubmit(onSubmit)}>
      {/* {errors.email && <p className="absolute">{errors.email.message}</p>} */}

      <InputField
        placeholder="이메일"
        icon={email}
        register={register("email")}
        type="email"
        signin={true}
      />
      <InputField
        placeholder="비밀번호"
        icon={pw}
        register={register("password")}
        type="password"
        signin={true}
        minlength={6}
      />
      <div className="flex flex-col mt-4 gap-2">
        <button
          type="submit"
          className="px-[135px] py-5 rounded-[20px] bg-blue-500 text-white text-xl"
        >
          로그인
        </button>
        <button
          type="button" // 기본 제출 동작을 하지 않도록 설정
          onClick={() => {
            nav("/register");
          }}
          className=" px-[135px] py-5 rounded-[20px] bg-blue-500 text-white text-xl"
        >
          회원가입
        </button>
      </div>
    </Authform>
  );
}

export default Signin;
