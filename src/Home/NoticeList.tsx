import Navbar from "./Navbar";
import noticeEx from "./noticeEx.json";
import { useEffect } from "react";

// 등록한 게시물을 보여주는 페이지

function NoticeList() {
  // const location = useLocation();
  // const noticeData = location.state?.noticeData; // 데이터 존재 여부 확인
  // console.log("Received noticeData:", noticeData); // 디버깅용 로그

  useEffect(() => {
    // console.log("NoticeList rendered");
    console.log(noticeEx);
  }, []);

  return (
    <Navbar>
      <div className="flex flex-col justify-center items-center gap-[34px]">
        <p className="text-[64px] font-bold text-center ">공지사항</p>
        <div className="flex flex-col items-start rounded-[5px] border border-black">
          <div className="flex justify-between px-[30px] py-2.5 border-b border-black items-center text-[40px] gap-40">
            <p>1</p>
            <p>공지사항 제목</p>
            <svg
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" w-12 h-12 relative"
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
      </div>
    </Navbar>
  );
}

export default NoticeList;
