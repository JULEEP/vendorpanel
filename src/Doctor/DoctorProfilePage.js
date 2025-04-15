import React, { useEffect, useState } from "react";
import axios from "axios";

const DoctorProfilePage = () => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const doctorId = localStorage.getItem("doctorId");

        if (!doctorId) {
          alert("Doctor ID not found in localStorage");
          return;
        }

        const response = await axios.get(`https://credenhealth.onrender.com/api/admin/single-doctor/${doctorId}`);
        setDoctor(response.data);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, []);

  if (loading) return <div className="p-4 text-center text-gray-600">Loading doctor details...</div>;
  if (!doctor) return <div className="p-4 text-center text-red-600">Doctor not found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Doctor Profile</h2>

      {doctor.image && (
        <div className="mb-8 flex justify-center">
          <img
            src={`http://localhost:4000${doctor.image}`}
            alt="Doctor"
            className="max-w-md w-full h-auto rounded-lg border shadow-md object-cover"
          />
        </div>
      )}

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm bg-gray-50 p-6 rounded border">
        <Info label="Doctor ID" value={doctor._id} />
        <Info label="Name" value={doctor.name} />
        <Info label="Email" value={doctor.email} />
        <Info label="Specialization" value={doctor.specialization} />
        <Info label="Qualification" value={doctor.qualification} />
        <Info label="Description" value={doctor.description} />
        <Info label="Consultation Fee" value={`₹${doctor.consultation_fee}`} />
        <Info label="Address" value={doctor.address} />
        <Info label="Category" value={doctor.category} />
        <Info label="Created At" value={formatDate(doctor.createdAt)} />
        <Info label="Updated At" value={formatDate(doctor.updatedAt)} />
      </div>

      {/* Schedule */}
      {doctor.schedule && doctor.schedule.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Schedule</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doctor.schedule.map((slot, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-sm">
                <h4 className="text-xl font-semibold">{slot.day}</h4>
                <p className="text-gray-700">{slot.startTime} - {slot.endTime}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Info Component
const Info = ({ label, value }) => (
  <div className="bg-white p-3 rounded shadow-sm border hover:shadow-md transition duration-200">
    <span className="text-xs text-gray-500 font-medium block mb-1">{label}</span>
    <span className="text-gray-800 font-semibold">{value || "N/A"}</span>
  </div>
);

// Utility to format date
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default DoctorProfilePage;
