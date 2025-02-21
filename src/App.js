import React from "react";
import DepartmentList from "./Components/department";

import { Route, Routes } from "react-router-dom";
// import AdminLayout from "./Layout/AdminLayout.js";
// import { Route } from "lucide-react";
import SubDepartmentList from "./Components/subdepartment.js";
import Position from "./Employee/Position.js";
// import AdminLayout from "./Layout/AdminLayout.jsx";
import AttendanceForm from "./Pages/AttendanceForm.js";
import Dashboard from "./Pages/Dashboard.jsx";
import Holiday from "./Pages/Holiday.js";
import LeaveApplication from "./Pages/LeaveApplication.js";
import LeaveApproval from "./Pages/LeaveApproval";
import Leaves from "./Pages/Leaves.js";
import MissingAttendance from "./Pages/MissingAttendance.js";
import MonthlyAttendance from "./Pages/MonthlyAttendance.js";
import WeeklyHoliday from "./Pages/WeeklyHoliday.js";
import AdminLayout from "./Layout/AdminLayout.jsx";
import Performance from "./Employee/Performance.js";
import Recruitment from "./Components/recruitment.js";
// import AttendanceForm from "./Pages/AttendanceForm"; // ✅ Fix import path
// import MissingAttendance from "./Pages/MissingAttendance"; // ✅ Fix import path
// import MonthlyAttendance from "./Pages/MonthlyAttendance"; // ✅ Fix import path



function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/department" element={<DepartmentList/>}/>
        <Route path="/subdepartment" element={<SubDepartmentList/>}/>
        <Route path="/position" element={<Position/>}/>
        <Route path="/attendanceform" element={<AttendanceForm />} />
        <Route path="/monthlyattendance" element={<MonthlyAttendance />} />
        <Route path="/missingattendance" element={<MissingAttendance />} />
        <Route path="/weeklyholiday" element={<WeeklyHoliday />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/leaveapplication" element={<LeaveApplication />} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/leaveapproval" element={<LeaveApproval />} />
        <Route path="/performance" element={<Performance/>}/>
        <Route path="/recruitment" element={<Recruitment />} />

      </Routes>
    </AdminLayout>
  );
}

export default App;


