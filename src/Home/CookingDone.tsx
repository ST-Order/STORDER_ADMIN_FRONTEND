// import CookingDoneItem from "./CookingDoneItem";
import { useOrders } from "./OrderContext";

export default function CookingDone() {
  const { orders } = useOrders();
  const completedOrders = orders.filter((order) => order.status === "DONE");

  return (
    <div className="w-full overflow-y-auto flex-grow">
      {/* <CookingDoneItem
        time="10:00"
        quantity="2"
        menu="삼겹덮밥 2"
        price="10000"
      />
      <CookingDoneItem
        time="10:00"
        quantity="3"
        menu="삼겹덮밥 2, 참치마요 1"
        price="15500"
      />
      <CookingDoneItem
        time="10:00"
        quantity="1"
        menu="삼겹덮밥 1"
        price="5500"
      />
      <CookingDoneItem
        time="10:00"
        quantity="1"
        menu=" 삼겹덮밥 1 | 밥 추가"
        price="6500"
      />
      <CookingDoneItem
        time="10:00"
        quantity="1"
        menu=" 삼겹덮밥 1 | 밥 추가"
        price="6500"
      />
      <CookingDoneItem
        time="10:00"
        quantity="1"
        menu=" 삼겹덮밥 1 | 밥 추가"
        price="6500"
      />
      <CookingDoneItem
        time="10:00"
        quantity="1"
        menu=" 삼겹덮밥 1 | 밥 추가"
        price="6500"
      /> */}

      {completedOrders.map((order) => (
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
          <span className="text-gray-500">완료됨</span>
        </div>
      ))}
    </div>
  );
}
