import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import cooker from "./assets/cooker.png";
import email from "./assets/email.png";
import pw from "./assets/password.png";
function App() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id, password);
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const target =
    setId(e.target.value);
    // console.log(id);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 mx-auto">
      <img
        src={cooker}
        className="flex-grow-0 flex-shrink-0 w-[147px] h-[147px] object-cover"
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
        className="flex flex-col w-full gap-7"
        autoComplete="on"
      >
        <input
          onChange={handleIdChange}
          value={id}
          type="text"
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
          // className="flex-grow-0 flex-shrink-0 text-xl bg-[#e9e9e9]/60"
          className="pl-16 text-xl flex items-center self-stretch flex-grow-0 flex-shrink-0 h-[76px] relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60"
        />
        <input
          onChange={handlePasswordChange}
          type="password"
          value={password}
          placeholder="비밀번호"
          style={{
            backgroundImage: `url(${pw})`,
            backgroundSize: "35px",
            backgroundPosition: "20px center",
            backgroundRepeat: "no-repeat",
          }}
          name="email"
          autoFocus
          required
          // className="flex-grow-0 flex-shrink-0 text-xl bg-[#e9e9e9]/60"
          className="pl-16 text-xl flex items-center self-stretch flex-grow-0 flex-shrink-0 h-[76px] relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60"
        />

        <div className="flex flex-col mt-4 gap-2">
          <button
            type="submit"
            className="
            self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[135px] py-5 rounded-[20px] bg-blue-500 text-white text-xl"
          >
            로그인
          </button>
          <button
            type="button" // 기본 제출 동작을 하지 않도록 설정
            // onClick={handleSignup}
            className=" self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[135px] py-5 rounded-[20px] bg-blue-500 text-white text-xl"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
