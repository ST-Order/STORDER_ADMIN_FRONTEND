import { useEffect, useState } from "react";
// import { OrderItem } from "./OrderItem";
// import billList from "./billList.json";
import { useOrders } from "./OrderContext";

// interface BillItem {
//   menu_name: string;
//   quantity: number;
//   price: number;
// }

export default function OrderHandling() {
  const { orders, handleAcceptOrder } = useOrders();
  const pendingOrders = orders.filter((order) => order.status === "PAID");

  // const [bill, setBill] = useState<BillItem[]>([]); // 초기값을 빈 배열로 설정

  // useEffect(() => {
  //   if (billList.data.store_name === "바비든든") {
  //     const billData = billList.data;
  //     console.log(billData);
  //     // setBill(billData);
  //   }
  // }, []); // 처음 렌더링될 때만 실행

  // // bill이 업데이트될 때마다 로그 출력
  // useEffect(() => {
  //   console.log(bill);
  // }, [bill]); // bill이 변경될 때마다 실행

  return (
    <div className="w-full overflow-y-auto flex-grow">
      {/* {bill.map((item, index) => (
        <OrderItem key={index} item={item} />
      ))} */}
      {/* {bill.map((item, index) => {
        const time = data.tim;
        console.log(item);
        return "";
      })} */}
      {/* <OrderItem time="10:00" quantity="2" menu="삼겹덮밥 2" price="10000" />
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
      /> */}

      {pendingOrders.map((order) => (
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
            onClick={() => handleAcceptOrder(order.id)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            접수하기
          </button>
        </div>
      ))}
    </div>
  );
}
