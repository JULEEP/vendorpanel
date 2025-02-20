import React, { useState } from "react";

const AttendanceForm = () => {
  const [employee, setEmployee] = useState("");
  const [time, setTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  //Handle Single Employee Submit
  const handleSubmit = () => {
    if (!employee || !time) {
      alert("Please select an employee and choose a time!");
      return;
    }

    alert(`✅ Attendance submitted successfully!\n👤 Employee: ${employee}\n📅 Time: ${time}`);

    setEmployee("");
    setTime("");
  };

  //Handle File Selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //Handle Bulk Import
  const handleImport = () => {
    if (!selectedFile) {
      alert("Please choose an Excel file before importing!");
      return;
    }

    alert(`Bulk attendance imported successfully!\nFile: ${selectedFile.name}`);

    setIsModalOpen(false);
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="p-6 bg-white rounded shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Take Attendance</h2>

        {/*Employee Selection */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">
            Employee <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
          </select>
        </div>

        {/*Time Selection */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">
            Time <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-500"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        {/*Submit Button */}
        <button
          onClick={handleSubmit}
          className="px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded"
        >
          Submit
        </button>

        {/*Bulk Insert Button (Opens Modal) */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 ml-4 text-green-700 bg-green-100 border border-green-600 rounded"
        >
          + Bulk Insert
        </button>
      </div>

      {/*Bulk Insert Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg w-96">
            <h3 className="mb-4 text-lg font-semibold">Bulk Insert</h3>
            
            <p className="mb-2">
              Excel sample file: 
              <button className="px-3 py-1 ml-2 text-green-700 bg-green-100 border border-green-600 rounded">
                bulk.xlsx
              </button>
            </p>

            <input type="file" accept=".xlsx" onChange={handleFileChange} className="w-full mb-4" />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-red-700 bg-green-100 border border-red-600 rounded"
              >
                Close
              </button>
              <button
                onClick={handleImport}
                className="px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceForm;
