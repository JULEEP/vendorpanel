import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AppointmentBookingForm = () => {
  const navigate = useNavigate();

  // State variables
  const [staffList, setStaffList] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientRelation, setPatientRelation] = useState("");

  // Fetch staff and doctor lists on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const staffResponse = await axios.get("/api/staff");
        setStaffList(staffResponse.data);
        const doctorResponse = await axios.get("/api/doctors");
        setDoctorList(doctorResponse.data);
      } catch (error) {
        console.error("Error fetching staff or doctor data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      staffId: selectedStaff,
      doctorId: selectedDoctor,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime,
      patient_name: patientName,
      patient_relation: patientRelation,
    };

    try {
      const response = await axios.post("/api/appointments", appointmentData);
      alert(response.data.message);
      navigate("/appointments"); // Redirect to appointments page
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Appointment booking failed.");
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h3 className="text-lg font-bold mb-4">Book Appointment</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          {/* Staff Name Input */}
          <div className="w-1/4">
            <label className="block text-sm mb-1">Staff Name</label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={selectedStaff}
              onChange={(e) => setSelectedStaff(e.target.value)}
              placeholder="Enter staff name"
            />
          </div>

          {/* Doctor Name Input */}
          <div className="w-1/4">
            <label className="block text-sm mb-1">Doctor Name</label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              placeholder="Enter doctor name"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          {/* Appointment Date Input */}
          <div className="w-1/4">
            <label className="block text-sm mb-1">Appointment Date</label>
            <input
              type="date"
              className="p-2 border rounded w-full"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>

          {/* Appointment Time Input */}
          <div className="w-1/4">
            <label className="block text-sm mb-1">Appointment Time</label>
            <input
              type="time"
              className="p-2 border rounded w-full"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
          </div>

          {/* Patient Name Input */}
          <div className="w-1/4">
            <label className="block text-sm mb-1">Patient Name</label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>

          {/* Patient Relation Input */}
          <div className="w-1/4">
            <label className="block text-sm mb-1">Patient Relation</label>
            <input
              type="text"
              className="p-2 border rounded w-full"
              value={patientRelation}
              onChange={(e) => setPatientRelation(e.target.value)}
            />
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
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentBookingForm;
