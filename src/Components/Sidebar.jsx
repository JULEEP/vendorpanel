import { X } from 'lucide-react'
import React from 'react'
import { FaCog, FaHome, FaUser } from 'react-icons/fa'

const Sidebar = ({isCollapsed,isMobile,setIsCollapsed}) => {
  const elements=[
    { icon: <i class="ri-home-fill"></i>, name: "Dashboard" }, 
    { icon: <i class="ri-user-fill"></i> , name: "Attendance" }, 
    { icon: <i class="ri-trophy-fill"></i> , name: "Award" },
    { icon: <i class="ri-government-fill"></i> , name: "Department" },
    { icon: <i class="ri-team-fill"></i>, name: "Employee" },
    { icon: <i class="ri-plane-fill"></i>, name: "Leave" },
    { icon: <i class="ri-bank-card-line"></i>, name: "Loan" },
    { icon: <i class="ri-notification-3-fill"></i>, name: "Notice Board" },
    { icon: <i class="ri-bank-card-line"></i>, name: "Payroll" },
    { icon: <i class="ri-building-2-fill"></i>, name: "Procurement" },
    { icon: <i class="ri-list-check"></i>, name: "Project Management" },
    { icon: <i class="ri-news-line"></i>, name: "Recruitment" },
    { icon: <i class="ri-folder-chart-fill"></i>, name: "Reports" },
    { icon: <i class="ri-star-fill"></i>, name: "Reward Points" },
    { icon: <i class="ri-chat-2-fill"></i>, name: "Setup rules" },
    { icon: <i class="ri-settings-2-fill"></i>, name: "Settings" },
    { icon: <i class="ri-chat-2-fill"></i>, name: "Message" },
  ]
  return (
    <div
            className={`bg-[#FFFFFF] text-white transition-all duration-300 ${
              isMobile ? (isCollapsed ? "w-0" : "w-64 absolute top-0 left-0 z-10") : (isCollapsed ? "w-16" : "w-64")
            } overflow-y-scroll no-scrollbar h-full flex flex-col  `}
          >
            <div className="sticky top-0 text-[#464255] p-4 font-bold bg-[#F9F9F9] flex items-end justify-center">{!isCollapsed || isMobile ? <img className='h-[7vh] w-[70%]' src="https://hrm.bdtask-demoserver.com/storage/application/1716900096sidebar-logo.png" alt="" /> :<img className='h-[5vh] w-[70%]' src='https://hrm.bdtask-demoserver.com/storage/application/1716900212sidebar-collapsed-logo.png'/> }</div>
            <nav className={`flex flex-col ${isCollapsed && "items-center"} items-start space-y-4 mt-4 shadow-lg`}>

               <button onClick={() => setIsCollapsed(!isCollapsed)} className={`text-xl p-2 ${isMobile ? "block absolute top-[2vh] right-0":"hidden"}`} >
                {isCollapsed? <i class="ri-menu-2-line text-2xl text-[#AAAAAA]"></i>:<i class="ri-menu-3-line text-2xl text-[#AAAAAA]"></i>}
              </button>

              {elements.map((item, idx) => (
                <div key={idx} className="flex items-center py-2 px-3 font-semibold text-sm text-[#464255] mx-4 rounded-lg hover:bg-[#D9F3EA] hover:text-[#00B074] duration-300 cursor-pointer">
                  <span className="text-xl">{item.icon}</span>
                  <span className={`ml-4 ${isCollapsed && !isMobile ? "hidden" : "block"}`}>{item.name}</span>
                </div>
              ))}
            </nav>
          </div>
  )
}

export default Sidebar