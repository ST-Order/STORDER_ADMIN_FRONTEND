import InCookingItem from "./InCookingItem";

export default function InCooking() {
  return (
    <div className="w-full overflow-y-auto flex-grow">
      <InCookingItem
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
      />
    </div>
  );
}
