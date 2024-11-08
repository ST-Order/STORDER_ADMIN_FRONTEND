import { useNavigate } from "react-router-dom";

interface ButtonProps {
  link: string;
  text: string;
  color?: string;
}

export default function Button({ link, text, color }: ButtonProps) {
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav(link);
      }}
      className={`flex cursor-pointer justify-center items-center w-[515px] h-[100px] px-[62px] py-[26px] rounded-[15px] bg-[${
        color || "#435fff"
      }] text-[40px] font-bold text-white`}
    >
      {text}
    </div>
  );
}
