import React, { useState } from "react";
import { FaFileCsv, FaFileExcel, FaPlus } from "react-icons/fa";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const Performance = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedScore, setSelectedScore] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Honorato Imogene Curry Terry",
      score: 64,
      date: "2025-01-25",
    },
    {
      id: 2,
      name: "Scarlet Melvin Reese Rogers",
      score: 57,
      date: "2025-01-25",
    },
    { id: 3, name: "Jerome Grace Willis Terry", score: 0, date: "2025-01-07" },
    {
      id: 4,
      name: "Honorato Imogene Curry Terry",
      score: 48,
      date: "2025-01-06",
    },
    {
      id: 5,
      name: "Aquila Elaine Jennings Jefferson",
      score: 0,
      date: "2024-12-23",
    },
    {
      id: 6,
      name: "Kristen Lillith Stout Rodriquez",
      score: 452,
      date: "2024-05-30",
    },
    {
      id: 7,
      name: "Aquila Elaine Jennings Jefferson",
      score: 215,
      date: "2024-05-30",
    },
    {
      id: 8,
      name: "Suchana Noel Mcfarland Mejia",
      score: 2149706304,
      date: "2024-05-30",
    },
  ]);
  const [formData, setFormData] = useState({
    employee: "",
    supervisor: "",
    reviewPeriod: "",
    ratings: {
      knowledge: "P",
      delivery: "P",
      achievement: "P",
    },
    scores: {
      knowledge: 0,
      delivery: 0,
      achievement: 0,
    },
    comments: {
      knowledge: "",
      delivery: "",
      achievement: "",
    },
  });

  const handleRatingChange = (criteria, value, score) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [criteria]: value },
      scores: { ...prev.scores, [criteria]: score },
    }));
}

  const filteredData = dataSource.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const downloadCSV = () => {
    const csvContent = [
      "Employee Name,Score,Date",
      ...dataSource.map((emp) => `${emp.name},${emp.score},${emp.date}`),
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "Employee_Performance.csv");
  };

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(dataSource);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "Employee_Performance.xlsx");
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-2 text-center">
        Employee Performance List
      </h2>
      <div className="flex justify-center my-4">
        <div className="flex space-x-4">
          <button
            onClick={downloadCSV}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaFileCsv className="mr-2" /> CSV
          </button>
          <button
            onClick={downloadExcel}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaFileExcel className="mr-2" /> Excel
          </button>
        </div>
      </div>

      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 px-3 py-2 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FaPlus className="mr-2" /> Add Employee Performance
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-3 px-4 text-left">SI</th>
            <th className="py-3 px-4 text-left">Employee Name</th>
            <th className="py-3 px-4 text-left">Total Score</th>
            <th className="py-3 px-4 text-left">Create Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((employee, index) => (
            <tr key={employee.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">
                {(currentPage - 1) * itemsPerPage + index + 1}
              </td>
              <td className="py-3 px-4">{employee.name}</td>
              <td className="py-3 px-4">{employee.score}</td>
              <td className="py-3 px-4">{employee.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-green-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-green-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {modalOpen && 
      (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Employee Performance Review</h2>
        <button
          onClick={() => setModalOpen(false)}
          className="text-red-500 hover:text-red-700"
        >
          ✖
        </button>
      </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Name of Employee:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Employee Name"
              value={formData.employee}
              onChange={(e) => setFormData({ ...formData, employee: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-gray-700">Review Period:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              placeholder="Review Period in Months"
              value={formData.reviewPeriod}
              onChange={(e) => setFormData({ ...formData, reviewPeriod: e.target.value })}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name and Position of Supervisor:</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Name and Position of Supervisor"
            value={formData.supervisor}
            onChange={(e) => setFormData({ ...formData, supervisor: e.target.value })}
          />
        </div>
        <table className="w-full border-collapse border my-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Criteria</th>
              <th className="border p-2">P (0)</th>
              <th className="border p-2">NI (3)</th>
              <th className="border p-2">G (6)</th>
              <th className="border p-2">VG (9)</th>
              <th className="border p-2">E (12)</th>
              <th className="border p-2">Score</th>
              <th className="border p-2">Comments</th>
            </tr>
          </thead>
          <tbody>
            {[
              { key: "knowledge", label: "Demonstrated Knowledge & Quality of Work" },
              { key: "delivery", label: "Timeliness of Delivery" },
              { key: "achievement", label: "Impact of Achievement" },
            ].map(({ key, label }) => (
              <tr key={key}>
                <td className="border p-2">{label}</td>
                {[0, 3, 6, 9, 12].map((score, index) => (
                  <td className="border p-2 text-center" key={index}>
                    <input
                      type="radio"
                      name={key}
                      value={score}
                      checked={formData.scores[key] === score}
                      onChange={() => handleRatingChange(key, score, score)}
                    />
                  </td>
                ))}
                <td className="border p-2 text-center">{formData.scores[key]}</td>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full border rounded p-1"
                    placeholder="Enter comment"
                    value={formData.comments[key]}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        comments: { ...prev.comments, [key]: e.target.value },
                      }))
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">Submit</button>
        </div>
      </div>
     </div>
      )}
    </div>
  );
};

export default Performance;
