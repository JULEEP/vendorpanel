import { useState, useEffect } from "react";
import { MdCleaningServices } from "react-icons/md";
import { RiMenu2Line, RiMenu3Line, RiFullscreenLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is installed (npm install axios)

const Navbar = ({ setIsCollapsed, isCollapsed }) => {
  const navigate = useNavigate();

  // State to store real counts
  const [diagnosticRequests, setDiagnosticRequests] = useState(0);
  const [doctorRequests, setDoctorRequests] = useState(0);

  // Fetch counts from API on component mount
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get("https://credenhealth.onrender.com/api/admin/getcount");
        setDiagnosticRequests(response.data.totalDiagnosticBookings || 0);
        setDoctorRequests(response.data.totalDoctorAppointments || 0);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  const handleClick = () => {
    navigate("/diagnosticslist");
  };

  const handleNavigation = () => {
    navigate("/appintmentlist");
  };

  return (
    <nav className="bg-[#FFFFFF] text-black sticky top-0 w-full p-4 flex items-center shadow-lg z-50">
      <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-xl p-2">
        {isCollapsed ? (
          <RiMenu2Line className="text-2xl text-[#AAAAAA]" />
        ) : (
          <RiMenu3Line className="text-2xl text-[#AAAAAA]" />
        )}
      </button>

      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 ml-4">
          <button className="font-semibold flex gap-2 bg-[#F8FAF8] items-center justify-center p-3 rounded-md text-[#188753] hover:bg-[#D9F3EA] duration-300">
            <MdCleaningServices /> Cache Clear
          </button>

          <button
            className="relative font-semibold bg-[#F8FAF8] text-[#188753] p-3 rounded-md hover:bg-[#D9F3EA] duration-300"
            onClick={handleClick}
          >
            Request for Diagnostic
            {diagnosticRequests > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {diagnosticRequests}
              </span>
            )}
          </button>

          <button
            onClick={handleNavigation}
            className="relative font-semibold bg-[#F8FAF8] text-[#188753] p-3 rounded-md hover:bg-[#D9F3EA] duration-300"
          >
            Request for Doctor Consultation
            {doctorRequests > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {doctorRequests}
              </span>
            )}
          </button>
        </div>

        <div className="flex gap-3 items-center">
          <button className="px-2 py-1 rounded-full bg-[#F8FAF8] cursor-pointer hover:bg-[#D9F3EA] hover:text-[#00B074] duration-300">
            <RiFullscreenLine />
          </button>

          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full w-[2vw]"
              src="/CompanyLogo.png"
              alt="Company Logo"
            />
            <h1 className="text-xs">Admin</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
