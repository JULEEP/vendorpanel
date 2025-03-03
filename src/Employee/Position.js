import React, { useState } from "react";

const PositionList = () => {
  const [positions, setPositions] = useState([
    { id: 1, name: "Php Developer", status: "Active", details: "Junior PHP Developer" },
    { id: 2, name: "IT Manager", status: "Active", details: "Senior IT Manager" },
    { id: 3, name: "Engineer", status: "Active", details: "Software Engineer" },
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(null);
  
  const [formData, setFormData] = useState({ name: "", details: "", status: "Active" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.details) {
      setPositions([...positions, { id: positions.length + 1, ...formData }]);
      setShowForm(false);
      setFormData({ name: "", details: "", status: "Active" });
    }
  };

  const handleEdit = (position) => {
    setCurrentPosition(position);
    setFormData({ name: position.name, details: position.details, status: position.status });
    setShowEditForm(true);
  };

  const handleUpdate = () => {
    setPositions(
      positions.map((pos) => (pos.id === currentPosition.id ? { ...pos, ...formData } : pos))
    );
    setShowEditForm(false);
  };

  const handleDelete = (id) => {
    setPositions(positions.filter((pos) => pos.id !== id));
  };

  return (
    <div className="p-4 bg-white">
      <h2 className="mb-4 text-xl font-bold">Position List</h2>
      <button onClick={() => setShowForm(true)} className="p-2 mb-4 text-green-700 bg-green-100 border border-green-600 rounded">
        + Add Position
      </button>
      <table className="w-full bg-white border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border">SI</th>
            <th className="p-2 border">Position Name</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position, index) => (
            <tr key={position.id}>
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{position.name}</td>
              <td className="p-2 border">
                <span className={`px-2 py-1 rounded ${position.status === "Active" ? "text-green-700 bg-green-100 border border-green-600 rounded" : "text-red-700 bg-red-100 border border-red-600 rounded"}`}>
                  {position.status}
                </span>
              </td>
              <td className="p-2 border">
                <button onClick={() => handleEdit(position)} className="p-1 mr-2 text-blue-700 bg-blue-100 border border-blue-600 rounded">✏️</button>
                <button onClick={() => handleDelete(position.id)} className="p-1 text-red-700 bg-red-100 border border-red-600 rounded">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="p-4 bg-white rounded shadow-md">
            <h2 className="mb-2 text-lg font-bold">New Position</h2>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Position Name" className="w-full p-2 mb-2 border" />
            <input type="text" name="details" value={formData.details} onChange={handleInputChange} placeholder="Position Details" className="w-full p-2 mb-2 border" />
            <div className="mb-2">
              <label>
                <input type="radio" name="status" value="Active" checked={formData.status === "Active"} onChange={handleInputChange} /> Active
              </label>
              <label className="ml-4">
                <input type="radio" name="status" value="Inactive" checked={formData.status === "Inactive"} onChange={handleInputChange} /> Inactive
              </label>
            </div>
            <button onClick={handleSubmit} className="p-2 mr-2 text-blue-700 bg-blue-100 border border-blue-600 rounded">Save</button>
            <button onClick={() => setShowForm(false)} className="p-2 text-red-700 bg-red-100 border border-red-600 rounded">Close</button>
          </div>
        </div>
      )}

      {showEditForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="p-4 bg-white rounded shadow-md">
            <h2 className="mb-2 text-lg font-bold">Edit Position</h2>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-2 mb-2 border" />
            <input type="text" name="details" value={formData.details} onChange={handleInputChange} className="w-full p-2 mb-2 border" />
            <div className="mb-2">
              <label>
                <input type="radio" name="status" value="Active" checked={formData.status === "Active"} onChange={handleInputChange} /> Active
              </label>
              <label className="ml-4">
                <input type="radio" name="status" value="Inactive" checked={formData.status === "Inactive"} onChange={handleInputChange} /> Inactive
              </label>
            </div>
            <button onClick={handleUpdate} className="p-2 mr-2 text-blue-700 bg-blue-100 border border-blue-600 rounded">Save</button>
            <button onClick={() => setShowEditForm(false)} className="p-2 text-red-700 bg-red-100 border border-red-600 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PositionList;
