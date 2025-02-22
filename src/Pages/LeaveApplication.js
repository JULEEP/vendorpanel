import { saveAs } from "file-saver";
import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { FaFileCsv, FaFileExcel, FaFilter, FaPlus } from "react-icons/fa";
import * as XLSX from "xlsx";

const LeaveApplicationList = () => {
  const [search, setSearch] = useState("");
  const [leaveType, setLeaveType] = useState("All");
  const [employeeFilter, setEmployeeFilter] = useState("All employees");
  const [showForm, setShowForm] = useState(false);

  const data = [
    {
      id: 1,
      employee: "Maisha Lucy Zamora Gonzales",
      type: "Annual Leave",
      applyDate: "2025-02-19",
      startDate: "2025-02-21",
      endDate: "2025-02-23",
      days: 4,
      reason: "Tt",
      status: "Approved",
    },
    {
      id: 2,
      employee: "Honorato Imogene Curry Terry",
      type: "Casual Leave",
      applyDate: "2025-02-19",
      startDate: "2025-02-19",
      endDate: "2025-02-22",
      days: 4,
      reason: "Hhhh",
      status: "Pending",
    },
  ];

  const headers = [
    { label: "SI", key: "id" },
    { label: "Employee Name", key: "employee" },
    { label: "Type", key: "type" },
    { label: "Apply Date", key: "applyDate" },
    { label: "Leave Start Date", key: "startDate" },
    { label: "Leave End Date", key: "endDate" },
    { label: "Days", key: "days" },
    { label: "Reason", key: "reason" },
    { label: "Status", key: "status" },
  ];

  const filteredData = data.filter(
    (item) =>
      (leaveType === "All" || item.type === leaveType) &&
      (employeeFilter === "All employees" || item.employee === employeeFilter) &&
      item.employee.toLowerCase().includes(search.toLowerCase())
  );

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leave Applications");

    // Convert to Excel file and trigger download
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const excelFile = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8" });

    saveAs(excelFile, "leave_applications.xlsx");
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Leave Application List</h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded">
            <FaFilter /> Filter
          </button>
          <button onClick={() => setShowForm(true)} className="flex items-center gap-2 px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded">
            <FaPlus /> Add Leave Application
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <select
          value={employeeFilter}
          onChange={(e) => setEmployeeFilter(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          <option>All employees</option>
          {data.map((item) => (
            <option key={item.id} value={item.employee}>
              {item.employee}
            </option>
          ))}
        </select>
        <button className="px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded">Find</button>
        <button
          className="px-4 py-2 text-red-700 bg-red-100 border border-red-600 rounded"
          onClick={() => {
            setSearch("");
            setLeaveType("All");
            setEmployeeFilter("All employees");
          }}
        >
          Reset
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex gap-2 mb-4">
        <CSVLink data={data} headers={headers} filename="leave_applications.csv" className="px-4 py-2 text-white bg-green-500 rounded">
          <FaFileCsv /> CSV
        </CSVLink>
        <button onClick={exportToExcel} className="px-4 py-2 text-white bg-green-500 rounded">
          <FaFileExcel /> Excel
        </button>
      </div>


      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr className="text-left bg-gray-200">
            <th className="px-4 py-2 border">SI</th>
            <th className="px-4 py-2 border">Employee Name</th>
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Apply Date</th>
            <th className="px-4 py-2 border">Leave Start Date</th>
            <th className="px-4 py-2 border">Leave End Date</th>
            <th className="px-4 py-2 border">Days</th>
            <th className="px-4 py-2 border">Reason</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{item.employee}</td>
              <td className="px-4 py-2 border">{item.type}</td>
              <td className="px-4 py-2 border">{item.applyDate}</td>
              <td className="px-4 py-2 border">{item.startDate}</td>
              <td className="px-4 py-2 border">{item.endDate}</td>
              <td className="px-4 py-2 border">{item.days}</td>
              <td className="px-4 py-2 border">{item.reason}</td>
              <td className="px-4 py-2 text-center border">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg w-96">
            <h2 className="mb-4 text-lg font-bold">Leave Application Create</h2>
            <label>Employee*</label>
            <select className="w-full p-2 mb-2 border rounded">
              <option>Select employee</option>
            </select>
            <label>Leave Type*</label>
            <select className="w-full p-2 mb-2 border rounded">
              <option>Select leave type</option>
            </select>
            <label>From Date*</label>
            <input type="date" className="w-full p-2 mb-2 border rounded" />
            <label>End Date*</label>
            <input type="date" className="w-full p-2 mb-2 border rounded" />
            <label>Application Hard Copy</label>
            <input type="file" className="w-full p-2 mb-2 border rounded" />
            <label>Reason</label>
            <textarea className="w-full p-2 mb-4 border rounded"></textarea>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 text-red-700 bg-red-100 border border-red-600 rounded" onClick={() => setShowForm(false)}>Close</button>
              <button className="px-4 py-2 text-blue-700 bg-blue-100 border border-blue-600 rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveApplicationList;
