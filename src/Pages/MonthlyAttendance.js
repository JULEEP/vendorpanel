import React, { useState } from "react";

const MonthlyAttendance = () => {
  const [employee, setEmployee] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");

  // Handle Form Submit
  const handleSubmit = () => {
    if (!employee || !year || !month || !timeIn || !timeOut) {
      alert("⚠ Please fill in all required fields!");
      return;
    }

    alert(`✅ Monthly Attendance Submitted Successfully!\n👤 Employee: ${employee}\n📅 Year: ${year}, Month: ${month}\n⏰ Time In: ${timeIn}, Time Out: ${timeOut}`);

    // Clear form fields after submission
    setEmployee("");
    setYear("");
    setMonth("");
    setTimeIn("");
    setTimeOut("");
  };

  return (
    <div className="w-full max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Take Attendance</h2>
      <div className="space-y-4">
        
        {/*Employee Selection */}
        <div>
          <label className="block font-medium">Employee *</label>
          <select
            className="w-full p-2 border rounded-md"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
          </select>
        </div>

        {/*Year Selection */}
        <div>
          <label className="block font-medium">Year *</label>
          <select
            className="w-full p-2 border rounded-md"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>

        {/*Month Selection */}
        <div>
          <label className="block font-medium">Month *</label>
          <select
            className="w-full p-2 border rounded-md"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="January">January</option>
            <option value="February">February</option>
          </select>
        </div>

        {/*Time In Selection */}
        <div>
          <label className="block font-medium">Time In *</label>
          <input
            type="time"
            className="w-full p-2 border rounded-md"
            value={timeIn}
            onChange={(e) => setTimeIn(e.target.value)}
          />
        </div>

        {/*Time Out Selection */}
        <div>
          <label className="block font-medium">Time Out *</label>
          <input
            type="time"
            className="w-full p-2 border rounded-md"
            value={timeOut}
            onChange={(e) => setTimeOut(e.target.value)}
          />
        </div>

        {/*Submit Button with Alert */}
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MonthlyAttendance;
