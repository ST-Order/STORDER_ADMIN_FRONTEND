import React from "react";
import { useNavigate } from "react-router-dom";
interface CustomButtonProps {
  title: string;
  link: string;
}

export function CustomButton({ title, link }: CustomButtonProps) {
  const nav = useNavigate();

  return (
    <div
      onClick={() => nav(link)}
      className="cursor-pointer text-3xl text-white font-bold px-20 py-6 rounded-2xl bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-lg transform hover:scale-105"
    >
      {title}
    </div>
  );
}
