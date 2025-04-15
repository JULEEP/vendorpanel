import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const DoctorSidebar = ({ isCollapsed, isMobile }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [doctorName, setDoctorName] = useState(""); // State to store doctor name

  // Fetch doctor name from localStorage
  useEffect(() => {
    const storedDoctorName = localStorage.getItem("doctorName");
    if (storedDoctorName) {
      setDoctorName(storedDoctorName); // Set doctor name from localStorage
    }
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLogout = async () => {
    try {
      // API call to logout the doctor
      await axios.post("https://credenhealth.onrender.com/api/admin/logout-doctor", {}, { withCredentials: true });

      // Clear localStorage data
      localStorage.removeItem("authToken");
      localStorage.removeItem("doctorId");
      localStorage.removeItem("doctorName");

      // Show success message and redirect to login page
      alert("Logout successful");
      window.location.href = "/doctor-login"; // Redirecting to the login page
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  const elements = [
    {
      icon: <i className="ri-home-2-fill text-blue-600"></i>,
      name: "Dashboard",
      path: "/doctor/doctordashboard",
    },
    {
      icon: <i className="ri-profile-fill text-blue-600"></i>,
      name: "Profile",
      dropdown: [
        { name: "View Profile", path: "/doctor/doctorprofile" },
      ],
    },
    {
      icon: <i className="ri-calendar-check-fill text-blue-600"></i>,
      name: "Appointments",
      path: "/doctor/appointments",
    },
    {
      icon: <i className="ri-logout-box-fill text-blue-600"></i>,
      name: "Logout",
      action: handleLogout,
    },
  ];

  return (
    <div
      className={`text-white transition-all duration-300 ${isMobile ? (isCollapsed ? "w-0" : "w-64") : isCollapsed ? "w-16" : "w-64"
        } overflow-y-scroll no-scrollbar h-full flex flex-col bg-white`}
    >
      <div className="sticky top-0 p-4 font-bold bg-blue-600 flex justify-center text-xl text-white">
        {/* Display the doctor name */}
        <span>{doctorName ? `${doctorName}` : "Doctor Panel"}</span>
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
                  <span className={`ml-4 ${isCollapsed && !isMobile ? "hidden" : "block"} font-bold`}>
                    {item.name}
                  </span>
                  <FaChevronDown
                    className={`ml-auto text-xs transform ${openDropdown === item.name ? "rotate-180" : "rotate-0"}`}
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

export default DoctorSidebar;
