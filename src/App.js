
import React from "react";
import { Route, Routes } from "react-router-dom";
import Attendance from './attendanceform';
import DepartmentList from "./Components/department"; // Correct the path here
import AdminLayout from "./Layout/AdminLayout";
import MonthlyAttendance from "./MonthlyAttendance";


function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/department" element={<DepartmentList/>}/>
        <Route path="/attendanceform" element={<Attendance/>}/>
        <Route path="/monthlyattendance" element={<MonthlyAttendance/>}/>

      </Routes>
    </AdminLayout>
  );
}

export default App;

