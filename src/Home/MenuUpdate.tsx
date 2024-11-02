import { MenuItem } from "./MenuItem";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function MenuUpdate() {
  const nav = useNavigate();
  return (
    <Navbar>
      <div className="flex flex-col items-center gap-[70px] h-full justify-evenly">
        <div className="flex flex-col items-center self-stretch flex-grow-0 flex-shrink-0 gap-[34px]">
          <div className="flex items-center text-[64px] font-bold text-black">
            메뉴
          </div>
          <div className="flex items-start  flex-shrink-0 w-[633px] gap-11 rounded-[5px]">
            <MenuItem title="삼겹덮밥" image="" />
          </div>
        </div>
        <div
          onClick={() => {
            nav("/menu-update/register");
          }}
          className="flex cursor-pointer justify-center items-center w-[515px] h-[100px] px-[62px] py-[26px] rounded-[15px] bg-[#435fff] text-[40px] font-bold text-white"
        >
          메뉴 등록하기
        </div>
      </div>
    </Navbar>
  );
}

export default MenuUpdate;
