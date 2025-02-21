

import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";

const initialCandidates = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Candidate ${i + 1}`,
  candidateId: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
  photograph: i < 2 ? "https://cdn-icons-png.flaticon.com/512/610/610120.png" : "", // Only 2 have images
  email: `candidate${i + 1}@mail.com`,
  ssn: i % 2 === 0 ? `SSN ${i + 1}` : "-",
  phone: `+1(555) 123-45${i}`,
}));

const Recruitment = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentCandidates = candidates.slice(firstIndex, lastIndex);

  // Handle Delete
  const handleDelete = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
  };

  // Handle View
  const handleView = (candidate) => {
    alert(`Viewing details of ${candidate.name}`);
  };

  // Handle Edit
  const handleEdit = (candidate) => {
    alert(`Editing details of ${candidate.name}`);
  };

  // Handle Add New Candidate
  const handleAddNew = () => {
    if (newCandidate.name && newCandidate.email && newCandidate.phone) {
      const newEntry = {
        id: candidates.length + 1,
        name: newCandidate.name,
        candidateId: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        photograph: candidates.length < 2 ? "https://cdn-icons-png.flaticon.com/512/610/610120.png" : "", // First two new candidates get images
        email: newCandidate.email,
        ssn: "-",
        phone: newCandidate.phone,
      };
      setCandidates([...candidates, newEntry]);
      setShowForm(false);
      setNewCandidate({ name: "", email: "", phone: "" });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="p-4 overflow-x-auto max-w-6xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Candidate List</h2>
          <button onClick={() => setShowForm(true)} className="bg-black text-white p-2 rounded flex items-center">
            <FaPlus className="mr-2" /> Add New Candidate
          </button>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100 border border-gray-300">
                <th className="p-2 border border-gray-300">SL</th>
                <th className="p-2 border border-gray-300">Name</th>
                <th className="p-2 border border-gray-300">Candidate ID</th>
                <th className="p-2 border border-gray-300">Photograph</th>
                <th className="p-2 border border-gray-300">Email</th>
                <th className="p-2 border border-gray-300">SSN</th>
                <th className="p-2 border border-gray-300">Phone</th>
                <th className="p-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentCandidates.map((candidate, index) => (
                <tr key={candidate.id} className="border border-gray-300">
                  <td className="p-2 border border-gray-300 text-center">{firstIndex + index + 1}</td>
                  <td className="p-2 border border-gray-300">{candidate.name}</td>
                  <td className="p-2 border border-gray-300">{candidate.candidateId}</td>
                  <td className="p-2 border border-gray-300 text-center">
                    {candidate.photograph ? (
                      <img src={candidate.photograph} alt="Profile" className="w-10 h-10 rounded-full mx-auto" />
                    ) : (
                      <span className="text-gray-500">No Preview</span>
                    )}
                  </td>
                  <td className="p-2 border border-gray-300">{candidate.email}</td>
                  <td className="p-2 border border-gray-300">{candidate.ssn}</td>
                  <td className="p-2 border border-gray-300">{candidate.phone}</td>
                  <td className="p-2 border border-gray-300 flex gap-2 justify-center">
                    <button onClick={() => handleView(candidate)} className="p-2 bg-green-500 text-white rounded"><FaEye /></button>
                    <button onClick={() => handleEdit(candidate)} className="p-2 bg-blue-500 text-white rounded"><FaEdit /></button>
                    <button onClick={() => handleDelete(candidate.id)} className="p-2 bg-red-500 text-white rounded"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-4 gap-4">
          <button
            className="p-2 text-black bg-gray-200 rounded"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className={`text-lg font-bold ${currentPage > 1 ? "text-olive-600" : "text-black"}`}>
            {currentPage}
          </span>
          <button
            className="p-2 text-black bg-gray-200 rounded"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(candidates.length / itemsPerPage)))}
            disabled={lastIndex >= candidates.length}
          >
            Next
          </button>
        </div>
      </div>

      {/* Add Candidate Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Add New Candidate</h3>
            <input type="text" placeholder="Name" className="border p-2 w-full mb-2" onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })} />
            <input type="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={(e) => setNewCandidate({ ...newCandidate, email: e.target.value })} />
            <input type="text" placeholder="Phone" className="border p-2 w-full mb-2" onChange={(e) => setNewCandidate({ ...newCandidate, phone: e.target.value })} />
            <button onClick={handleAddNew} className="bg-black text-white p-2 rounded mr-2">Add</button>
            <button onClick={() => setShowForm(false)} className="bg-red-500 text-white p-2 rounded">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recruitment;

