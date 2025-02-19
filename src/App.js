
import React from "react";
import DepartmentList from "./Components/department";  // Correct the path here
import { Routes,Route } from "react-router-dom";
// import AdminLayout from "./Layout/AdminLayout.js";
import Homepage from "./Pages/Homepage";
// import { Route } from "lucide-react";
import AdminLayout from "./Layout/AdminLayout.jsx";




function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/department" element={<DepartmentList/>}/>
      </Routes>
    </AdminLayout>
  );
}

export default App;

