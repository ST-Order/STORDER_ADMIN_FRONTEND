// import { useState } from "react";
// import Navbar from "../Navbar";
// import OrderHandling from "./OrderHandling";
// import InCooking from "./InCooking";
// import CookingDone from "./CookingDone";
// import { OrderProvider } from "./OrderContext";
// // import OrderLookup from "./OrderLookup";

// function Order() {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = ["결제 완료", "조리 중", "조리 완료"];

//   const renderContent = () => {
//     switch (activeTab) {
//       case 0:
//         return <OrderHandling />;
//       case 1:
//         return <InCooking />;
//       case 2:
//         return <CookingDone />;
//       // case 3:
//       //   return <OrderLookup />;
//       default:
//         return null;
//     }
//   };
//   return (
//     <OrderProvider>
//       <Navbar>
//         <div>
//           <div></div>
//         </div>
//         <div className="flex flex-col h-full items-center justify-center gap-20 mb-16">
//           <div className="flex flex-col h-full justify-start items-center w-full max-w-screen-xl">
//             <div className="flex w-full">
//               {tabs.map((tab, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setActiveTab(index)}
//                   className={`cursor-pointer flex justify-center items-center flex-grow h-[89px] ${
//                     activeTab === index ? "bg-[#435fff]" : "bg-[#959595]"
//                   } border border-black text-4xl font-bold text-white`}
//                 >
//                   {tab}
//                 </div>
//               ))}
//             </div>
//             {renderContent()}
//             {/* <OrderHandling /> */}
//           </div>
//         </div>
//       </Navbar>
//     </OrderProvider>
//   );
// }

// export default Order;

import { useState } from "react";
import Navbar from "../Navbar";
import OrderHandling from "./OrderHandling";
import InCooking from "./InCooking";
import CookingDone from "./CookingDone";
import { OrderProvider } from "./OrderContext";

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
      default:
        return null;
    }
  };

  return (
    <OrderProvider>
      <Navbar>
        <div className="flex flex-col items-center py-12">
          <div className="text-center mb-10">
            <p className="font-bold text-4xl text-gray-800">주문 관리</p>
            <p className="text-lg text-gray-500 mt-2">
              주문 상태를 확인하고 업데이트하세요.
            </p>
          </div>

          <div className="w-full max-w-screen-xl">
            <div className="flex">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer flex justify-center items-center flex-grow h-[70px] border-b-4 text-lg font-medium ${
                    activeTab === index
                      ? "border-blue-500 text-blue-500"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 border rounded-lg shadow-lg bg-white">
              {renderContent()}
            </div>
          </div>
        </div>
      </Navbar>
    </OrderProvider>
  );
}

export default Order;
