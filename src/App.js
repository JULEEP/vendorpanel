import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AdminLayout from "./Layout/AdminLayout";

function App() {
  return (
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </AdminLayout>
  );
}

export default App;
