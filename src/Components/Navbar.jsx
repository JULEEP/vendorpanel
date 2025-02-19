import { Menu } from "lucide-react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdCleaningServices } from "react-icons/md";

const Navbar = ({setIsCollapsed,isCollapsed}) => {
  

  return (
    <nav className="bg-[#FFFFFF] text-black sticky top-0 w-full p-4 flex items-center shadow-lg">
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-xl p-2">
            {isCollapsed ? <i class="ri-menu-2-line text-2xl text-[#AAAAAA]"></i>:<i class="ri-menu-3-line text-2xl text-[#AAAAAA]"></i>}
          </button>
          <div className="flex justify-between items-center w-full">
          <button className="ml-4 font-semibold flex gap-2 bg-[#F8FAF8] items-center justify-center p-3 rounded-md text-[#188753] "><MdCleaningServices /> Cache Clear</button>
          <div className="flex gap-3 items-center" >
            <button className="px-2 py-1 rounded-full bg-[#F8FAF8] cursor-pointer hover:bg-[#D9F3EA] hover:text-[#00B074] duration-300"><i class="ri-fullscreen-line"></i></button>
              <div className="flex flex-col justify-center items-center">
              <img className="rounded-full w-[2vw]" src="https://cdn-icons-png.flaticon.com/512/4727/4727424.png" alt="" />
              <h1>Admin</h1>
            </div>
          </div>
          </div>
        </nav>
  );
};

export default Navbar;
