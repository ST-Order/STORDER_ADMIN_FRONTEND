import { useForm } from "react-hook-form";
import email from "./assets/email.svg";
import pw from "./assets/password.png";
import phone from "./assets/phoneIcon.svg";
import nameIcon from "./assets/name.svg";
import spoon from "./assets/spoon.svg";
import Authform from "./Authform";
import InputField from "./InputField";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // 회원가입 처리 로직
  };

  const restaurants = {
    option1: "바비든든",
    option2: "경성카츠",
    option3: "포포420",
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
        placeholder="전화번호"
        icon={phone}
        register={register("tel")}
        type="tel"
      />

      <div className="relative ">
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
        <button
          onClick={() => {}}
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
        register={register("confirmPassword")}
        type="password"
      />
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
