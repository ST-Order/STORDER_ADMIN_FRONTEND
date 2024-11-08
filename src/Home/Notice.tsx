import Navbar from "./Navbar";
import { ChangeEvent, useState } from "react";

import fileUploadIcon from "../assets/fileUploadIcon.svg";
import { useForm } from "react-hook-form";
import Button from "./Button";

function Notice() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState<string | null>(null); // 상태 타입 정의

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // 업로드된 이미지 미리보기 설정
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Navbar>
      <div className="flex justify-center h-full overflow-y-auto">
        <form
          className="flex flex-col gap-9 py-20 mx-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <span className="font-bold text-6xl">공지사항</span>
            <span className="text-5xl">을 등록해볼까요 ?</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex">
              <div className="text-4xl">제목</div>

              {errors.title?.message && (
                <p className="ml-5 text-red-500">
                  {errors.title.message.toString()}
                </p>
              )}
            </div>
            <input
              className="p-6 text-center bg-[#d9d9d9] text-3xl text-[#959595]"
              {...register("title", {
                required: "메뉴 이름을 작성해주세요..!",
              })}
              placeholder="메뉴 이름"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline">
              <div className=" text-4xl">이미지 첨부</div>
              {errors.image && (
                <p className="ml-5 text-red-500">
                  {errors.image.message?.toString()}
                </p>
              )}
            </div>
            <div className="flex items-center w-48 h-48 gap-2.5 p-10 rounded-[5px] bg-[#edebeb] border-[10px] border-black border-dashed">
              <label
                htmlFor="image"
                className="flex flex-col cursor-pointer h-full w-full"
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="업로드된 이미지 미리보기" />
                ) : (
                  <img
                    src={fileUploadIcon}
                    alt="파일 업로드 아이콘"
                    className="p-4"
                  />
                )}
                <input
                  className="bg-[#d9d9d9] border border-black hidden"
                  {...register("image", {
                    required: "대표 이미지를 첨부하세요..!",
                  })}
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange} // 파일 선택 시 호출되는 함수
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" text-4xl">메뉴 설명</div>
            <input
              className="p-6 text-center bg-[#d9d9d9] text-3xl text-[#959595]"
              {...register("description")}
              placeholder="메뉴에 대한 간단한 설명이나 재료, 맛 등을 알려주세요 !"
            />
          </div>
          <div className="flex justify-evenly">
            <Button link="" text="제출하기" color="#B90005" />
            <Button link="" text="취소" />
          </div>
        </form>
      </div>
    </Navbar>
  );
}

export default Notice;
