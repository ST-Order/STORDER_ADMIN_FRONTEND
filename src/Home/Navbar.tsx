import { ReactNode } from "react";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

function Navbar({ children }: Props) {
  const nav = useNavigate();

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col h-screen justify-around ">
          {/* Navbar */}
          <div className="navbar bg-base-300 bg-white w-full drop-shadow-sm border-b border-gray-400/50 min-h-24">
            <div className="text-center ml-20 flex-1">
              <Logo />
            </div>
            <div
              onClick={() => {
                nav("/");
              }}
              className="btn"
            >
              logout
            </div>
          </div>
          {/* Page content here */}
          <div className="h-full overflow-hidden"> {children}</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
