
import React from "react";
import DepartmentList from "./Components/department";

import { Route, Routes } from "react-router-dom";
// import AdminLayout from "./Layout/AdminLayout.js";
import Homepage from "./Pages/Homepage";
// import { Route } from "lucide-react";
import SubDepartmentList from "./Components/subdepartment.js";
import Position from "./Employee/Position.js";
import AdminLayout from "./Layout/AdminLayout.jsx";
import AttendanceForm from "./Pages/AttendanceForm"; // ✅ Fix import path
import MissingAttendance from "./Pages/MissingAttendance"; // ✅ Fix import path
import MonthlyAttendance from "./Pages/MonthlyAttendance"; // ✅ Fix import path




function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/department" element={<DepartmentList/>}/>
        <Route path="/subdepartment" element={<SubDepartmentList/>}/>
        <Route path="/position" element={<Position/>}/>
        <Route path="/attendanceform" element={<AttendanceForm />} />
        <Route path="/monthlyattendance" element={<MonthlyAttendance />} />
        <Route path="/missingattendance" element={<MissingAttendance />} />


      </Routes>
    </AdminLayout>
  );
}

export default App;


