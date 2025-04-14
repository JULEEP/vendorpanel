import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = ({ isCollapsed, isMobile }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Logout function that will clear the token and call the API
  const handleLogout = async () => {
    try {
      // Make the API call to logout
      const response = await axios.post("https://credenhealth.onrender.com/api/admin/logout", {}, { withCredentials: true });

      // If successful, clear the token from localStorage
      localStorage.removeItem("authToken");  // Clear the token from localStorage

      // Show logout success message in alert
      alert("Logout successful");

      // Redirect to the home page (or you can navigate to the appropriate page)
      window.location.href = "/";  // Redirect to the homepage
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  const elements = [
    {
      icon: <i className="ri-home-fill"></i>,
      name: "Home",
      path: "/dashboard",
    },
    {
      icon: <i className="ri-folders-fill"></i>,
      name: "Categories",
      dropdown: [
        { name: "Add Category", path: "/categoryform" },
        { name: "Manage Categories", path: "/categorylist" },
      ],
    },
    {
      icon: <i className="ri-building-fill"></i>,
      name: "Companies",
      dropdown: [
        { name: "Add Company", path: "/company-register" },
        { name: "Company List", path: "/companylist" },
      ],
    },
    {
      icon: <i className="ri-file-search-fill"></i>,
      name: "Diagnostics",
      dropdown: [
        { name: "Add Diagnostics", path: "/create-diagnostic" },
        { name: "Diagnostics List", path: "/diagnosticlist" },
        { name: "Diagnostics Bookings", path: "/diagnosticslist" },
      ],
    },
    {
      icon: <i className="ri-user-heart-fill"></i>,
      name: "Doctors",
      dropdown: [
        { name: "Add Doctor", path: "/create-doctor" },
        { name: "Doctor List", path: "/doctorlist" },
        { name: "Appointment List", path: "/appintmentlist" },
        { name: "Book An Appointment", path: "/appintmentbooking" },
      ],
    },
    {
      icon: <i className="ri-team-fill"></i>,
      name: "Staff",
      dropdown: [
        { name: "Add Staff", path: "/staff-register" },
        { name: "Staff List", path: "/stafflist" },
        { name: "Staff Appointments", path: "/staff-appointments" },
      ],
    },
    {
      icon: <i className="ri-notification-2-line"></i>,
      name: "Requests",
      dropdown: [
        { name: "Doctor Pending Request", path: "/doctorpendingbookings" },
        { name: "Doctor Rejected Requests", path: "/doctorpendingbookings" },
        { name: "Diagnostic Pending Request", path: "/diagnosticpending" },
        { name: "Diagnostic Rejected Requests", path: "/diagnosticpending" },
      ],
    },
    {
      icon: <i className="ri-settings-3-line"></i>,
      name: "Settings",
      path: "/setting",
    },
    {
      icon: <i className="ri-logout-box-fill"></i>,
      name: "Logout",
      action: handleLogout,  // Add the logout handler here
    },
  ];

  return (
    <div
      className={`text-white transition-all duration-300 ${
        isMobile ? (isCollapsed ? "w-0" : "w-64") : isCollapsed ? "w-16" : "w-64"
      } overflow-y-scroll no-scrollbar h-full flex flex-col`}
    >
      <div className="sticky top-0 p-4 font-bold bg-purple-600 flex items-end justify-center text-xl text-white">
        <span className="text-white">CredentHealth</span>
      </div>

      <nav className={`flex flex-col ${isCollapsed && "items-center"} space-y-4 mt-4 shadow-lg`}>
        {elements.map((item, idx) => (
          <div key={idx}>
            {item.dropdown ? (
              <>
                <div
                  className="flex items-center py-3 px-4 font-bold text-sm text-[#464255] mx-4 rounded-lg hover:bg-[#D9F3EA] hover:text-[#00B074] duration-300 cursor-pointer"
                  onClick={() => toggleDropdown(item.name)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`ml-4 ${isCollapsed && !isMobile ? "hidden" : "block"} font-bold`}>
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
                onClick={item.action ? item.action : null}  // Call the action on click for logout
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`ml-4 ${isCollapsed && !isMobile ? "hidden" : "block"} font-bold`}>
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
