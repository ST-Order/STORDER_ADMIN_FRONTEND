import { ChangeEvent, forwardRef } from "react";

interface InputFieldProps {
  placeholder: string;
  icon: string;
  autoFocus?: boolean;
  // register는 React Hook Form에서 제공하는 register 함수
  register?: any;
  type: string;
  signin?: boolean;
  minlength?: number;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ placeholder, icon, register, type, signin = false, minlength }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        {...register}
        required
        minLength={minlength}
        className={`pl-16 text-xl ${
          signin ? "h-[76px]" : "h-[63px]"
        } rounded-[20px] bg-[#e9e9e9]/60`}
        style={{
          backgroundImage: `url(${icon})`,
          backgroundSize: "35px",
          backgroundPosition: "20px center",
          backgroundRepeat: "no-repeat",
        }}
      />
    );
  }
);

export default InputField;
