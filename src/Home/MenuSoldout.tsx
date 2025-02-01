// import Navbar from "./Navbar";
// import cuisineIcon from "../assets/cuisineIcon.svg";
// import { useState } from "react";

// function MenuSoldout() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");

//   const restaurants = {
//     option1: "삼곂덥밥",
//     option2: "제육덮밥",
//     option3: "참치마요덮밥",
//   };

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev);
//     console.log(isOpen);
//   };

//   const handleSelect = (option: string) => {
//     setIsOpen(false); // 선택 후 드롭다운 닫기
//     setSelectedOption(option);
//   };

//   return (
//     <Navbar>
//       <div className="flex justify-center h-full">
//         <div className="flex flex-col justify-center items-center w-[947px] gap-32">
//           <div className="flex flex-col items-center gap-10">
//             <p className="text-6xl text-center text-black">
//               어떤 메뉴가 품절되셨나요 ?
//             </p>
//             <div className="flex items-center gap-20 px-10 py-2 rounded-[20px] bg-[#e9e9e9]/60  justify-between">
//               <img src={cuisineIcon} className=" w-20 h-20 object-cover" />

//               <div className="relative cursor-pointer min-w-80 text-center">
//                 <div
//                   onClick={handleToggle}
//                   className={`text-4xl bg-transparent border-none outline-none ${
//                     selectedOption ? "" : "text-[#959595]"
//                   }`}
//                 >
//                   {selectedOption || "품절된 메뉴를 골라주세요!"}
//                   {/* 빈 문자열이면 품절된 메뉴를 골라주세요 출력 */}
//                 </div>

//                 {isOpen && (
//                   <div className="absolute mt-1 w-full bg-white border rounded shadow-lg z-10 ">
//                     {Object.values(restaurants).map((value) => (
//                       <div
//                         key={value}
//                         onClick={() => {
//                           handleSelect(value);
//                         }}
//                         className="p-2 hover:bg-gray-200 cursor-pointer py-4 text-center text-xl"
//                       >
//                         {value}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <svg
//                 onClick={handleToggle}
//                 width={64}
//                 height={65}
//                 viewBox="0 0 64 65"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className=" w-16 h-16 relative cursor-pointer"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <path
//                   d="M16 24.5L32 40.5L48 24.5"
//                   stroke="#0F172A"
//                   stroke-width="1.33333"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="flex flex-col items-center gap-11 text-5xl text-center">
//             {/* 공지사항을 추가로 등록하러 갈까요? */}
//             <div className="cursor-pointer text-4xl text-white font-bold px-20 py-6 rounded-2xl bg-[#435fff]">
//               품절 등록하기
//             </div>
//           </div>
//         </div>
//       </div>
//     </Navbar>
//   );
// }

// export default MenuSoldout;

import Navbar from "./Navbar";
import cuisineIcon from "../assets/cuisineIcon.svg";
import { useState } from "react";
import { CustomButton } from "./Notice/CustomButton";
// import { CustomButton } from "./CustomButton";

function MenuSoldout() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const restaurants = {
    option1: "삼겹덮밥",
    option2: "제육덮밥",
    option3: "참치마요덮밥",
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: string) => {
    setIsOpen(false); // 선택 후 드롭다운 닫기
    setSelectedOption(option);
  };

  return (
    <Navbar>
      <div className="flex justify-center h-full overflow-y-auto p-4">
        <form className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
          {/* 헤더 */}
          {/* 이미지 아이콘 */}
          <div className="flex justify-center my-1">
            <img
              src={cuisineIcon}
              alt="품절 메뉴 아이콘"
              className="w-24 h-24 object-cover"
            />
          </div>
          <div className="text-center">
            <p className="font-bold text-4xl text-gray-800">품절 메뉴 등록 </p>
            <p className="text-lg text-gray-500 mt-2">
              품절된 메뉴를 선택하고 등록하세요.
            </p>
          </div>

          {/* 드롭다운 */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium text-gray-700">
              품절 메뉴 선택
            </label>

            <div className="relative">
              <div
                onClick={handleToggle}
                className={`p-3 bg-gray-100 border border-gray-300 rounded-lg text-lg cursor-pointer ${
                  selectedOption ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {selectedOption || "품절된 메뉴를 선택해주세요"}
              </div>
              {isOpen && (
                <div className="absolute w-full mt-1 bg-white border rounded shadow-lg z-10">
                  {Object.values(restaurants).map((value) => (
                    <div
                      key={value}
                      onClick={() => handleSelect(value)}
                      className="p-2 hover:bg-gray-200 cursor-pointer text-center"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex gap-4 justify-center mt-6">
            <CustomButton title="품절 등록하기" />
          </div>
        </form>
      </div>
    </Navbar>
  );
}

export default MenuSoldout;
