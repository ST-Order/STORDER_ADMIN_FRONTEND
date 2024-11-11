import Navbar from "./Navbar";
import noticeEx from "./noticeEx.json";
import { useEffect } from "react";

// 등록한 게시물을 보여주는 페이지
function NoticeList() {
  useEffect(() => {
    // 콘솔로 데이터를 확인
    console.log("Notice Data:", noticeEx.data);
  }, []);

  return (
    <Navbar>
      <div className="flex flex-col justify-center items-center gap-[34px] max-h-[600px] overflow-y-scroll ">
        <p className="text-[64px] font-bold text-center">공지사항</p>

        {/* 스크롤이 가능한 리스트 영역 */}

        <div className="flex flex-col items-start  border border-gray-300 rounded-md p-4">
          {noticeEx.data.map((notice, index) => (
            <div
              key={notice.id} // 각 공지사항의 고유 ID를 key로 사용
              className="flex flex-col items-start rounded-[5px] border border-black mb-4 w-full"
            >
              <div className="flex justify-between px-[30px] py-2.5 border-b border-black items-center text-[35px] gap-40">
                <p>{index + 1}</p> {/* 번호 표시 */}
                <p>{notice.title}</p> {/* 공지사항 제목 표시 */}
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M12 36L36 12M12 12L36 36"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Navbar>
  );
}

export default NoticeList;
