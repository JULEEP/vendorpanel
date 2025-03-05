import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { utils, writeFile } from "xlsx";

const initialAwards = [
  { id: 1, name: "Silly", description: "cdvfgbh", gift: "Pancake", date: "2025-02-02", employee: "Scarlet Melvin Reese Rogers", awardedBy: "KOZHI" },
  { id: 2, name: "Stupid", description: "Just checking", gift: "P1000", date: "2025-02-12", employee: "Amy Aphrodite Zamora Peck", awardedBy: "Loiti" },
  { id: 3, name: "Fool", description: "fools", gift: "nada", date: "2025-02-12", employee: "Amy Aphrodite Zamora Peck", awardedBy: "King of the fools" },
  { id: 4, name: "Ban", description: "Anjay slebew", gift: "10", date: "2025-01-08", employee: "Dawn Cobb", awardedBy: "150" },
];

export default function AwardList() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "", gift: "", date: "", employee: "", awardedBy: "" });
  const [awards, setAwards] = useState(initialAwards);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const exportData = (type) => {
    const filteredAwards = awards.filter((award) => award.name.toLowerCase().includes(search.toLowerCase()));
    const ws = utils.json_to_sheet(filteredAwards);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Awards");
    writeFile(wb, `awards.${type}`);
  };

  const handleDelete = () => {
    const updatedAwards = awards.filter((award) => award.id !== selectedAward.id);
    setAwards(updatedAwards);
    setDeleteModal(false);
    setSuccessModal(true);
  };

  const handleEdit = () => {
    const updatedAwards = awards.map((award) =>
      award.id === selectedAward.id ? { ...award, ...formData } : award
    );
    setAwards(updatedAwards);
    setEditModal(false);
    setSuccessModal(true);
  };

  const handleAddAward = () => {
    const newAward = { id: Date.now(), ...formData };
    setAwards([...awards, newAward]);
    setFormData({ name: "", description: "", gift: "", date: "", employee: "", awardedBy: "" });
    setShowModal(false);
    setSuccessModal(true);
  };

  const filteredAwards = awards.filter((award) => award.name.toLowerCase().includes(search.toLowerCase()));
  const totalPages = Math.ceil(filteredAwards.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredAwards.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Award List</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={() => setShowModal(true)}>+ Add New Award</button>
      </div>
      <div className="flex justify-between mb-4">
        <input
          className="w-1/3 p-2 border rounded"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          <button className="bg-gray-200 px-4 py-2 rounded" onClick={() => exportData("csv")}>CSV</button>
          <button className="bg-gray-200 px-4 py-2 rounded" onClick={() => exportData("xlsx")}>Excel</button>
        </div>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="p-2 border">Sl</th>
            <th className="p-2 border">Award Name</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Gift Item</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Employee Name</th>
            <th className="p-2 border">Award By</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((award, index) => (
            <tr key={award.id} className="border-b">
              <td className="p-2 border">{indexOfFirstRecord + index + 1}</td>
              <td className="p-2 border">{award.name}</td>
              <td className="p-2 border">{award.description}</td>
              <td className="p-2 border">{award.gift}</td>
              <td className="p-2 border">{award.date}</td>
              <td className="p-2 border">{award.employee}</td>
              <td className="p-2 border">{award.awardedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 gap-2">
        <button disabled={currentPage === 1} className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50" onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={currentPage === totalPages} className="px-3 py-1 bg-purple-600 rounded disabled:opacity-50" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>

      {/* Add New Award Modal */}
      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Add New Award</h2>

      <input
        className="w-full p-2 border rounded mb-2"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Award Name"
      />
      <input
        className="w-full p-2 border rounded mb-2"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        className="w-full p-2 border rounded mb-2"
        name="gift"
        value={formData.gift}
        onChange={handleInputChange}
        placeholder="Gift Item"
      />
      <input
        className="w-full p-2 border rounded mb-2"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        placeholder="Date"
      />
      <input
        className="w-full p-2 border rounded mb-2"
        name="employee"
        value={formData.employee}
        onChange={handleInputChange}
        placeholder="Employee Name"
      />
      <input
        className="w-full p-2 border rounded mb-2"
        name="awardedBy"
        value={formData.awardedBy}
        onChange={handleInputChange}
        placeholder="Awarded By"
      />

      <div className="flex justify-end gap-2 mt-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddAward}
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}


      {/* Edit Award Modal */}
      {editModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Edit Award</h2>

      <input
        className="w-full p-2 border rounded mb-2"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Award Name"
      />
      <input
        className="w-full p-2 border rounded mb-2"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        className="w-full p-2 border rounded mb-2"
        name="gift"
        value={formData.gift}
        onChange={handleInputChange}
        placeholder="Gift Item"
      />
      <input
        className="w-full p-2 border rounded mb-2"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        placeholder="Date"
      />
      <input
        className="w-full p-2 border rounded mb-2"
        name="employee"
        value={formData.employee}
        onChange={handleInputChange}
        placeholder="Employee Name"
      />
      <input
        className="w-full p-2 border rounded mb-2"
        name="awardedBy"
        value={formData.awardedBy}
        onChange={handleInputChange}
        placeholder="Awarded By"
      />

      <div className="flex justify-end gap-2 mt-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => setEditModal(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleEdit}
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}

      {/* Delete Modal */}
      {deleteModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Are you sure to remove?</h2>
      <div className="flex justify-end gap-2 mt-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={() => setDeleteModal(false)}
        >
          Cancel
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Yes
        </button>
      </div>
    </div>
  </div>
)}


      {/* Success Modal */}
      {successModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-semibold mb-4">Operation Successful</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setSuccessModal(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
