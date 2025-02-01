import Navbar from "../Navbar";
import { ChangeEvent, useState } from "react";
import fileUploadIcon from "../../assets/fileUploadIcon.svg";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { CustomButton } from "./CustomButton";

function NoticeRegister() {
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
      <div className="flex justify-center h-full overflow-y-auto p-4">
        <form
          className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-6 border rounded-lg shadow-lg bg-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* 헤더 */}
          <div className="text-center">
            <p className="font-bold text-4xl text-gray-800">공지사항 등록</p>
            <p className="text-lg text-gray-500 mt-2">
              필요한 정보를 입력하고 등록하세요.
            </p>
          </div>

          {/* 제목 입력 */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium text-gray-700">
              제목
              {errors.title && (
                <span className="ml-2 text-red-500 text-sm">
                  {errors.title.message.toString()}
                </span>
              )}
            </label>
            <input
              className="p-3 text-lg bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("title", {
                required: "제목을 입력하세요.",
              })}
              placeholder="공지사항 제목"
            />
          </div>

          {/* 이미지 첨부 */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium text-gray-700">
              이미지 첨부
              {errors.image && (
                <span className="ml-2 text-red-500 text-sm">
                  {errors.image.message?.toString()}
                </span>
              )}
            </label>
            <div className="w-48 h-48 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center relative">
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center cursor-pointer w-full h-full"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="업로드된 이미지 미리보기"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={fileUploadIcon}
                    alt="파일 업로드 아이콘"
                    className="w-12 h-12"
                  />
                )}
                <input
                  className="hidden"
                  {...register("image", {
                    required: "이미지를 첨부해주세요.",
                  })}
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          {/* 메뉴 설명 */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-medium text-gray-700">설명</label>
            <textarea
              className="p-3 text-lg bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={4}
              {...register("description")}
              placeholder="공지사항 내용을 입력하세요."
            />
          </div>

          {/* 버튼 */}
          <div className="flex gap-4 justify-center mt-6">
            <CustomButton title="제출하기" />
            <CustomButton title="취소" />
          </div>
        </form>
      </div>
    </Navbar>
  );
}

// function NoticeRegister() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [imagePreview, setImagePreview] = useState<string | null>(null);

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <Navbar>
//       <div className="flex justify-center h-full overflow-y-auto p-4">
//         <form
//           className="flex flex-col gap-6 md:gap-9 w-full max-w-4xl mx-auto px-4 md:px-12"
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div className="text-center md:text-left">
//             <span className="font-bold text-3xl md:text-6xl">공지사항</span>
//             <span className="text-2xl md:text-5xl">을 등록해볼까요 ?</span>
//           </div>

//           <div className="flex flex-col gap-2 md:gap-3">
//             <div className="flex items-center">
//               <div className="text-2xl md:text-4xl">제목</div>
//               {errors.title?.message && (
//                 <p className="ml-3 md:ml-5 text-red-500 text-sm md:text-base">
//                   {errors.title.message.toString()}
//                 </p>
//               )}
//             </div>
//             <input
//               className="p-3 md:p-6 text-center bg-[#d9d9d9] text-xl md:text-3xl text-[#959595] rounded"
//               {...register("title", {
//                 required: "메뉴 이름을 작성해주세요..!",
//               })}
//               placeholder="메뉴 이름"
//             />
//           </div>

//           <div className="flex flex-col gap-2 md:gap-3">
//             <div className="flex items-baseline">
//               <div className="text-2xl md:text-4xl">이미지 첨부</div>
//               {errors.image && (
//                 <p className="ml-3 md:ml-5 text-red-500 text-sm md:text-base">
//                   {errors.image.message?.toString()}
//                 </p>
//               )}
//             </div>
//             <div className="flex items-center w-32 h-32 md:w-48 md:h-48 gap-2.5 p-6 md:p-10 rounded-[5px] bg-[#edebeb] border-[5px] md:border-[10px] border-black border-dashed">
//               <label
//                 htmlFor="image"
//                 className="flex flex-col cursor-pointer h-full w-full"
//               >
//                 {imagePreview ? (
//                   <img
//                     src={imagePreview}
//                     alt="업로드된 이미지 미리보기"
//                     className="h-full w-full object-cover"
//                   />
//                 ) : (
//                   <img
//                     src={fileUploadIcon}
//                     alt="파일 업로드 아이콘"
//                     className="p-2 md:p-4"
//                   />
//                 )}
//                 <input
//                   className="hidden"
//                   {...register("image", {
//                     required: "대표 이미지를 첨부하세요..!",
//                   })}
//                   type="file"
//                   id="image"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//               </label>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2 md:gap-3">
//             <div className="text-2xl md:text-4xl">메뉴 설명</div>
//             <input
//               className="p-3 md:p-6 text-center bg-[#d9d9d9] text-xl md:text-3xl text-[#959595] rounded"
//               {...register("description")}
//               placeholder="메뉴에 대한 간단한 설명이나 재료, 맛 등을 알려주세요 !"
//             />
//           </div>

//           <div className="flex justify-center md:justify-evenly gap-3 md:gap-5 mt-4">
//             <Button link="" text="제출하기" color="#b90005" />
//             <Button link="" text="취소" />
//           </div>
//         </form>
//       </div>
//     </Navbar>
//   );
// }

export default NoticeRegister;
