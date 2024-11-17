// import InCookingItem from "./InCookingItem";
import { useOrders } from "./OrderContext";

export default function InCooking() {
  const { orders, handleCompleteOrder } = useOrders();
  const cookingOrders = orders.filter((order) => order.status === "COOKING");

  return (
    <div className="w-full overflow-y-auto flex-grow">
      {/* <InCookingItem
        time="10:00"
        quantity="2"
        menu="삼겹덮밥 2"
        price="10000"
      />
      <InCookingItem
        time="10:00"
        quantity="3"
        menu="삼겹덮밥 2, 참치마요 1"
        price="15500"
      />
      <InCookingItem time="10:00" quantity="1" menu="삼겹덮밥 1" price="5500" />
      <InCookingItem
        time="10:00"
        quantity="1"
        menu=" 삼겹덮밥 1 | 밥 추가"
        price="6500"
      />
      <InCookingItem
        time="10:00"
        quantity="1"
        menu=" 삼겹덮밥 1 | 밥 추가"
        price="6500"
      />
      <InCookingItem
        time="10:00"
        quantity="1"
        menu=" 삼겹덮밥 1 | 밥 추가"
        price="6500"
      />
      <InCookingItem
        time="10:00"
        quantity="1"
        menu=" 삼겹덮밥 1 | 밥 추가"
        price="6500"
      /> */}

      {cookingOrders.map((order) => (
        <div
          key={order.id}
          className="flex items-center justify-between p-4 border-b"
        >
          <div>
            <p>주문시간: {order.time}</p>
            <p>수량: {order.quantity}</p>
            <p>메뉴: {order.menu}</p>
            <p>가격: {order.price}원</p>
          </div>
          <button
            onClick={() => handleCompleteOrder(order.id)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            완료 처리하기
          </button>
        </div>
      ))}
    </div>
  );
}
