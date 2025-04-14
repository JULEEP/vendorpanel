import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useState } from "react";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("Yearly");

  const staffList = [
    { id: 1, name: "Amy Aphrodite", department: "Production", date: "18-02-2025", img: "https://hrm.bdtask-demoserver.com/assets/user-1.png" },
    { id: 2, name: "Maisha Lucy", department: "", date: "17-02-2025", img: "https://hrm.bdtask-demoserver.com/assets/user-1.png" },
  ];

  const bookingData = [
    { name: "Jan", doctor: 10, diagnostic: 8 },
    { name: "Feb", doctor: 15, diagnostic: 12 },
    { name: "Mar", doctor: 12, diagnostic: 6 },
    { name: "Apr", doctor: 20, diagnostic: 14 },
    { name: "May", doctor: 18, diagnostic: 10 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-100">
      {/* Stats Cards */}
      <div className="md:col-span-4 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-900">5</div>
          <h4 className="text-lg font-semibold text-[#188753]">Companies</h4>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-900">12</div>
          <h4 className="text-lg font-semibold text-[#188753]">Diagnostics</h4>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-900">8</div>
          <h4 className="text-lg font-semibold text-[#188753]">Schedule a Consultation</h4>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-900">3</div>
          <h4 className="text-lg font-semibold text-[#188753]">HRA</h4>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-900">3</div>
          <h4 className="text-lg font-semibold text-[#188753]">Staff</h4>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-900">3</div>
          <h4 className="text-lg font-semibold text-[#188753]">Doctor Appointment</h4>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
          <div className="text-3xl font-bold text-blue-900">3</div>
          <h4 className="text-lg font-semibold text-[#188753]">Diagnostic Booking</h4>
        </div>
      </div>

      {/* Booking Graphs */}
      <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Doctor Appointments Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Doctor Appointments (Last 5 Months)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="doctor" fill="#4CAF50" name="Doctor Appointments" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Diagnostic Bookings Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Diagnostic Bookings (Last 5 Months)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="diagnostic" fill="#2196F3" name="Diagnostic Bookings" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
