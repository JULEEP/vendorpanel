
import React from "react";
import DepartmentList from "./Components/department";  

import { Routes,Route } from "react-router-dom";
// import AdminLayout from "./Layout/AdminLayout.js";
import Homepage from "./Pages/Homepage";
// import { Route } from "lucide-react";
import AdminLayout from "./Layout/AdminLayout.jsx";
import SubDepartmentList from "./Components/subdepartment.js";
import Position from "./Employee/Position.js";
import MissingAttendance from "./Pages/MissingAttendance.js";
import MonthlyAttendance from "./Pages/MonthlyAttendance.js";
import AttendanceForm from "./Pages/AttendanceForm.js";




function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/department" element={<DepartmentList/>}/>
        <Route path="/subdepartment" element={<SubDepartmentList/>}/>
        <Route path="/position" element={<Position/>}/>
        <Route path="/missing-attendancce" element={<MissingAttendance/>}/>
        <Route path="/monthly-attendancce" element={<MonthlyAttendance/>}/>
        <Route path="/attendancce-form" element={<AttendanceForm/>}/>



      </Routes>
    </AdminLayout>
  );
}

export default App;


