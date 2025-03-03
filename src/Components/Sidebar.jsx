import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isCollapsed, isMobile }) => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name); // Toggle logic
  };

  const elements = [
    { icon: <i className="ri-home-fill"></i>, name: "Dashboard", path: "/" },
    {
      icon: <i className="ri-user-fill"></i>,
      name: "Attendance",
      dropdown: [
        { name: "Attendance Form", path: "/attendanceform" },
        { name: "Monthly Attendance", path: "/monthlyattendance" },
        { name: "Missing Attendance", path: "/missingattendance" },
      ],
    },
    { icon: <i className="ri-trophy-fill"></i>, name: "Award" },
    { icon: <i className="ri-government-fill"></i>, name: "Department" },
    { icon: <i className="ri-team-fill"></i>, 
      name: "Employee",
      dropdown: [
        { name: "Position", path: "/position" },
        { name: "Employee", path: "/employees" },
        { name: "Employee Performance", path: "/performance" },
      ],
    },
    {
      icon: <i className="ri-plane-fill"></i>,
      name: "Leave",
      dropdown: [
        { name: "Weekly Holiday", path: "/weeklyholiday" },
        { name: "Holiday", path: "/holiday" },
        { name: "Leave Type", path: "/leaves" },
        { name: "Leave Approval", path: "/leaveapproval" },
        { name: "Leave Application", path: "/leaveapplication" },
      ],
    },
    { icon: <i className="ri-bank-card-line"></i>, name: "Loan" },
    { icon: <i className="ri-notification-3-fill"></i>, name: "Notice Board" },
    { icon: <i className="ri-bank-card-line"></i>, name: "Payroll" },
    { icon: <i className="ri-building-2-fill"></i>, name: "Procurement" },
    { icon: <i className="ri-list-check"></i>, name: "Project Management" },
    { icon: <i className="ri-news-line"></i>, name: "Recruitment" },
    { icon: <i className="ri-folder-chart-fill"></i>, name: "Reports" },
    { icon: <i className="ri-star-fill"></i>, name: "Reward Points" },
    { icon: <i className="ri-chat-2-fill"></i>, name: "Setup rules" },
    { icon: <i className="ri-settings-2-fill"></i>, name: "Settings", 
      dropdown: [
        { name: "Setting", path: "/setting" },
        { name: "Language Setup", path: "/languagesetup" },
        { name: "Backup Reset", path: "/backupreset" },
      ]
    },
    { icon: <i className="ri-chat-2-fill"></i>, name: "Message",},
  ];

  return (
    <div
      className={`bg-[#FFFFFF] text-white transition-all duration-300 ${
        isMobile ? (isCollapsed ? "w-0" : "w-64") : isCollapsed ? "w-16" : "w-64"
      } overflow-y-scroll no-scrollbar h-full flex flex-col`}
    >
      <div className="sticky top-0 text-[#464255] p-4 font-bold bg-[#F9F9F9] flex items-end justify-center">
        {!isCollapsed || isMobile ? (
          <img
            className="h-[7vh] w-[70%]"
            src="https://hrm.bdtask-demoserver.com/storage/application/1716900096sidebar-logo.png"
            alt=""
          />
        ) : (
          <img
            className="h-[5vh] w-[70%]"
            src="https://hrm.bdtask-demoserver.com/storage/application/1716900212sidebar-collapsed-logo.png"
          />
        )}
      </div>
      <nav className={`flex flex-col ${isCollapsed && "items-center"} space-y-4 mt-4 shadow-lg`}>
        {elements.map((item, idx) => (
          <div key={idx}>
            {item.dropdown ? (
              <>
                <div
                  className="flex items-center py-3 px-4 font-bold text-sm text-[#464255] mx-4 rounded-lg hover:bg-[#D9F3EA] hover:text-[#00B074] duration-300 cursor-pointer"
                  onClick={() => toggleDropdown(item.name)} // Toggle specific dropdown
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`ml-4 ${isCollapsed && !isMobile ? "hidden" : "block"} font-bold cursor-pointer`}>
                    {item.name}
                  </span>
                  <FaChevronDown className={`ml-auto text-xs transform ${openDropdown === item.name ? "rotate-180" : "rotate-0"}`} />
                </div>
                {openDropdown === item.name && (
                  <ul className="ml-10 text-sm text-[#464255]">
                    {item.dropdown.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          to={subItem.path}
                          className="flex items-center space-x-2 py-2 font-bold cursor-pointer hover:text-[#00B074] hover:underline"
                          onClick={() => setOpenDropdown(null)} // Close dropdown on link click
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
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`ml-4 ${isCollapsed && !isMobile ? "hidden" : "block"} font-bold cursor-pointer`}>
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
