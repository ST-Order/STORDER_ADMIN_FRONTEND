import { useNavigate } from "react-router-dom";
import cooker from "./assets/cooker.png";

interface AuthFormProps {
  type: "signin" | "signup";
  children?: React.ReactNode;
  onSubmit: (data: any) => void;
}

function Authform({ type, children, onSubmit }: AuthFormProps) {
  const nav = useNavigate();

  const navigateLogin = () => {
    if (type === "signup") nav("/");
  };

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center ${
        type === "signin" ? "gap-10" : "gap-8"
      }  mx-auto`}
    >
      <img
        src={cooker}
        className="flex-grow-0 flex-shrink-0 w-[120px] object-cover"
      />
      <div
        onClick={navigateLogin}
        className={`${
          type === "signup" && "cursor-pointer"
        } flex-grow-0 flex-shrink-0 w-[500px] text-center leading-none`}
      >
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-[150px] text-left text-[#b90005] drop-shadow-2xl">
          S
        </span>
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-[150px] text-left text-[#0a1e62] drop-shadow-2xl">
          T
        </span>
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-[150px] text-left text-[#8f8f8f] drop-shadow-2xl">
          :
        </span>
        <span className="self-stretch flex-grow-0 flex-shrink-0 w-[500px] text-[150px] text-left text-gray-300 drop-shadow-md">
          table
        </span>
      </div>

      <form
        onSubmit={onSubmit}
        className={`flex flex-col max-w-[500px] w-2/3 gap-7 ${
          type === "signup" ? "gap-4" : ""
        }`}
        autoComplete="off"
      >
        {children}
      </form>
    </div>
  );
}

export default Authform;
