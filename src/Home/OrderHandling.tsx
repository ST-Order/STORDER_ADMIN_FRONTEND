import { OrderItem } from "./OrderItem";
export default function OrderHandling() {
  return (
    <div className="w-full overflow-y-auto flex-grow">
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
  );
}
