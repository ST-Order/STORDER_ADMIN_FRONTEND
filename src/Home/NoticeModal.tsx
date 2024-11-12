import React from "react";

interface NoticeModalProps {
  isOpen: boolean; // 모달의 열림 여부
  onClose: () => void; // 모달을 닫는 함수
  content: string | null; // 공지사항 내용
}

function NoticeModal({ isOpen, onClose, content }: NoticeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-xl font-bold">공지사항 내용</h2>
        <p>{content}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default NoticeModal;
