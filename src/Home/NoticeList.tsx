import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import NoticeModal from "./NoticeModal";

function NoticeList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  // 하드코딩된 공지사항 목록
  const notices = [
    { title: "공지사항 1", content: "여기에 공지사항 1의 내용이 들어갑니다." },
    { title: "공지사항 2", content: "여기에 공지사항 2의 내용이 들어갑니다." },
    { title: "공지사항 3", content: "여기에 공지사항 3의 내용이 들어갑니다." },
  ];

  const handleTitleClick = (content) => {
    setSelectedNotice(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNotice(null);
  };

  return (
    <Navbar>
      <div className="flex flex-col justify-center items-center gap-[34px]">
        <p className="text-[64px] font-bold text-center">공지사항</p>
        <div className="flex flex-col rounded-[5px] border border-black">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="flex justify-between px-[30px] py-2.5 border-b border-black items-center text-[40px] gap-40"
            >
              <p>{index + 1}</p>
              <p
                onClick={() => handleTitleClick(notice.content)}
                className="cursor-pointer"
              >
                {notice.title}
              </p>
              <svg
                width={48}
                height={48}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
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
          ))}
        </div>
      </div>
      <NoticeModal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={selectedNotice}
      />
    </Navbar>
  );
}

export default NoticeList;
