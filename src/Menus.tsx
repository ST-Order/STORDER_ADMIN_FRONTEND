import React from "react";
interface Props {
  icon: any;
  title: string;
}

export default function Menus({ icon, title }: Props) {
  return (
    <div className="flex flex-col justify-center h-[353px] items-center relative">
      <img src={icon} className="w-40 h-40 object-cover" />
      <p className="text-[40px] text-center text-black">{title}</p>
    </div>
  );
}
