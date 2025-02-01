import { CustomButton } from "./CustomButton";
import Navbar from "../Navbar";
import noticeEx from "../noticeEx.json";
import { useEffect, useState } from "react";
// import NoticeModal from "./NoticeModal";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

// // 등록한 게시물을 보여주는 페이지
// function NoticeList() {
//   const [notices, setNotices] = useState(noticeEx.data); // 공지사항 데이터를 상태로 관리
//   const [deleteId, setDeleteId] = useState(null); // 삭제 확인 팝업을 위한 상태

//   const nav = useNavigate();

//   useEffect(() => {
//     // 콘솔로 데이터를 확인
//     console.log("Notice Data:", noticeEx.data);
//   }, []);

//   const handleDelete = (id) => {
//     // 삭제 버튼 클릭 시 확인 팝업 표시
//     setDeleteId(id);
//   };

//   const confirmDelete = () => {
//     // 삭제 확인 시 실행
//     setNotices((prevNotices) =>
//       prevNotices.filter((notice) => notice.id !== deleteId)
//     );
//     setDeleteId(null); // 팝업 닫기
//   };

//   const cancelDelete = () => {
//     // 삭제 취소 시 팝업 닫기
//     setDeleteId(null);
//   };

//   return (
//     <Navbar>
//       <div className="flex flex-col justify-center items-center gap-5 mt-2">
//         <p className="text-[64px] font-bold text-center">공지사항</p>

//         {/* 스크롤이 가능한 리스트 영역 */}

//         <div className="flex flex-col items-start border rounded-md p-4 overflow-y-scroll max-h-[600px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {noticeEx.data.length > 0 ? (
//             noticeEx.data.map((notice, index) => (
//               <div
//                 key={notice.id} // 공지사항 고유 ID를 key로 사용
//                 className="flex flex-col items-start border shadow-lg rounded-lg mb-4 w-full"
//               >
//                 <div className="flex flex-col sm:flex-row sm:justify-between p-4 min-w-96">
//                   <p className="sm:w-1/12">{index + 1}</p>
//                   <p className="sm:w-6/12 text-lg font-bold">{notice.title}</p>
//                   <button
//                     onClick={() => handleDelete(notice.id)} // 삭제 버튼 클릭 시 확인 팝업 표시
//                     className="sm:w-2/12 text-red-500 hover:text-red-700 text-right"
//                   >
//                     삭제
//                   </button>
//                   <p className="sm:w-3/12 text-sm text-gray-500 text-right">
//                     {/* {notice.date} */}
//                     111
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">공지사항이 없습니다.</p>
//           )}
//         </div>
//       </div>{" "}
//       <div
//         className="flex flex-col items-center gap-11 text-5xl text-center mt-4"
//         onClick={() => {
//           nav("/notice/register");
//         }}
//       >
//         {/* 공지사항을 추가로 등록하러 갈까요? */}

//         <CustomButton title="공지사항 등록하기" />
//       </div>
//       {/* <div
//         onClick={() => openModal(notice)}
//         className="cursor-pointer hover:bg-gray-100 transition duration-150"
//       >
//         공지사항 내용
//       </div> */}
//       {/* <NoticeModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         content={selectedNotice}
//       /> */}
//       {/* 확인 팝업 */}
//       {deleteId !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <p className="text-lg font-bold mb-4">
//               공지사항을 삭제하시겠습니까?
//             </p>
//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={cancelDelete}
//                 className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
//               >
//                 취소
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//               >
//                 삭제
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </Navbar>
//   );
// }

// export default NoticeList;

function NoticeList() {
  const [notices, setNotices] = useState(noticeEx.data);
  const [deleteId, setDeleteId] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    console.log("Notice Data:", noticeEx.data);
  }, []);

  const handleDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    setNotices((prevNotices) =>
      prevNotices.filter((notice) => notice.id !== deleteId)
    );
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setDeleteId(null);
  };

  return (
    <Navbar>
      {/* <div className="flex flex-col justify-center items-center gap-6 py-6 px-4"> */}
      {/* <p className="text-4xl md:text-6xl font-bold text-center mb-6">
          공지사항
        </p> */}

      <div className="flex flex-col items-center py-12">
        <div className="text-center mb-10">
          <p className="font-bold text-4xl text-gray-800">공지사항</p>
          <p className="text-lg text-gray-500 mt-2">
            현재 등록된 공지사항을 확인하고 추가하세요.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-4xl border rounded-md p-6 bg-gray-100 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {notices.length > 0 ? (
            notices.map((notice, index) => (
              <div
                key={notice.id}
                className="flex items-center justify-between bg-white p-4 mb-4 shadow-lg rounded-lg"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-lg md:text-xl font-bold">
                    {index + 1}. {notice.title}
                  </p>
                  <p className="text-sm text-gray-500">111</p>
                </div>
                <button
                  onClick={() => handleDelete(notice.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiTrash2 className="text-xl md:text-2xl" />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">공지사항이 없습니다.</p>
          )}
        </div>

        <div
          className="mt-6"
          onClick={() => {
            nav("/notice/register");
          }}
        >
          <CustomButton title="공지사항 등록하기" />
        </div>

        {deleteId !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <p className="text-lg font-bold mb-4">
                공지사항을 삭제하시겠습니까?
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                >
                  취소
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Navbar>
  );
}

export default NoticeList;
