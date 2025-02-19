

import React, { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";

const initialDepartments = [
  { id: 1, name: "International Agents", status: "Inactive" },
  { id: 2, name: "Finance", status: "Active" },
  { id: 3, name: "ABC", status: "Active" },
  { id: 4, name: "Safety, Security", status: "Active" },
  { id: 5, name: "Dealing", status: "Active" },
  { id: 6, name: "Software Support Engineer", status: "Active" },
  { id: 7, name: "Technical", status: "Active" },
  { id: 8, name: "Finance", status: "Active" },
  { id: 9, name: "Admin", status: "Active" },
  { id: 10, name: "Internal audit control", status: "Active" },
];

const DepartmentList = () => {
  const [departments, setDepartments] = useState(initialDepartments);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editStatus, setEditStatus] = useState("");

  // Function to handle edit
  const handleEdit = (dept) => {
    setEditId(dept.id);
    setEditName(dept.name);
    setEditStatus(dept.status);
  };

  // Function to save edit
  const saveEdit = () => {
    setDepartments((prev) =>
      prev.map((dept) =>
        dept.id === editId ? { ...dept, name: editName, status: editStatus } : dept
      )
    );
    setEditId(null);
  };

  // Function to delete department
  const handleDelete = (id) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };

  // Function to download data as Excel
  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(departments);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Departments");
    XLSX.writeFile(wb, "departments.xlsx");
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Department List</h2>
          <div className="flex gap-2">
            <CSVLink
              data={departments}
              filename="departments.csv"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Download CSV
            </CSVLink>
            <button
              onClick={downloadExcel}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Download Excel
            </button>
          </div>
        </div>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-2">#</th>
              <th className="p-2">Department Name</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept, index) => (
              <tr key={dept.id} className="border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">
                  {editId === dept.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border p-1 rounded"
                    />
                  ) : (
                    dept.name
                  )}
                </td>
                <td className="p-2">
                  {editId === dept.id ? (
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                      className="border p-1 rounded"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  ) : (
                    <span
                      className={`px-2 py-1 text-sm rounded-lg ${
                        dept.status === "Active"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {dept.status}
                    </span>
                  )}
                </td>
                <td className="p-2 flex gap-2">
                  {editId === dept.id ? (
                    <button
                      onClick={saveEdit}
                      className="text-green-600 px-2 py-1 border rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(dept)}
                      className="text-blue-600"
                    >
                      <Pencil size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(dept.id)}
                    className="text-red-600"
                  >
                    <Trash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentList;



