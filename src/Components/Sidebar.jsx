import { X } from 'lucide-react'
import React from 'react'
import { FaCog, FaHome, FaUser } from 'react-icons/fa'

const Sidebar = ({isCollapsed,isMobile}) => {
  return (
    <div
            className={`bg-gray-800 text-white transition-all duration-300 ${
              isMobile ? (isCollapsed ? "w-0" : "w-64") : isCollapsed ? "w-16" : "w-64"
            } overflow-hidden h-full flex flex-col`}
          >
            <div className="p-4 font-bold text-lg">{!isCollapsed || isMobile ? "Dashboard" : ""}</div>
            <nav className="flex flex-col space-y-4 mt-4">
              {[{ icon: <FaHome />, name: "Home" }, { icon: <FaUser />, name: "Profile" }, { icon: <FaCog />, name: "Settings" }].map((item, idx) => (
                <div key={idx} className="flex items-center p-3 hover:bg-gray-700 cursor-pointer">
                  <span className="text-xl">{item.icon}</span>
                  <span className={`ml-4 ${isCollapsed && !isMobile ? "hidden" : "block"}`}>{item.name}</span>
                </div>
              ))}
            </nav>
          </div>
  )
}

export default Sidebar