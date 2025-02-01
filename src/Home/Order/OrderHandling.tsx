// import React, { useState, useEffect } from "react";
// import { orderApi } from "./orderApi";
// import { Order, MenuItem } from "../types";

// const OrderHandling: React.FC = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchOrders = async () => {
//     try {
//       setIsLoading(true);
//       const data = await orderApi.getStoreOrders();
//       setOrders(data); // data는 이미 Order[] 타입
//       setError(null);
//     } catch (error) {
//       setError(
//         error instanceof Error
//           ? error.message
//           : "주문 목록을 불러오는데 실패했습니다."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleAcceptOrder = async (orderId: number) => {
//     try {
//       setIsLoading(true);
//       const updatedOrders = await orderApi.acceptOrder(orderId);
//       setOrders(updatedOrders);
//       setError(null);
//     } catch (error) {
//       setError(
//         error instanceof Error
//           ? error.message
//           : "주문 접수 처리에 실패했습니다."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderMenuItems = (menus: MenuItem[]) => (
//     <div className="space-y-2">
//       {menus.map((menu, index) => (
//         <div key={index} className="pl-4">
//           <p className="font-medium">
//             {menu.menu_name} x {menu.quantity}
//           </p>
//           {menu.menu_option.length > 0 && (
//             <p className="text-sm text-gray-600">
//               옵션: {menu.menu_option.join(", ")}
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );

//   if (isLoading && orders.length === 0) {
//     return <div className="w-full p-4 text-center">로딩 중...</div>;
//   }

//   if (error) {
//     return (
//       <div className="w-full p-4 text-center text-red-500">
//         {error}
//         <button onClick={fetchOrders} className="ml-2 underline">
//           다시 시도
//         </button>
//       </div>
//     );
//   }

//   const pendingOrders = orders.filter((order) => order.status === "Pending");

//   return (
//     <div className="w-full overflow-y-auto flex-grow">
//       <div className="p-4 bg-gray-100 border-b">
//         <h2 className="text-xl font-bold">주문 관리</h2>
//       </div>

//       {pendingOrders.length === 0 ? (
//         <div className="text-center p-4 text-gray-500">
//           대기 중인 주문이 없습니다.
//         </div>
//       ) : (
//         pendingOrders.map((order) => (
//           <div
//             key={order.order_id}
//             className="flex items-center justify-between p-4 border-b hover:bg-gray-50"
//           >
//             <div className="flex-1">
//               <div className="flex justify-between items-start mb-2">
//                 <p className="font-bold">주문번호: {order.order_id}</p>
//                 <p className="text-gray-600">
//                   {new Date(order.created_at).toLocaleString("ko-KR")}
//                 </p>
//               </div>
//               {renderMenuItems(order.menus)}
//             </div>
//             <div className="ml-4">
//               <button
//                 onClick={() => handleAcceptOrder(order.order_id)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
//                 disabled={isLoading}
//               >
//                 접수하기
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default OrderHandling;

import React, { useState, useEffect } from "react";
import { orderApi } from "./orderApi";
import { Order, MenuItem } from "../types";

const OrderHandling: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const data = await orderApi.getStoreOrders();
      setOrders(data);
      setError(null);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "주문 목록을 불러오는데 실패했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleAcceptOrder = async (orderId: number) => {
    try {
      setIsLoading(true);
      const updatedOrders = await orderApi.acceptOrder(orderId);
      setOrders(updatedOrders);
      setError(null);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "주문 접수 처리에 실패했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const renderMenuItems = (menus: MenuItem[]) => (
    <div className="space-y-2">
      {menus.map((menu, index) => (
        <div key={index} className="pl-4">
          <p className="font-medium">
            {menu.menu_name} x {menu.quantity}
          </p>
          {menu.menu_option.length > 0 && (
            <p className="text-sm text-gray-600">
              옵션: {menu.menu_option.join(", ")}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  if (isLoading && orders.length === 0) {
    return (
      <div className="w-full p-4 text-center">
        <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full text-blue-500"></div>
        <p className="mt-4 text-gray-500">로딩 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-4 text-center text-red-500">
        {error}
        <button
          onClick={fetchOrders}
          className="ml-2 text-blue-500 underline hover:text-blue-600"
        >
          다시 시도
        </button>
      </div>
    );
  }

  const pendingOrders = orders.filter((order) => order.status === "Pending");

  return (
    <div className="w-full overflow-y-auto flex-grow">
      {pendingOrders.length === 0 ? (
        <div className="text-center p-6 text-gray-500">
          대기 중인 주문이 없습니다.
        </div>
      ) : (
        <div className="p-6 space-y-4">
          {pendingOrders.map((order) => (
            <div
              key={order.order_id}
              className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-lg">
                    주문번호: {order.order_id}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.created_at).toLocaleString("ko-KR")}
                  </p>
                </div>
                {renderMenuItems(order.menus)}
              </div>
              <span
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  order.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {order.status}
              </span>
              <div className="ml-4">
                <button
                  onClick={() => handleAcceptOrder(order.order_id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
                  disabled={isLoading}
                >
                  접수하기
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHandling;
