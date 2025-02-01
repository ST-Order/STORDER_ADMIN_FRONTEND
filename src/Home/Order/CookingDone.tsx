// import CookingDoneItem from "./CookingDoneItem";
import { useOrders } from "./OrderContext";

export default function CookingDone() {
  const { orders } = useOrders();
  const completedOrders = orders.filter((order) => order.status === "DONE");

  return (
    <div className="w-full overflow-y-auto flex-grow">
      {completedOrders.map((order) => (
        <div
          key={order.id}
          className="flex items-center justify-between p-4 border-b"
        >
          <div>
            <p>주문시간: {order.time}</p>
            <p>메뉴: {order.menu}</p>
          </div>
          <span className="text-gray-500">완료됨</span>
        </div>
      ))}
    </div>
  );
}
