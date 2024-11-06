import { NoticeItem } from "./NoticeItem";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

function Notice() {
  const nav = useNavigate();
  const [data, setData] = useState("");
  
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setData(event.target.value);
  };

  const handleRegister = () => {
    nav("/notice-update/list", { state: { noticeData: data } }); // 정확한 경로로 수정
    console.log(data);
  };
  
  
  
  console.log(data);
  
  return (
    <Navbar>
      <div className="flex flex-col items-center gap-[40px] justify-evenly overflow-auto">
        <div className="flex flex-col items-center self-stretch flex-grow-0 flex-shrink-0 gap-[12px]">
          <div className="flex items-center text-[64px] font-bold text-black">
            공지사항
            <div id="inner text" style={{ fontWeight: "lighter" }}>을 등록해볼까요?</div>
          </div>

          <div><p>관련이미지첨부</p></div>
          <div className="flex items-start flex-shrink-0 w-[633px] gap-11 rounded-[5px]">
            <NoticeItem title="공지사항 관련 이미지" image="" />
          </div>

          <label htmlFor="details">상세설명</label>

          <div className="w-[1023px] h-[139px] px-[33px] py-[25px] bg-[#D9D9D9] text-[40px] font-bold text-white">
            <textarea
              value={data}              // data 값을 textarea에 바인딩
              onChange={onChange}        // onChange 이벤트 핸들러 설정
              id="details"
              placeholder="손님들에게 알려야 하는 정보를 등록해주세요 !"
              className="w-full h-full bg-transparent border-none outline-none text-black text-sm"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <div
            onClick={() => {
              handleRegister
              nav("/notice-update/list");
              console.log("제출", data);
            }}
            className="flex cursor-pointer justify-center items-center w-[515px] h-[100px] px-[62px] py-[26px] rounded-[15px] bg-[#435fff] text-[40px] font-bold text-white"
          >
            공지사항 등록하기
          </div>

          <div
            onClick={() => {
              window.history.back(); // 이전 페이지로 돌아가기
              console.log("취소", data);
            }}
            className="flex cursor-pointer justify-center items-center w-[515px] h-[100px] px-[62px] py-[26px] rounded-[15px] bg-[#B90005] text-[40px] font-bold text-white"
          >
            취소
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default Notice;
