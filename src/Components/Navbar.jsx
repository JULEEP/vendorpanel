import { Menu } from "lucide-react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = ({setIsCollapsed,isCollapsed}) => {
  

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center">
          <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-xl p-2">
            {isCollapsed? <i class="ri-menu-2-line text-2xl"></i>:<i class="ri-menu-3-line text-2xl"></i>}
          </button>
          <span className="ml-4 font-bold">Admin Panel</span>
        </nav>
  );
};

export default Navbar;
