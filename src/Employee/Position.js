import { useState } from "react";
import React from "react";

const employeesData = [
  { id: "000028", name: "Mohmed Afif Akram", email: "mohaafiif@gmail.com", mobile: "26523333", dob: "", joiningDate: "", status: "Active" },
  { id: "000027", name: "Uma Stafford", email: "nocunocu@mailinator.com", mobile: "+1(617) 434-2319", dob: "", joiningDate: "", status: "Active" },
  { id: "000026", name: "Khubaib Ahmed", email: "khubaib@gmail.com", mobile: "0300-1234567", dob: "", joiningDate: "", status: "Active" },
  { id: "000025", name: "Iman", email: "fdsafdas@gmail.com", mobile: "09876", dob: "", joiningDate: "", status: "Active" },
  { id: "000024", name: "Thomas Goodman", email: "gapanalos@mailinator.com", mobile: "+1(261) 424-8691", dob: "", joiningDate: "", status: "Active" },
  { id: "000023", name: "Jaquelyn White", email: "leqyma@mailinator.com", mobile: "+1(195) 666-1843", dob: "", joiningDate: "", status: "Active" },
  { id: "000022", name: "Dawn Cobb", email: "mecy@mailinator.com", mobile: "+1(104) 683-6454", dob: "", joiningDate: "", status: "Active" },
  { id: "000021", name: "Odysseus Glover", email: "bipem@mailinator.com", mobile: "+1(724) 777-1716", dob: "", joiningDate: "", status: "Active" },
  { id: "000020", name: "Oleg Hall Larson Sloan", email: "zyhok@mailinator.com", mobile: "+1(747) 106-4191", dob: "2015-06-06", joiningDate: "1998-01-13", status: "Active" },
];

export default function Position() {
  const [activeTab, setActiveTab] = useState("positions");
  const positions = [
    { id: 1, name: "HR Assistant", status: "Active" },
    { id: 2, name: "Software", status: "Active" },
    { id: 3, name: "IT Manager", status: "Active" },
    { id: 4, name: "Engineer", status: "Active" },
    { id: 5, name: "Assistant Supervisor", status: "Active" },
  ];
  const inactive = [
    { id: "000020", name: "Oleg Hall Larson Sloan", email: "zyhok@mailinator.com", mobile: "+1(747) 106-4191", dob: "2015-06-06", joiningDate: "1998-01-13", status: "Inactive" },
    
  ];
   const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const totalPages = Math.ceil(employeesData.length / recordsPerPage);
  
    const filteredEmployees = employeesData.slice(
      (currentPage - 1) * recordsPerPage,
      currentPage * recordsPerPage
    );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex space-x-4 border-b mb-4">
        {[
          { label: "Employee", key: "employee" },
          { label: "Positions", key: "positions" },
          { label: "Inactive employees list", key: "inactive" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded-t-lg font-semibold ${
              activeTab === tab.key
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "positions" && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Position List</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">+ Add Position</button>
          </div>
          <div className="flex justify-between mb-2">
            <div>
              Show <input type="number" value={10} className="border px-2 py-1 w-16" /> entries
            </div>
            <input
              type="text"
              placeholder="Search"
              className="border px-2 py-1 rounded-md"
            />
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Sl</th>
                <th className="border p-2">Position Name</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((pos) => (
                <tr key={pos.id} className="odd:bg-gray-100">
                  <td className="border p-2 text-center">{pos.id}</td>
                  <td className="border p-2">{pos.name}</td>
                  <td className="border p-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                      {pos.status}
                    </span>
                  </td>
                  <td className="border p-2 text-center space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">✏</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <p>Showing 1 to 5 of 5 entries</p>
            <div>
              <button className="bg-gray-300 px-3 py-1 rounded-l">Previous</button>
              <button className="bg-green-600 text-white px-3 py-1">1</button>
              <button className="bg-gray-300 px-3 py-1 rounded-r">Next</button>
            </div>
          </div>
        </div>
      )}
      {activeTab === "employee" &&(
              <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Employee List</h2>
                <div className="flex gap-2">
                  <button className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700">
                    <i className="fas fa-filter"></i> Filter
                  </button>
                  <button className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700">
                    + Add Employee
                  </button>
                </div>
              </div>
        
              <div className="flex justify-between items-center mb-4">
                <div>
                  <button className="bg-green-500 text-white px-3 py-2 rounded-md mx-1">CSV</button>
                  <button className="bg-green-500 text-white px-3 py-2 rounded-md mx-1">Excel</button>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="border px-3 py-2 rounded-md"
                />
              </div>
        
              <table className="w-full border border-gray-200 rounded-md">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2">Sl</th>
                    <th className="border p-2">Employee ID</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Mobile No</th>
                    <th className="border p-2">Date of Birth</th>
                    <th className="border p-2">Joining Date</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((emp, index) => (
                    <tr key={emp.id} className="hover:bg-gray-50">
                      <td className="border p-2 text-center">{index + 1 + (currentPage - 1) * recordsPerPage}</td>
                      <td className="border p-2 text-center">{emp.id}</td>
                      <td className="border p-2">{emp.name}</td>
                      <td className="border p-2">{emp.email}</td>
                      <td className="border p-2">{emp.mobile}</td>
                      <td className="border p-2">{emp.dob || "-"}</td>
                      <td className="border p-2">{emp.joiningDate || "-"}</td>
                      <td className="border p-2">
                        <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs">{emp.status}</span>
                      </td>
                      <td className="border p-2 text-center">
                        <button className="bg-red-500 text-white px-2 py-1 rounded-md mx-1">🔄</button>
                        <button className="bg-blue-500 text-white px-2 py-1 rounded-md mx-1">👁</button>
                        <button className="bg-green-500 text-white px-2 py-1 rounded-md mx-1">✏</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded-md mx-1">🗑</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="bg-gray-300 px-3 py-2 rounded-md disabled:opacity-50"
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="font-semibold">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className="bg-gray-300 px-3 py-2 rounded-md disabled:opacity-50"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          ) }
          {activeTab === "inactive" &&(
              <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Inactive Employee</h2>
                <div className="flex gap-2">
                  <button className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700">
                    <i className="fas fa-filter"></i> Filter
                  </button>
                  <button className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700">
                    + Add Employee
                  </button>
                </div>
              </div>
        
              <div className="flex justify-between items-center mb-4">
                <div>
                  <button className="bg-green-500 text-white px-3 py-2 rounded-md mx-1">CSV</button>
                  <button className="bg-green-500 text-white px-3 py-2 rounded-md mx-1">Excel</button>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="border px-3 py-2 rounded-md"
                />
              </div>
        
              <table className="w-full border border-gray-200 rounded-md">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2">Sl</th>
                    <th className="border p-2">Employee ID</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Mobile No</th>
                    <th className="border p-2">Date of Birth</th>
                    <th className="border p-2">Joining Date</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {inactive.map((emp, index) => (
                    <tr key={emp.id} className="hover:bg-gray-50">
                      <td className="border p-2 text-center">{index + 1 + (currentPage - 1) * recordsPerPage}</td>
                      <td className="border p-2 text-center">{emp.id}</td>
                      <td className="border p-2">{emp.name}</td>
                      <td className="border p-2">{emp.email}</td>
                      <td className="border p-2">{emp.mobile}</td>
                      <td className="border p-2">{emp.dob || "-"}</td>
                      <td className="border p-2">{emp.joiningDate || "-"}</td>
                      <td className="border p-2">
                        <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs">{emp.status}</span>
                      </td>
                      <td className="border p-2 text-center">
                        <button className="bg-red-500 text-white px-2 py-1 rounded-md mx-1">🔄</button>
                        <button className="bg-blue-500 text-white px-2 py-1 rounded-md mx-1">👁</button>
                        <button className="bg-green-500 text-white px-2 py-1 rounded-md mx-1">✏</button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded-md mx-1">🗑</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="bg-gray-300 px-3 py-2 rounded-md disabled:opacity-50"
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="font-semibold">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className="bg-gray-300 px-3 py-2 rounded-md disabled:opacity-50"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          ) }
    </div>
  );
}
