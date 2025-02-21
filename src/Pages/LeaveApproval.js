import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";

const LeaveApplicationList = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      id: 1,
      employee: "Maisha Lucy Zamora Gonzales",
      type: "Casual Leaves",
      applyDate: "2025-01-30",
      startDate: "2025-01-30",
      endDate: "2025-01-31",
      days: 2,
      approvedDate: "2025-01-30",
      approvedStart: "2025-01-30",
      approvedEnd: "2025-01-31",
      approvedDays: 2,
      status: "Approved",
    },
    {
      id: 2,
      employee: "Thomas Goodman",
      type: "Annual Leave",
      applyDate: "2025-01-24",
      startDate: "2025-01-24",
      endDate: "2025-01-30",
      days: 7,
      approvedDate: "2025-01-29",
      approvedStart: "2025-01-24",
      approvedEnd: "2025-01-30",
      approvedDays: 7,
      status: "Approved",
    },
  ];

  const filteredData = data.filter((item) =>
    item.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Leave Approval List</h2>
        <input
          type="text"
          placeholder="Search employee"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        />
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
            <th className="px-4 py-2 border">Approved Date</th>
            <th className="px-4 py-2 border">Approved Start Date</th>
            <th className="px-4 py-2 border">Approved End Date</th>
            <th className="px-4 py-2 border">Approved Days</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
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
              <td className="px-4 py-2 border">{item.approvedDate}</td>
              <td className="px-4 py-2 border">{item.approvedStart}</td>
              <td className="px-4 py-2 border">{item.approvedEnd}</td>
              <td className="px-4 py-2 border">{item.approvedDays}</td>
              <td className="px-4 py-2 border">
                <span className="px-2 py-1 text-xs text-white bg-green-500 rounded-lg">
                  {item.status}
                </span>
              </td>
              <td className="flex gap-2 px-4 py-2 border">
                <button className="text-green-600">
                  <FaCheck />
                </button>
                <button className="text-red-600">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveApplicationList;
