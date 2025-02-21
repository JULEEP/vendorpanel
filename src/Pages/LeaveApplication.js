import React, { useState } from "react";
import { CSVLink } from "react-csv";
import { FaFileCsv, FaFileExcel, FaFilter, FaPlus } from "react-icons/fa";

const LeaveApplicationList = () => {
  const [search, setSearch] = useState("");
  const [leaveType, setLeaveType] = useState("All");

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
      approvedDate: "2025-02-20",
      approvedStart: "2025-02-21",
      approvedEnd: "2025-02-23",
      approvedDays: 4,
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
      approvedDate: "2025-02-19",
      approvedStart: "2025-02-19",
      approvedEnd: "2025-02-22",
      approvedDays: 4,
      status: "Pending",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      (leaveType === "All" || item.type === leaveType) &&
      item.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Leave Application list</h2>
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search employee"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        />
        <select
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="All">All Leave Types</option>
          <option value="Annual Leave">Annual Leave</option>
          <option value="Casual Leave">Casual Leave</option>
        </select>
        <button className="px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded">
          Find
        </button>
        <button
          className="px-4 py-2 text-red-700 bg-green-100 border border-red-600 rounded"
          onClick={() => {
            setSearch("");
            setLeaveType("All");
          }}
        >
          Reset
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        <button className="flex items-center gap-2 px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded">
          <FaFilter /> Filter
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded">
          <FaPlus /> Add Leave Type
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        <CSVLink data={filteredData} filename="leave_applications.csv">
          <button className="flex items-center gap-2 px-3 py-2 text-green-700 bg-green-100 border border-green-600 rounded">
            <FaFileCsv /> CSV
          </button>
        </CSVLink>
        <button className="flex items-center gap-2 px-3 py-2 text-green-700 bg-green-100 border border-green-600 rounded">
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
              <td className="px-4 py-2 border">
                <span
                  className={`px-2 py-1 rounded-lg text-white text-xs ${
                    item.status.includes("Pending")
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveApplicationList;
