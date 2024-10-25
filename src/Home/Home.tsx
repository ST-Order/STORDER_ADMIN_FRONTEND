import Navbar from "./Navbar";
import Menus from "./Menus";
import menuIcon from "../assets/menuIcon.svg";
import noticeIcon from "../assets/noticeIcon.svg";
import orderIcon from "../assets/orderIcon.svg";
import soldoutIcon from "../assets/soldoutIcon.svg";

import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  return (
    <>
      <Navbar>
        <div className="flex flex-col flex-grow items-center justify-center gap-20 mb-16">
          <div className="flex flex-col justify-start items-center w-[413px] gap-[3px]">
            <div className="flex items-center relative gap-1.5 mt-12">
              <p className="text-[64px] font-bold text-center text-gray">
                바비든든
              </p>
              <p className="text-5xl font-bold text-center text-black">
                사장님
              </p>
            </div>
            <p className="self-stretch w-[413px] text-[55px] font-bold text-center text-black">
              어서오세요 !
            </p>
          </div>
          <div className="flex justify-evenly items-center gap-10 lg:gap-40 py-10 px-[47px] lg:px-20 rounded-[5px] bg-white border-[3px] border-black">
            <Menus
              onClick={() => {
                nav("/order");
              }}
              icon={orderIcon}
              title="주문 처리"
            />
            <Menus
              onClick={() => {
                nav("/menu-update");
              }}
              icon={menuIcon}
              title="메뉴 관리"
            />
            <Menus
              onClick={() => {
                nav("/menu-notice");
              }}
              icon={soldoutIcon}
              title="메뉴 품절"
            />
            <Menus
              onClick={() => {
                nav("/notice");
              }}
              icon={noticeIcon}
              title="공지 올리기"
            />
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Home;
