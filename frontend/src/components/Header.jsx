import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="flex shadow-lg py-4 px-4 sm:px-10 bg-black font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div class="flex flex-wrap items-center justify-between gap-4 w-full">
        <div
          id="collapseMenu"
          class="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <ul class="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-black max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li class="max-lg:border-b max-lg:py-3 px-3">
              <Link to="/">
                <a
                  href="#"
                  class="hover:text-[#ffffff] text-[#e0e0e0] block font-semibold text-[15px]"
                >
                  Home
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div class="flex items-center ml-auto space-x-6">
          <Link to="/signin">
            <button class="font-semibold text-[15px] border-none outline-none">
              <a
                href="#"
                class="text-[#ffffff] hover:underline"
              >
                Login
              </a>
            </button>
          </Link>
          <Link to="/signup">
            <button class="px-4 py-2 text-sm rounded-sm font-bold text-black border-2 border-[#ffffff] bg-[#ffffff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#ffffff]">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
