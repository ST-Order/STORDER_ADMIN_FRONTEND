import { ChangeEvent, FormEvent, useState } from "react";
import cooker from "./assets/cooker.png";
import email from "./assets/email.png";
import pw from "./assets/password.png";
import phone from "./assets/phone.svg";
import spoon from "./assets/spoon.svg";
import nameIcon from "./assets/name.svg";

function Authform({ type }) {
  //   const [type, setType] = useState<string>();
  //   const [rest, setRest] = useState<string>("");
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>("");

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

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
      return "65px";
    } else if (type === "signin") {
      return "76px";
    }
    return "76px"; // 기본값 설정
  };
  return (
    <div className="flex flex-col justify-center items-center gap-10 mx-auto">
      <img
        src={cooker}
        className="flex-grow-0 flex-shrink-0 w-[130px] h-[130px] object-cover"
      />
      <>
        <div
          // href="https://your-homepage.com"
          className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-9xl text-center"
        >
          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-9xl text-left text-[#b90005] drop-shadow-2xl">
            S
          </span>
          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-9xl text-left text-[#0a1e62] drop-shadow-2xl">
            T
          </span>
          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-9xl text-left text-[#8f8f8f] drop-shadow-2xl">
            :
          </span>
          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-9xl text-left text-gray-300 drop-shadow-md">
            table
          </span>
        </div>
      </>
      <form
        onSubmit={onSubmit}
        className={`flex flex-col w-full gap-7 ${
          type === "signup" ? "gap-4" : ""
        }`}
        autoComplete="off"
      >
        <select
          onChange={handleRestChange}
          value={selectedRestaurant} // 키로 관리
          id="options"
          className={`pl-16 text-xl flex items-center self-stretch flex-grow-0 flex-shrink-0 h-[65px] relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60`}
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
          {/* <option value="option1">바비든든</option>
          <option value="option2">경성카츠</option>
          <option value="option3">몰라몰라</option> */}
        </select>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          placeholder="이름"
          style={{
            backgroundImage: `url(${nameIcon})`,
            backgroundSize: "35px",
            backgroundPosition: "20px center",
            backgroundRepeat: "no-repeat",
          }}
          name="name"
          autoFocus
          required
          className={`pl-16 text-xl flex items-center self-stretch flex-grow-0 flex-shrink-0 h-[${height()}] relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60`}
        />
        <input
          onChange={handlePhoneChange}
          value={phoneNum}
          type="tel"
          placeholder="전화번호"
          style={{
            backgroundImage: `url(${phone})`,
            backgroundSize: "35px",
            backgroundPosition: "20px center",
            backgroundRepeat: "no-repeat",
          }}
          name="phoneNum"
          autoFocus
          required
          className={`pl-16 text-xl flex items-center self-stretch flex-grow-0 flex-shrink-0 h-[${height()}] relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60`}
        />
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
            className="absolute right-4 top-1/2 transform -translate-y-1/2 drop-shadow-md bg-blue-500 text-gray-200"
          >
            중복확인
          </button>
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
          className={`pl-16 text-xl flex items-center self-stretch flex-grow-0 flex-shrink-0 h-[${height()}] relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60`}
          style={{
            backgroundImage: `url(${pw})`,
            backgroundSize: "35px",
            backgroundPosition: "20px center",
            backgroundRepeat: "no-repeat",
          }}
        />
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
            self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[135px] py-5 rounded-[20px] bg-blue-500 text-white text-xl"
            >
              가입하기
            </button>
          )}

          {type === "signin" && (
            <button
              type="button" // 기본 제출 동작을 하지 않도록 설정
              // onClick={handleSignup}
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
