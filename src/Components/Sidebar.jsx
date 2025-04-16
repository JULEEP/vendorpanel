import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = ({ isCollapsed, isMobile }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLogout = async () => {
    try {
      await axios.post("https://credenhealth.onrender.com/api/admin/logout", {}, { withCredentials: true });

      localStorage.removeItem("authToken");
      alert("Logout successful");
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  const elements = [
    {
      icon: <i className="ri-home-fill text-purple-600"></i>,
      name: "Home",
      path: "/dashboard",
    },
    {
      icon: <i className="ri-building-fill text-purple-600"></i>,
      name: "Companies",
      dropdown: [
        { name: "Add Company", path: "/company-register" },
        { name: "Company List", path: "/companylist" },
      ],
    },
    {
      icon: <i className="ri-file-search-fill text-purple-600"></i>,
      name: "Diagnostics",
      dropdown: [
        { name: "Add Diagnostics", path: "/create-diagnostic" },
        { name: "Diagnostics List", path: "/diagnosticlist" },
        { name: "Diagnostics Bookings", path: "/diagnosticslist" },
        { name: "Book Diagnostic", path: "/book-diagnostic" },

      ],
    },
    {
      icon: <i className="ri-user-heart-fill text-purple-600"></i>,
      name: "Doctors",
      dropdown: [
        { name: "Add Doctor", path: "/create-doctor" },
        { name: "Doctor List", path: "/doctorlist" },
        { name: "Appointment List", path: "/appintmentlist" },
        { name: "Book An Appointment", path: "/appintmentbooking" },
      ],
    },
    {
      icon: <i className="ri-notification-2-line text-purple-600"></i>,
      name: "Requests",
      dropdown: [
        { name: "Doctor Accepted Request", path: "/doctoracceptedlist" },
        { name: "Doctor Rejected Requests", path: "/doctorrejectedlist" },
        { name: "Diagnostic Accepted Request", path: "/diagnosticsacceptedlist" },
        { name: "Diagnostic Rejected Requests", path: "/diagnosticsrejectedlist" },
      ],
    },
    {
      icon: <i className="ri-settings-3-line text-purple-600"></i>,
      name: "Settings",
      path: "/setting",
    },
    {
      icon: <i className="ri-logout-box-fill text-purple-600"></i>,
      name: "Logout",
      action: handleLogout,
    },
  ];

  return (
    <div
      className={`transition-all duration-300 ${
        isMobile ? (isCollapsed ? "w-0" : "w-64") : isCollapsed ? "w-16" : "w-64"
      } h-screen overflow-y-scroll no-scrollbar flex flex-col bg-white`}
    >
      <div className="sticky top-0 p-4 font-bold bg-purple-600 flex justify-center text-xl text-white">
        <span>CredentHealth</span>
      </div>

      <nav className={`flex flex-col ${isCollapsed && "items-center"} space-y-4 mt-4`}>
        {elements.map((item, idx) => (
          <div key={idx}>
            {item.dropdown ? (
              <>
                <div
                  className="flex items-center py-3 px-4 font-bold text-sm text-[#464255] mx-4 rounded-lg hover:bg-[#D9F3EA] hover:text-[#00B074] duration-300 cursor-pointer"
                  onClick={() => toggleDropdown(item.name)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`ml-4 ${isCollapsed && !isMobile ? "hidden" : "block"}`}>
                    {item.name}
                  </span>
                  <FaChevronDown
                    className={`ml-auto text-xs transform ${
                      openDropdown === item.name ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {openDropdown === item.name && (
                  <ul className="ml-10 text-sm text-[#464255]">
                    {item.dropdown.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          to={subItem.path}
                          className="flex items-center space-x-2 py-2 font-bold cursor-pointer hover:text-[#00B074] hover:underline"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="text-[#00B074]">•</span>
                          <span>{subItem.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                className="flex items-center py-3 px-4 font-bold text-sm text-[#464255] mx-4 rounded-lg hover:bg-[#D9F3EA] hover:text-[#00B074] duration-300 cursor-pointer"
                onClick={item.action ? item.action : null}
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`ml-4 ${isCollapsed && !isMobile ? "hidden" : "block"}`}>
                  {item.name}
                </span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
