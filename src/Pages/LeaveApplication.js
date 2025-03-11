import { saveAs } from "file-saver";
import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { FaFileCsv, FaFileExcel, FaFilter, FaPlus } from "react-icons/fa";
import * as XLSX from "xlsx";

const LeaveApplicationList = () => {
  const [search, setSearch] = useState("");
  const [leaveType, setLeaveType] = useState("All");
  const [employeeFilter, setEmployeeFilter] = useState("All employees");
  const [showForm, setShowForm] = useState(false);

  // State for form fields
  const [employee, setEmployee] = useState("");
  const [leaveTypeInput, setLeaveTypeInput] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  // State for leave applications fetched from API
  const [leaveApplications, setLeaveApplications] = useState([]);

  // Fetch leave applications from API on component mount
  useEffect(() => {
    const fetchLeaveApplications = async () => {
      try {
        const response = await fetch("https://hr-backend-hifb.onrender.com/api/hr/all-leaves");
        const data = await response.json();
        setLeaveApplications(data);
      } catch (error) {
        console.error("Error fetching leave applications:", error);
      }
    };

    fetchLeaveApplications();
  }, []);

  const headers = [
    { label: "SI", key: "id" },
    { label: "Employee Name", key: "employee" },
    { label: "Leave Type", key: "leaveType" },
    { label: "Apply Date", key: "createdAt" },
    { label: "Leave Start Date", key: "fromDate" },
    { label: "Leave End Date", key: "endDate" },
    { label: "Reason", key: "reason" },
    { label: "Status", key: "status" },
  ];

  const filteredData = leaveApplications.filter(
    (item) =>
      (leaveType === "All" || item.leaveType === leaveType) &&
      (employeeFilter === "All employees" || item.employee === employeeFilter) &&
      item.employee.toLowerCase().includes(search.toLowerCase())
  );

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(leaveApplications);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leave Applications");

    // Convert to Excel file and trigger download
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const excelFile = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8" });

    saveAs(excelFile, "leave_applications.xlsx");
  };

  // API call function for creating leave application
  const createLeaveApplication = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!employee || !leaveTypeInput || !fromDate || !endDate || !reason) {
      alert("Please fill in all required fields.");
      return; // Stop if validation fails
    }

    // Prepare the data
    const leaveApplicationData = {
      employee,
      leaveType: leaveTypeInput,
      fromDate: new Date(fromDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      reason,
    };

    console.log("Data being sent:", leaveApplicationData); // Log data for debugging

    try {
      const response = await fetch("https://hr-backend-hifb.onrender.com/api/hr/create-leaveapplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leaveApplicationData),
      });

      if (response.ok) {
        const newLeaveApplication = await response.json();
        alert("Leave application created successfully!");
        console.log(newLeaveApplication); // Log the response from the server
      } else {
        const error = await response.json();
        alert("Error: " + error.message);
        console.error("API Error:", error); // Log any errors from the API
      }
    } catch (error) {
      console.error("Error creating leave application:", error);
      alert("Error creating leave application. Check the console for details.");
    }
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
          {leaveApplications.map((item) => (
            <option key={item._id} value={item.employee}>
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
        <CSVLink data={leaveApplications} headers={headers} filename="leave_applications.csv" className="px-4 py-2 text-white bg-green-500 rounded">
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
            <th className="px-4 py-2 border">Leave Type</th>
            <th className="px-4 py-2 border">Apply Date</th>
            <th className="px-4 py-2 border">Leave Start Date</th>
            <th className="px-4 py-2 border">Leave End Date</th>
            <th className="px-4 py-2 border">Reason</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item._id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">{item.employee}</td>
              <td className="px-4 py-2 border">{item.leaveType}</td>
              <td className="px-4 py-2 border">{new Date(item.createdAt).toLocaleDateString()}</td>
              <td className="px-4 py-2 border">{new Date(item.fromDate).toLocaleDateString()}</td>
              <td className="px-4 py-2 border">{new Date(item.endDate).toLocaleDateString()}</td>
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
            <select
              className="w-full p-2 mb-2 border rounded"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
            >
              <option>Select employee</option>
              {leaveApplications.map((item) => (
                <option key={item._id} value={item.employee}>
                  {item.employee}
                </option>
              ))}
            </select>
            <label>Leave Type*</label>
            <select
              className="w-full p-2 mb-2 border rounded"
              value={leaveTypeInput}
              onChange={(e) => setLeaveTypeInput(e.target.value)}
            >
              <option>Select leave type</option>
              <option value="Annual Leave">Annual</option>
              <option value="Casual Leave">Casual</option>
              <option value="Sick Leave">Sick</option>
            </select>
            <label>From Date*</label>
            <input
              type="date"
              className="w-full p-2 mb-2 border rounded"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <label>End Date*</label>
            <input
              type="date"
              className="w-full p-2 mb-2 border rounded"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <label>Reason</label>
            <textarea
              className="w-full p-2 mb-4 border rounded"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2">
              <button className="px-4 py-2 text-red-700 bg-red-100 border border-red-600 rounded" onClick={() => setShowForm(false)}>
                Close
              </button>
              <button className="px-4 py-2 text-blue-700 bg-blue-100 border border-blue-600 rounded" onClick={createLeaveApplication}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveApplicationList;
