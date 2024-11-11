import Button from "./Button";
import { MenuItem } from "./MenuItem";
import Navbar from "./Navbar";

function MenuUpdate() {
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
        <Button link={"/menu-update/register"} text="메뉴 등록하기" />
      </div>
    </Navbar>
  );
}

export default MenuUpdate;
