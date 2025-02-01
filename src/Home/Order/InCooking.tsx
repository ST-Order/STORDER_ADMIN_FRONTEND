// // import InCookingItem from "./InCookingItem";
// import { useOrders } from "./OrderContext";

// export default function InCooking() {
//   const { orders, handleCompleteOrder } = useOrders();
//   const cookingOrders = orders.filter((order) => order.status === "COOKING");

//   return (
//     <div className="w-full overflow-y-auto flex-grow">
//       {cookingOrders.map((order) => (
//         <div
//           key={order.id}
//           className="flex items-center justify-between p-4 border-b"
//         >
//           <div>
//             <p>주문시간: {order.time}</p>
//             <p>메뉴: {order.menu}</p>
//           </div>
//           <button
//             onClick={() => handleCompleteOrder(order.id)}
//             className="bg-green-500 text-white px-4 py-2 rounded"
//           >
//             완료 처리하기
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

import { useState } from "react";
import { CustomButton } from "../Notice/CustomButton";

function InCooking() {
  const [orders, setOrders] = useState([
    { id: 1, name: "짜장면", status: "조리중" },
    { id: 2, name: "탕수육", status: "조리중" },
    { id: 3, name: "짬뽕", status: "조리완료" },
  ]);

  const updateOrderStatus = (id, status) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  return (
    <div className="flex flex-col items-center py-12">
      <div className="text-center mb-10">
        <p className="font-bold text-4xl text-gray-800">주문 관리</p>
        <p className="text-lg text-gray-500 mt-2">
          주문 상태를 확인하고 업데이트하세요.
        </p>
      </div>

      <div className="flex flex-col w-full max-w-4xl gap-6 p-6 border rounded-lg shadow-lg bg-white">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 border border-gray-300 rounded-lg"
          >
            <div className="text-lg font-medium">{order.name}</div>
            <div className="flex items-center gap-4">
              <span
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  order.status === "조리완료"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {order.status}
              </span>
              {order.status !== "조리완료" && (
                <CustomButton
                  title="조리완료로 변경"
                  onClick={() => updateOrderStatus(order.id, "조리완료")}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InCooking;
