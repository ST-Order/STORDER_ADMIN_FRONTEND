import { ChangeEvent } from "react";

interface InputFieldProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon: string;
  height: string; // height prop 추가
  autoFocus?: boolean;
}

function InputField({
  type,
  value,
  placeholder,
  onChange,
  icon,
  height, // height 받기
  autoFocus = false,
}: InputFieldProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoFocus={autoFocus}
      required
      className="pl-16 text-xl flex items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[20px] bg-[#e9e9e9]/60"
      style={{
        backgroundImage: `url(${icon})`,
        backgroundSize: "35px",
        backgroundPosition: "20px center",
        backgroundRepeat: "no-repeat",
        height: height, // height 적용
      }}
    />
  );
}

export default InputField;
