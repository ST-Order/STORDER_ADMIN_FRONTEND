import { OrderItem } from "./../../OrderItem";
import React from "react";
import Navbar from "./Navbar";

function Order() {
  return (
    <Navbar>
      <div className="flex flex-col justify-start items-center w-full gap-[23px]">
        <div className="flex justify-start items-center gap-px">
          <div className="cursor-pointer flex justify-center items-center w-[360px] h-[89px] relative bg-[#435fff]  border border-black text-5xl font-bold text-left text-white">
            결제 완료
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[360px] h-[89px] relative bg-[#959595] border border-black text-5xl font-bold text-left text-white">
            조리 중
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[360px] h-[89px] relative bg-[#959595] border border-black text-5xl font-bold text-left text-white">
            조리 완료
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[360px] h-[89px] relative bg-[#959595] border border-black text-5xl font-bold text-left text-white">
            주문 조회
          </div>
          {/* <div className="flex justify-center items-center w-[360px] h-[89px] relative px-[91px] py-[15px] bg-[#959595] border border-black">
<p className="text-5xl font-bold text-left text-white">
주문 조회
</p>
</div> */}
        </div>

        <OrderItem time="10:00" quantity="2" menu="삼겹덮밥 2" price="10000" />
        <OrderItem
          time="10:00"
          quantity="3"
          menu="삼겹덮밥 2, 참치마요 1"
          price="15500"
        />
        <OrderItem time="10:00" quantity="1" menu="삼겹덮밥 1" price="5500" />

        <OrderItem
          time="10:00"
          quantity="1"
          menu=" 삼겹덮밥 1 | 밥 추가"
          price="6500"
        />
        {/* <div className="flex justify-start items-center relative gap-[313px] p-5 border border-black">
          <p className="text-5xl font-bold text-left text-black">00:00</p>
          <div className="flex flex-col justify-start items-start w-[373px] relative gap-2.5">
            <p className="w-[450px] text-[40px] font-bold text-left text-black">
              [메뉴3개] 15,500원{" "}
            </p>
            <p className="w-[500px] text-[32px] font-bold text-left text-[#959595]">
              삼겹덮밥 2, 참치마요 1
            </p>
          </div>
          <div className="flex justify-center items-center w-[170px] h-[170px] relative gap-2.5 px-[91px] py-[15px] rounded-[10px] bg-[#b90005] border border-black">
            <p className="text-[40px] font-bold text-center text-white">
              접수하기
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center relative gap-[313px] p-5 border border-black">
          <p className="text-5xl font-bold text-left text-black">00:00</p>
          <div className="flex flex-col justify-start items-start w-[373px] relative gap-2.5">
            <p className="w-[450px] text-[40px] font-bold text-left text-black">
              [메뉴 1개] 5,500원{" "}
            </p>
            <p className="w-[500px] text-[32px] font-bold text-left text-[#959595]">
              삼겹덮밥 1
            </p>
          </div>
          <div className="flex justify-center items-center w-[170px] h-[170px] relative gap-2.5 px-[91px] py-[15px] rounded-[10px] bg-[#b90005] border border-black">
            <p className="text-[40px] font-bold text-center text-white">
              접수하기
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center relative gap-[313px] p-5 border border-black">
          <p className="text-5xl font-bold text-left text-black">00:00</p>
          <div className="flex flex-col justify-start items-start w-[373px] relative gap-2.5">
            <p className="w-[450px] text-[40px] font-bold text-left text-black">
              [메뉴 1개] 6,500원{" "}
            </p>
            <p className="w-[500px] text-[32px] font-bold text-left text-[#959595]">
              삼겹덮밥 1 | 밥 추가
            </p>
          </div>
          <div className="flex justify-center items-center w-[170px] h-[170px] relative gap-2.5 px-[91px] py-[15px] rounded-[10px] bg-[#b90005] border border-black">
            <p className="text-[40px] font-bold text-center text-white">
              접수하기
            </p>
          </div>
        </div> */}
      </div>
    </Navbar>
  );
}

export default Order;
