import { ChangeEvent, FormEvent, useState } from "react";
import cooker from "./assets/cooker.png";
import email from "./assets/email.png";
import pw from "./assets/password.png";
import phone from "./assets/phone.svg";
import spoon from "./assets/spoon.svg";
import nameIcon from "./assets/name.svg";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import InputField from "./InputField";

function Authform({ type }) {
  //   const [type, setType] = useState<string>();
  //   const [rest, setRest] = useState<string>("");
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>("");

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const nav = useNavigate();
  const navigate = () => {
    nav("/register");
  };

  const restaurants = {
    option1: "바비든든",
    option2: "경성카츠",
    option3: "포포",
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id, password);
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(e.target.value);
  };

  //   const handleRestChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //     const value = e.target.value as keyof typeof restaurants;
  //     console.log(value);
  //     setRest(restaurants[value]);
  //     console.log(rest);
  //   };
  const handleRestChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRestaurant(e.target.value); // 선택된 식당 이름으로 상태 업데이트
  };
  const height = () => {
    if (type === "signup") {
      return "63px";
    } else if (type === "signin") {
      return "76px";
    }
    return "76px"; // 기본값 설정
  };
  return (
    <div
      className={`h-screen flex flex-col justify-center items-center ${
        type === "signin" ? "gap-10" : "gap-8"
      }  mx-auto`}
    >
      <img
        src={cooker}
        className="flex-grow-0 flex-shrink-0 w-[120px] object-cover"
      />
      <div
        // href="https://your-homepage.com"
        className=" flex-grow-0 flex-shrink-0 w-[500px] text-center leading-none"
      >
        {/* <div> */}
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-vh text-left text-[#b90005] drop-shadow-2xl">
          S
        </span>
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-vh text-left text-[#0a1e62] drop-shadow-2xl">
          T
        </span>
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-vh text-left text-[#8f8f8f] drop-shadow-2xl">
          :
        </span>
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-vh text-left text-gray-300 drop-shadow-md">
          table
        </span>
      </div>
      <form
        onSubmit={onSubmit}
        className={`flex flex-col max-w-[500px] w-2/3 gap-7 ${
          type === "signup" ? "gap-4" : ""
        }`}
        autoComplete="off"
      >
        {type === "signup" && (
          <select
            onChange={handleRestChange}
            value={selectedRestaurant} // 키로 관리
            id="options"
            className={`pl-16 text-xl flex items-center self-stretch flex-grow-0 flex-shrink-0 h-[63px] relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60`}
            style={{
              backgroundImage: `url(${spoon})`,
              backgroundSize: "35px",
              backgroundPosition: "20px center",
              backgroundRepeat: "no-repeat",
            }}
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
        )}
        {type === "signup" && (
          <InputField
            type="text"
            value={name}
            placeholder="이름"
            onChange={(e) => setName(e.target.value)}
            icon={nameIcon}
            height={height()}
          />
        )}
        {type === "signup" && (
          <InputField
            type="tel"
            value={phoneNum}
            placeholder="전화번호"
            onChange={(e) => setPhoneNum(e.target.value)}
            icon={phone}
            height={height()}
          />
        )}
        <div className="relative ">
          <input
            onChange={handleIdChange}
            value={id}
            type="email"
            placeholder="이메일"
            style={{
              backgroundImage: `url(${email})`,
              backgroundSize: "35px",
              backgroundPosition: "20px center",
              backgroundRepeat: "no-repeat",
            }}
            name="email"
            autoFocus
            required
            className={`w-full pl-16 text-xl items-center h-[${height()}] relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60`}
          />{" "}
          {type === "signup" && (
            <button
              onClick={() => {
                console.log(
                  selectedRestaurant,
                  name,
                  phoneNum,
                  id,
                  password,
                  confirmPassword
                );
              }}
              type="button"
              className="btn hover:bg-blue-600 absolute right-4 top-2 drop-shadow-md bg-blue-500 text-gray-200"
            >
              중복확인
            </button>
          )}
        </div>
        <input
          onChange={handlePasswordChange}
          type="password"
          value={password}
          placeholder="비밀번호"
          name="password"
          autoFocus
          required
          // className="flex-grow-0 flex-shrink-0 text-xl bg-[#e9e9e9]/60"
          className={`pl-16 text-xl flex items-center self-stretch flex-grow-0 flex-shrink-0 h-[76px] relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60`}
          style={{
            backgroundImage: `url(${pw})`,
            backgroundSize: "35px",
            backgroundPosition: "20px center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {type === "signup" && (
          <input
            onChange={handleConfirmPasswordChange}
            type="password"
            value={confirmPassword}
            placeholder="비밀번호 확인"
            name="confirmPassword"
            autoFocus
            required
            className={`pl-16 text-xl flex items-center self-stretch flex-grow-0 flex-shrink-0 h-[${height()}] relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60`}
            style={{
              backgroundImage: `url(${pw})`,
              backgroundSize: "35px",
              backgroundPosition: "20px center",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}

        <div className="flex flex-col mt-4 gap-2">
          {type === "signin" ? (
            <button
              type="submit"
              className="
            self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[135px] py-5 rounded-[20px] bg-blue-500 text-white text-xl"
            >
              로그인
            </button>
          ) : (
            <button
              type="submit"
              className="
            self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[135px] py-4 rounded-[20px] bg-blue-500 text-white text-xl"
            >
              가입하기
            </button>
          )}

          {type === "signin" && (
            <button
              type="button" // 기본 제출 동작을 하지 않도록 설정
              onClick={navigate}
              className=" self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[135px] py-5 rounded-[20px] bg-blue-500 text-white text-xl"
            >
              회원가입
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Authform;
