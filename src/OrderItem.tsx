import React from "react";
interface Props {
  time: string;
  quantity: string;
  menu: string;
  price: string;
}

export function OrderItem({ time, quantity, menu, price }: Props) {
  return (
    <div className="flex justify-start items-center    gap-[313px] p-5 border border-black">
      <p className="  text-5xl font-bold text-left text-black">{time}</p>
      <div className="flex flex-col justify-start items-start w-[373px]  gap-2.5">
        <p className="  w-[450px] text-[40px] font-bold text-left text-black">
          [메뉴 {quantity}개] {price}원{" "}
        </p>
        <p className="  w-[500px] text-[32px] font-bold text-left text-[#959595]">
          {menu}
        </p>
      </div>
      <div className="flex cursor-pointer justify-center items-center w-[170px] h-[170px] gap-2.5 mx-7 py-[15px] rounded-[10px] bg-[#b90005] border border-black text-[40px] font-bold text-center text-white">
        접수하기
      </div>
    </div>
  );
}
