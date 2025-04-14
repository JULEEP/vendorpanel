import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DoctorDetailsForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [qualification, setQualification] = useState("");
  const [description, setDescription] = useState("");
  const [consultationFee, setConsultationFee] = useState("");
  const [address, setAddress] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object to handle file and form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("specialization", specialization);
    formData.append("qualification", qualification);
    formData.append("description", description);
    formData.append("consultation_fee", consultationFee);
    formData.append("address", address);

    // Append the image if selected
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      setLoading(true);

      // Send the POST request to create a new doctor
      const response = await axios.post("https://credenhealth.onrender.com/api/admin/create-doctor", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important to send form data with a file
        },
      });

      // Success message and redirect
      alert("Doctor created successfully!");
    } catch (error) {
      console.error("Error creating doctor:", error);
      alert("Error creating doctor. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h3 className="text-lg font-bold mb-4">Doctor Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <div className="w-1/4">
            <label className="block text-sm mb-1">Name</label>
            <input
              className="p-2 border rounded w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-1/4">
            <label className="block text-sm mb-1">Category</label>
            <input
              className="p-2 border rounded w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="w-1/4">
            <label className="block text-sm mb-1">Specialization</label>
            <input
              className="p-2 border rounded w-full"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </div>

          <div className="w-1/4">
            <label className="block text-sm mb-1">Qualification</label>
            <input
              className="p-2 border rounded w-full"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Description</label>
          <textarea
            className="p-2 border rounded w-full"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/4">
            <label className="block text-sm mb-1">Consultation Fee</label>
            <input
              type="number"
              className="p-2 border rounded w-full"
              value={consultationFee}
              onChange={(e) => setConsultationFee(e.target.value)}
            />
          </div>

          <div className="w-2/4">
            <label className="block text-sm mb-1">Clinic Address</label>
            <input
              className="p-2 border rounded w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="w-1/4">
            <label className="block text-sm mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border rounded w-full"
            />
            {imageFile && (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Preview"
                className="mt-2 rounded border"
                style={{ height: "80px", width: "auto" }}
              />
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 text-red-700 bg-red-100 border border-red-600 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-blue-700 bg-blue-100 border border-blue-600 rounded"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorDetailsForm;
