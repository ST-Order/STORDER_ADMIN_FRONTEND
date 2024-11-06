import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";

// 등록한 게시물을 보여주는 페이지



function NoticeList() {
    
  const location = useLocation();
  const noticeData = location.state?.noticeData; // 데이터 존재 여부 확인
  console.log("Received noticeData:", noticeData); // 디버깅용 로그
  return (
    <div>
      <h1>공지사항 목록</h1>
      {noticeData ? (
        <p>입력된 상세 설명: {noticeData}</p>
      ) : (
        <p>등록된 공지사항이 없습니다.</p>
      )}
    </div>
  );
}

export default NoticeList;



