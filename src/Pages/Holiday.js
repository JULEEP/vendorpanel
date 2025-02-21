import { differenceInDays, format } from "date-fns";
import React, { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const HolidayList = () => {
  const [holidays, setHolidays] = useState([
    { id: 1, name: "Christmas", from: "2024-12-25", to: "2024-12-26" },
    { id: 2, name: "Diwali", from: "2024-11-11", to: "2024-11-14" },
  ]);
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setHolidays(holidays.filter((holiday) => holiday.id !== id));
  };

  const handleSave = (holiday) => {
    if (holiday.id) {
      setHolidays(
        holidays.map((h) => (h.id === holiday.id ? holiday : h))
      );
    } else {
      setHolidays([
        ...holidays,
        { ...holiday, id: holidays.length + 1 },
      ]);
    }
    setShowModal(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Holiday List</h2>
        <button
          className="flex items-center px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded"
          onClick={() => {
            setModalData(null);
            setShowModal(true);
          }}
        >
          <FaPlus className="mr-2" /> Add Holiday
        </button>
      </div>
      <table className="w-full bg-white rounded shadow-md">
        <thead>
          <tr className="text-left bg-gray-200">
            <th className="p-2">#</th>
            <th className="p-2">Holiday Name</th>
            <th className="p-2">From</th>
            <th className="p-2">To</th>
            <th className="p-2">Total Days</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday, index) => (
            <tr key={holiday.id} className="border-t">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{holiday.name}</td>
              <td className="p-2">{format(new Date(holiday.from), "yyyy-MM-dd")}</td>
              <td className="p-2">{format(new Date(holiday.to), "yyyy-MM-dd")}</td>
              <td className="p-2">
                {differenceInDays(new Date(holiday.to), new Date(holiday.from)) + 1}
              </td>
              <td className="flex gap-2 p-2">
                <button
                  className="text-blue-600"
                  onClick={() => {
                    setModalData(holiday);
                    setShowModal(true);
                  }}
                >
                  <FaEdit />
                </button>
                <button className="text-red-600" onClick={() => handleDelete(holiday.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <HolidayModal
          data={modalData}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

const HolidayModal = ({ data, onClose, onSave }) => {
  const [name, setName] = useState(data?.name || "");
  const [from, setFrom] = useState(data?.from || "");
  const [to, setTo] = useState(data?.to || "");

  const handleSubmit = () => {
    if (name && from && to) {
      onSave({ id: data?.id, name, from, to });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 bg-white rounded shadow-lg w-96">
        <h2 className="mb-4 text-xl">{data ? "Edit Holiday" : "New Holiday"}</h2>
        <label className="block mb-2">Holiday Name*</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="block mt-2 mb-2">From Date*</label>
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <label className="block mt-2 mb-2">To Date*</label>
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 mr-2 text-red-700 bg-green-100 border border-red-600 rounded" onClick={onClose}>Close</button>
          <button className="px-4 py-2 text-blue-700 bg-green-100 border border-blue-600 rounded" onClick={handleSubmit}>
            {data ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HolidayList;
