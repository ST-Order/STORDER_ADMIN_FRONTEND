import Logo from "./Logo";

function Home() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          Content
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <Logo />
      
      <div className="flex flex-col justify-evenly cursor-pointer w-[86px] h-20 absolute left-[29px] top-6 overflow-hidden">
        <div className="w-full h-3 rounded-md bg-white border-2 border-black mb-1"></div>
        <div className="w-full h-3 rounded-md bg-white border-2 border-black mb-1"></div>
        <div className="w-full h-3 rounded-md bg-white border-2 border-black"></div>
      </div>
      
      <div className="flex flex-col justify-start items-center w-[413px] absolute left-[513px] top-[232px] gap-[3px]">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1.5">
          <p className="flex-grow-0 flex-shrink-0 text-[64px] font-bold text-center text-white">
            바비든든
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-5xl font-bold text-center text-black">
            {" "}
            사장님
          </p>
        </div>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[413px] text-[55px] text-center text-black">
          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[413px] text-[55px] text-center text-black">
            {" "}
          </span>
          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[413px] text-[55px] font-bold text-center text-black">
            어서오세요
          </span>
          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[413px] text-[55px] text-center text-black">
            !
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-start items-start w-[1249px] h-[311px] absolute left-[95px] top-[453px] gap-2.5 px-[47px] rounded-[5px] bg-white border-[3px] border-black">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[1155px]">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[139px]">
            <img
              src="image-60.png"
              className="flex-grow-0 flex-shrink-0 w-40 h-40 object-cover"
            />
            <img
              src="image-62.png"
              className="flex-grow-0 flex-shrink-0 w-40 h-40 object-cover"
            />
            <img
              src="image-58.png"
              className="flex-grow-0 flex-shrink-0 w-40 h-40 object-cover"
            />
            <img
              src="image-61.png"
              className="flex-grow-0 flex-shrink-0 w-[230px] h-[230px] object-cover"
            />
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[145px]">
            <p className="flex-grow-0 flex-shrink-0 text-[40px] text-center text-black">
              주문처리
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[40px] text-center text-black">
              메뉴관리
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[40px] text-center text-black">
              메뉴 품절
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[40px] text-center text-black">
              공지올리기
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
