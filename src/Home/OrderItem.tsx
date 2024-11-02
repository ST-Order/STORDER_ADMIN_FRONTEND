interface Props {
  time: string;
  quantity: string;
  menu: string;
  price: string;
}

export function OrderItem({ time, quantity, menu, price }: Props) {
  const onClick = () => {
    console.log("clicked");
  };
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-around gap-16 p-5 border-b border-black"
    >
      <p className="text-5xl font-bold text-left text-black">{time}</p>
      <div className="flex flex-col justify-start items-start min-w-80 gap-2.5">
        <p className="text-[40px] font-bold text-left text-black">
          [메뉴 {quantity}개] {price}원{" "}
        </p>
        <p className="text-[32px] font-bold text-left text-[#959595]">{menu}</p>
      </div>
      <div className="flex cursor-pointer justify-center items-center w-40 h-40 gap-2.5 mx-7 py-[15px] rounded-[10px] bg-[#b90005] border border-black text-[40px] font-bold text-center text-white">
        접수하기
      </div>
    </div>
  );
}
