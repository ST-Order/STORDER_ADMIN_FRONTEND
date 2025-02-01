// import { useEffect } from "react";
// import Button from "./Button";
// import { MenuItem } from "./MenuItem";
// import Navbar from "./Navbar";
// import menuEx from "./menuEx.json";

// function MenuUpdate() {
//   useEffect(() => {
//     // 콘솔로 데이터를 확인
//     console.log("Menu Data:", menuEx.data);
//   }, []);

//   return (
//     <Navbar>
//       <div className="flex flex-col items-center gap-[70px] h-full justify-evenly">
//         <div className="flex flex-col items-center self-stretch flex-grow-0 flex-shrink-0 gap-[34px]">
//           <div className="flex items-center text-[64px] font-bold text-black">
//             메뉴
//           </div>
//           <div className="flex items-start  flex-shrink-0 w-[633px] gap-11 rounded-[5px]">
//             {/* menuEx.data.menus로 접근 */}
//             {menuEx.data.menus.map((menu) => (
//               <MenuItem key={menu.id} title={menu.name} image={menu.imageUrl} />
//             ))}
//           </div>
//         </div>
{
  /* <Button link={"/menu-update/register"} text="메뉴 등록하기" />; */
}
//       </div>
//     </Navbar>
//   );
// }

// export default MenuUpdate;

import { useEffect } from "react";
import Navbar from "./Navbar";
import { MenuItem } from "./MenuItem";
import { CustomButton } from "./Notice/CustomButton";
import menuEx from "./menuEx.json";

function MenuUpdate() {
  useEffect(() => {
    console.log("Menu Data:", menuEx.data);
  }, []);

  return (
    <Navbar>
      <div className="flex flex-col items-center py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <p className="font-bold text-4xl text-gray-800">메뉴</p>
          <p className="text-lg text-gray-500 mt-2">
            현재 등록된 메뉴를 확인하고 추가하세요.
          </p>
        </div>

        {/* Menu Items */}
        <div className="flex flex-wrap justify-center gap-6 p-6 w-full max-w-4xl">
          {menuEx.data.menus.map((menu) => (
            <MenuItem key={menu.id} title={menu.name} image={menu.imageUrl} />
          ))}
        </div>

        {/* Add Menu Button */}
        <CustomButton title="메뉴 등록하기" link="/menu-update/register" />
      </div>
    </Navbar>
  );
}

export default MenuUpdate;
