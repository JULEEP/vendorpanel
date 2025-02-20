
// import React from "react";
// import { Pencil, Trash } from "lucide-react";

// const SubDepartmentList = () => {
//   const subDepartments = [
//     { id: 1, name: "HR", department: "Electrical", status: "Active" },
//     { id: 2, name: "Accounts", department: "Electrical", status: "Active" },
//     { id: 3, name: "Finance", department: "Production", status: "Active" },
//     { id: 4, name: "Sales", department: "Production", status: "Active" },
//     { id: 5, name: "Angelica Goff", department: "Electrical", status: "Active" },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Sub Department List</h2>
//         {/* Custom Tailwind Button */}
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//           Add Sub Department
//         </button>
//       </div>
//       <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200 text-left">
//               <th className="p-2">Sl</th>
//               <th className="p-2">Sub Department Name</th>
//               <th className="p-2">Department Name</th>
//               <th className="p-2">Status</th>
//               <th className="p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {subDepartments.map((subDept, index) => (
//               <tr key={subDept.id} className="border-t">
//                 <td className="p-2">{index + 1}</td>
//                 <td className="p-2">{subDept.name}</td>
//                 <td className="p-2">{subDept.department}</td>
//                 <td className="p-2">
//                   <span className="bg-green-500 text-white px-2 py-1 rounded-md text-sm">
//                     {subDept.status}
//                   </span>
//                 </td>
//                 <td className="p-2 flex space-x-2">
//                   {/* Edit Button */}
//                   <button className="bg-yellow-500 text-white p-2 rounded-lg">
//                     <Pencil size={16} />
//                   </button>
//                   {/* Delete Button */}
//                   <button className="bg-red-500 text-white p-2 rounded-lg">
//                     <Trash size={16} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SubDepartmentList;
import React, { useState } from "react";
import { Pencil, Trash, PlusCircle } from "lucide-react";

const SubDepartmentList = () => {
  const [subDepartments, setSubDepartments] = useState([
    { id: 1, name: "HR", department: "Electrical", status: "Active" },
    { id: 2, name: "Accounts", department: "Electrical", status: "Active" },
    { id: 3, name: "Finance", department: "Production", status: "Active" },
    { id: 4, name: "Sales", department: "Production", status: "Active" },
    { id: 5, name: "Angelica Goff", department: "Electrical", status: "Active" },
  ]);

  const [formData, setFormData] = useState({ id: null, name: "", department: "", status: "Active" });
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Input change handler
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or Update SubDepartment
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setSubDepartments(subDepartments.map(subDept => subDept.id === formData.id ? formData : subDept));
      setIsEditing(false);
    } else {
      setSubDepartments([...subDepartments, { ...formData, id: subDepartments.length + 1 }]);
    }
    setShowModal(false);
    setFormData({ id: null, name: "", department: "", status: "Active" });
  };

  // Edit SubDepartment
  const handleEdit = (subDept) => {
    setFormData(subDept);
    setIsEditing(true);
    setShowModal(true);
  };

  // Delete SubDepartment
  const handleDelete = (id) => {
    setSubDepartments(subDepartments.filter(subDept => subDept.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Sub Department List</h2>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
          onClick={() => setShowModal(true)}
        >
          <PlusCircle size={18} className="mr-2" /> Add Sub Department
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Sl</th>
              <th className="p-2">Sub Department Name</th>
              <th className="p-2">Department Name</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {subDepartments.map((subDept, index) => (
              <tr key={subDept.id} className="border-t">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{subDept.name}</td>
                <td className="p-2">{subDept.department}</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                    {subDept.status}
                  </span>
                </td>
                <td className="p-2 flex space-x-2">
                  <button className="bg-yellow-500 text-white p-2 rounded-lg" onClick={() => handleEdit(subDept)}>
                    <Pencil size={16} />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-lg" onClick={() => handleDelete(subDept.id)}>
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">{isEditing ? "Edit" : "Add"} Sub Department</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block font-medium">Sub Department Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-2">
                <label className="block font-medium">Department Name:</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-2">
                <label className="block font-medium">Status:</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={() => setShowModal(false)} className="bg-gray-400 px-4 py-2 rounded-lg text-white">Cancel</button>
                <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg text-white">
                  {isEditing ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubDepartmentList;

