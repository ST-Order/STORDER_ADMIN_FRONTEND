// import { useForm } from "react-hook-form";
// import Navbar from "./Navbar";
// import { ChangeEvent, useState } from "react";
// import fileUploadIcon from "../assets/fileUploadIcon.svg";

// function MenuRegister() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [imagePreview, setImagePreview] = useState<string | null>(null); // 상태 타입 정의

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result as string); // 업로드된 이미지 미리보기 설정
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   return (
//     <Navbar>
//       <div className="flex justify-center h-full overflow-y-auto">
//         <form
//           className="flex flex-col w-[1200px] gap-9 py-20 mx-12"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div>
//             <span className="font-bold text-6xl">메뉴판</span>
//             <span className="text-5xl">을 만들어볼까요 ?</span>
//           </div>
//           <div className="flex flex-col gap-3">
//             <div className="flex items-baseline">
//               <div className="text-4xl">메뉴 이름</div>

//               {errors.title?.message && (
//                 <p className="ml-5 text-red-500">
//                   {errors.title.message.toString()}
//                 </p>
//               )}
//             </div>
//             <input
//               className="p-6 text-center bg-[#d9d9d9] text-3xl text-[#959595]"
//               {...register("title", {
//                 required: "메뉴 이름을 작성해주세요..!",
//               })}
//               placeholder="메뉴 이름"
//             />
//           </div>
//           <div className="flex flex-col gap-3">
//             <div className="flex items-baseline">
//               <div className=" text-4xl">메뉴 이미지 첨부</div>
//               {errors.image && (
//                 <p className="ml-5 text-red-500">
//                   {errors.image.message?.toString()}
//                 </p>
//               )}
//             </div>
//             <div className="flex items-center w-48 h-48 gap-2.5 p-10 rounded-[5px] bg-[#edebeb] border-[10px] border-black border-dashed">
//               <label
//                 htmlFor="image"
//                 className="flex flex-col cursor-pointer h-full w-full"
//               >
//                 {imagePreview ? (
//                   <img src={imagePreview} alt="업로드된 이미지 미리보기" />
//                 ) : (
//                   <img
//                     src={fileUploadIcon}
//                     alt="파일 업로드 아이콘"
//                     className="p-4"
//                   />
//                 )}
//                 <input
//                   className="bg-[#d9d9d9] border border-black hidden"
//                   {...register("image", {
//                     required: "대표 이미지를 첨부하세요..!",
//                   })}
//                   type="file"
//                   id="image"
//                   accept="image/*"
//                   onChange={handleImageChange} // 파일 선택 시 호출되는 함수
//                 />
//               </label>
//             </div>
//           </div>
//           <div className="flex flex-col gap-3">
//             <div className=" text-4xl">메뉴 설명</div>
//             <input
//               className="p-6 text-center bg-[#d9d9d9] text-3xl text-[#959595]"
//               {...register("description")}
//               placeholder="메뉴에 대한 간단한 설명이나 재료, 맛 등을 알려주세요 !"
//             />
//           </div>
//           <div className="flex flex-col gap-4">
//             <div className=" text-4xl flex gap-3 items-end">
//               메뉴 옵션
//               <p className="text-2xl text-[#959595]">
//                 해당 메뉴에 해당되는 옵션을 골라주세요 !
//               </p>
//             </div>
//             <div className="flex items-center gap-20">
//               <div className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   id="gobbaegi"
//                   {...register("options.gobbaegi")}
//                   className="transform scale-150"
//                 />
//                 <label htmlFor="gobbaegi" className=" text-4xl">
//                   곱빼기
//                 </label>
//               </div>
//               <div className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   id="rice"
//                   {...register("options.rice")}
//                   className="transform scale-150"
//                 />
//                 <label htmlFor="rice" className=" text-4xl">
//                   밥 추가
//                 </label>
//               </div>
//               <div className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   id="noodle"
//                   {...register("options.noodle")}
//                   className="transform scale-150"
//                 />
//                 <label htmlFor="noodle" className=" text-4xl">
//                   면 추가
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="btn btn-primary min-w-52 h-16 mt-5 p-2 text-white rounded"
//             >
//               제출
//             </button>
//           </div>
//         </form>
//       </div>
//     </Navbar>
//   );
// }

// export default MenuRegister;

import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { ChangeEvent, useState } from "react";
import fileUploadIcon from "../assets/fileUploadIcon.svg";
import { CustomButton } from "./Notice/CustomButton";
// import { CustomButton } from "./CustomButton";

function MenuRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Navbar>
      <div className="flex flex-col items-center py-12">
        {/* <p className="text-6xl font-bold text-center mb-10">
          메뉴를 등록해볼까요?
        </p> */}
        {/* <form
          className="flex flex-col w-full max-w-4xl gap-6 p-6 bg-white shadow-md rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        > */}
        <form
          className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-6 border rounded-lg shadow-lg bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* 헤더 */}
          <div className="text-center">
            <p className="font-bold text-4xl text-gray-800">
              {" "}
              메뉴를 등록해볼까요?
            </p>
            <p className="text-lg text-gray-500 mt-2">
              필요한 정보를 입력하고 등록하세요.
            </p>
          </div>
          {/* 메뉴 이름 */}
          <div className="flex flex-col gap-3">
            <label className="text-2xl font-semibold">메뉴 이름</label>
            <input
              className="p-4 border border-gray-300 rounded-lg text-lg"
              {...register("title", {
                required: "메뉴 이름을 작성해주세요..!",
              })}
              placeholder="메뉴 이름을 입력하세요"
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* 메뉴 이미지 */}
          <div className="flex flex-col gap-3">
            <label className="text-2xl font-semibold">메뉴 이미지 첨부</label>
            <div className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
              <label
                htmlFor="image"
                className="flex flex-col items-center cursor-pointer"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="미리보기"
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={fileUploadIcon}
                    alt="파일 업로드 아이콘"
                    className="w-12 h-12 mb-2"
                  />
                )}
                <span className="text-gray-500">이미지 업로드</span>
                <input
                  className="hidden"
                  {...register("image", {
                    required: "대표 이미지를 첨부하세요..!",
                  })}
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            {errors.image && (
              <p className="text-sm text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* 메뉴 설명 */}
          <div className="flex flex-col gap-3">
            <label className="text-2xl font-semibold">메뉴 설명</label>
            <textarea
              className="p-4 border border-gray-300 rounded-lg text-lg"
              {...register("description")}
              placeholder="메뉴에 대한 설명을 입력하세요"
              rows={4}
            ></textarea>
          </div>

          {/* 메뉴 옵션 */}
          <div className="flex flex-col gap-3">
            <label className="text-2xl font-semibold">메뉴 옵션</label>
            <div className="grid grid-cols-2 gap-4">
              {["곱빼기", "밥 추가", "면 추가"].map((option, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg"
                >
                  <input
                    type="checkbox"
                    id={option}
                    {...register(`options.${option}`)}
                    className="w-6 h-6"
                  />
                  <label htmlFor={option} className="text-lg">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* 제출 버튼 */}
          <div className="flex justify-center mt-6">
            <CustomButton title="메뉴 등록하기" />
          </div>
        </form>
      </div>
    </Navbar>
  );
}

export default MenuRegister;
