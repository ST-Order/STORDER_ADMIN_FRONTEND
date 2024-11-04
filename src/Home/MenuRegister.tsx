import { useForm } from "react-hook-form";
import Navbar from "./Home/Navbar";
import { ChangeEvent, useState } from "react";
import fileUploadIcon from "./assets/fileUploadIcon.svg";

function MenuRegister() {
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
      <form
        className="flex flex-col max-w-[1200px] gap-9 py-20 mx-12 h-full "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex text-6xl">
          <div className=" font-bold">메뉴판</div>
          <p>을 만들어볼까요 ?</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline">
            <div className=" text-4xl">메뉴 이름</div>

            {errors.title?.message && (
              <p className="ml-5 text-red-500">
                {errors.title.message.toString()}
              </p>
            )}
          </div>
          <input
            className="px-[33px] py-7 text-center bg-[#d9d9d9] text-4xl text-[#959595]"
            {...register("title", { required: "메뉴 이름을 작성해주세요..!" })}
            placeholder="메뉴 이름"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline">
            <div className=" text-4xl">메뉴 이미지 첨부</div>{" "}
            {errors.image && (
              <p className="ml-5 text-red-500">
                {errors.image.message?.toString()}
              </p>
            )}
          </div>
          <div className="flex items-center w-56 h-56 gap-2.5 p-10 rounded-[5px] bg-[#edebeb] border-[10px] border-black border-dashed">
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
          </div>{" "}
        </div>{" "}
        <div className="flex flex-col gap-3">
          <div className=" text-4xl">메뉴 설명</div>{" "}
          <input
            className="px-[33px] py-7 text-center bg-[#d9d9d9] text-4xl text-[#959595]"
            {...register("description")}
            placeholder="메뉴에 대한 간단한 설명이나 재료, 맛 등을 알려주세요 !"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className=" text-4xl flex gap-5 items-end">
            메뉴 옵션
            <p className="text-[32px] text-[#959595]">
              해당 메뉴에 해당되는 옵션을 골라주세요 !
            </p>
          </div>
          <div className="flex items-center gap-20">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="gobbaegi"
                {...register("options.gobbaegi")}
              />
              <label htmlFor="gobbaegi" className=" text-4xl">
                곱빼기
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="rice" {...register("options.rice")} />
              <label htmlFor="rice" className=" text-4xl">
                밥 추가
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="noodle"
                {...register("options.noodle")}
              />
              <label htmlFor="noodle" className=" text-4xl">
                면 추가
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary min-w-52 h-16 mt-5 p-2 text-white rounded"
          >
            제출
          </button>
        </div>{" "}
      </form>
      {/* </div> */}
    </Navbar>
  );
}

export default MenuRegister;
