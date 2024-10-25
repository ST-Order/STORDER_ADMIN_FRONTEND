import { OrderItem } from "../OrderItem";
import React from "react";
import Navbar from "./Navbar";

function Order() {
  return (
    <Navbar>
      <div className="flex flex-col h-full items-center justify-center gap-20 mb-16">
        <div className="flex flex-col h-full justify-start items-center w-full max-w-screen-xl">
          <div className="flex w-full">
            <div className="cursor-pointer flex justify-center items-center flex-grow h-[89px] bg-[#435fff] border border-black text-4xl font-bold text-white">
              결제 완료
            </div>
            <div className="cursor-pointer flex justify-center items-center flex-grow h-[89px] bg-[#959595] border border-black text-4xl font-bold text-white">
              조리 중
            </div>
            <div className="cursor-pointer flex justify-center items-center flex-grow h-[89px] bg-[#959595] border border-black text-4xl font-bold text-white">
              조리 완료
            </div>
            <div className="cursor-pointer flex justify-center items-center flex-grow h-[89px] bg-[#959595] border border-black text-4xl font-bold text-white">
              주문 조회
            </div>
          </div>{" "}
          <div className="w-full overflow-y-auto flex-grow">
            <OrderItem
              time="10:00"
              quantity="2"
              menu="삼겹덮밥 2"
              price="10000"
            />
            <OrderItem
              time="10:00"
              quantity="3"
              menu="삼겹덮밥 2, 참치마요 1"
              price="15500"
            />
            <OrderItem
              time="10:00"
              quantity="1"
              menu="삼겹덮밥 1"
              price="5500"
            />

            <OrderItem
              time="10:00"
              quantity="1"
              menu=" 삼겹덮밥 1 | 밥 추가"
              price="6500"
            />
            <OrderItem
              time="10:00"
              quantity="1"
              menu=" 삼겹덮밥 1 | 밥 추가"
              price="6500"
            />
            <OrderItem
              time="10:00"
              quantity="1"
              menu=" 삼겹덮밥 1 | 밥 추가"
              price="6500"
            />
            <OrderItem
              time="10:00"
              quantity="1"
              menu=" 삼겹덮밥 1 | 밥 추가"
              price="6500"
            />
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default Order;
