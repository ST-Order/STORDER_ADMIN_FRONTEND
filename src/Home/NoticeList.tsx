import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";

// 등록한 게시물을 보여주는 페이지

function NoticeList() {
  const location = useLocation();
  const noticeData = location.state?.noticeData; // 데이터 존재 여부 확인
  console.log("Received noticeData:", noticeData); // 디버깅용 로그

  interface Props {
    title: string;
  }

  function NoticeList({ title }: Props) {
    return (
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-[30px] rounded-[5px] border border-black">
        <div className="flex justify-between items-start flex-grow-0 flex-shrink-0 w-[951px] relative py-2.5 border-t-0 border-r-0 border-b border-l-0 border-black">
          <p className="flex-grow-0 flex-shrink-0 text-[40px] text-left text-black">
            1
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-[40px] text-left text-black">
            {title}
          </p>
          <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M12 36L36 12M12 12L36 36"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <Navbar>
      <div className="flex flex-col justify-start items-start w-[1203px] absolute left-[50%] top-[127px] transform -translate-x-[50%] gap-[54px]">
        <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-[34px]">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative w-full">
            <p className="text-[64px] font-bold text-center text-black">
              공지사항
            </p>
          </div>
          <NoticeList title="공지사항 제목"></NoticeList>
        </div>
      </div>

      {/* <div>
        <h1>공지사항 목록</h1>
        {noticeData ? (
        <p>입력된 상세 설명: {noticeData}</p>
      ) : (
        <p>등록된 공지사항이 없습니다.</p>
      )}
      </div> */}
    </Navbar>
  );
}

export default NoticeList;
