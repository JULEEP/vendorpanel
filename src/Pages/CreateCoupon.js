import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const CreateCoupon = () => {
  const categoryColors = {
    Restaurant: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    Showroom: "bg-gradient-to-r from-green-400 to-green-600",
    Electronics: "bg-gradient-to-r from-red-400 to-red-600",
  };

  const [formData, setFormData] = useState({
    name: "",
    discount: "",
    validTill: "",
    category: "Restaurant",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCoupon = (e) => {
    e.preventDefault();

    const newCoupon = {
      id: Date.now(),
      name: formData.name,
      discount: parseInt(formData.discount),
      validTill: formData.validTill,
      color: categoryColors[formData.category],
    };

    console.log("Coupon Created:", newCoupon);

    // Reset form
    setFormData({
      name: "",
      discount: "",
      validTill: "",
      category: "Restaurant",
    });
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-center mb-6 text-blue-900 mt-10">Create New Coupon</h1>

      {/* Coupon Creation Form */}
      <form
        onSubmit={handleAddCoupon}
        className="bg-white p-6 rounded-md shadow-md max-w-4xl mx-auto"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <FaPlus /> Add Coupon
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600 font-medium">Coupon Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
              placeholder="e.g. Summer Feast"
              className="px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600 font-medium">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleFormChange}
              required
              placeholder="e.g. 20"
              className="px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600 font-medium">Valid Till</label>
            <input
              type="date"
              name="validTill"
              value={formData.validTill}
              onChange={handleFormChange}
              required
              className="px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-gray-600 font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleFormChange}
              className="px-3 py-2 border border-gray-300 rounded"
            >
              <option value="Restaurant">Restaurant</option>
              <option value="Showroom">Showroom</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>
        </div>
        <div className="text-right mt-6">
          <button
            type="submit"
            className="bg-purple-900 hover:bg-purple-900 text-white px-6 py-2 rounded text-sm"
          >
            Create Coupon
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCoupon;
