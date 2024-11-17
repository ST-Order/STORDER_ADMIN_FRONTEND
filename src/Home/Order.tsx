import { useState } from "react";
import Navbar from "./Navbar";
import OrderHandling from "./OrderHandling";
import InCooking from "./InCooking";
import CookingDone from "./CookingDone";
import { OrderProvider } from "./OrderContext";
// import OrderLookup from "./OrderLookup";

function Order() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["결제 완료", "조리 중", "조리 완료"];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <OrderHandling />;
      case 1:
        return <InCooking />;
      case 2:
        return <CookingDone />;
      // case 3:
      //   return <OrderLookup />;
      default:
        return null;
    }
  };
  return (
    <OrderProvider>
      <Navbar>
        <div>
          <div></div>
        </div>
        <div className="flex flex-col h-full items-center justify-center gap-20 mb-16">
          <div className="flex flex-col h-full justify-start items-center w-full max-w-screen-xl">
            <div className="flex w-full">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer flex justify-center items-center flex-grow h-[89px] ${
                    activeTab === index ? "bg-[#435fff]" : "bg-[#959595]"
                  } border border-black text-4xl font-bold text-white`}
                >
                  {tab}
                </div>
              ))}
              {/* <div className="cursor-pointer flex justify-center items-center flex-grow h-[89px] bg-[#435fff] border border-black text-4xl font-bold text-white">
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
              </div> */}
            </div>
            {renderContent()}
            {/* <OrderHandling /> */}
          </div>
        </div>
      </Navbar>
    </OrderProvider>
  );
}

export default Order;
