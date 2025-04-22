import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import { useState } from "react";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("Today");

  const vendorSalesData = {
    Today: [{ name: "Today", sales: 1200 }],
    "This Week": [
      { name: "Mon", sales: 300 },
      { name: "Tue", sales: 250 },
      { name: "Wed", sales: 450 },
      { name: "Thu", sales: 500 },
      { name: "Fri", sales: 400 },
      { name: "Sat", sales: 700 },
      { name: "Sun", sales: 600 },
    ],
    "Last Week": [
      { name: "Mon", sales: 250 },
      { name: "Tue", sales: 300 },
      { name: "Wed", sales: 350 },
      { name: "Thu", sales: 400 },
      { name: "Fri", sales: 450 },
      { name: "Sat", sales: 500 },
      { name: "Sun", sales: 550 },
    ],
    "Last Month": [
      { name: "Week 1", sales: 1200 },
      { name: "Week 2", sales: 1500 },
      { name: "Week 3", sales: 1800 },
      { name: "Week 4", sales: 2000 },
    ],
  };

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  // Define a list of colors for the bars
  const barColors = [
    "#FF9800", "#4CAF50", "#2196F3", "#9C27B0", "#FF5722", "#FFC107", "#03A9F4",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gradient-to-r from-blue-100 to-green-100">
      {/* Stats Cards */}
      <div className="md:col-span-4 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">50</div>
          <h4 className="text-lg font-semibold">Total Orders</h4>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">10</div>
          <h4 className="text-lg font-semibold">Pending Coupons</h4>
        </div>

        <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">5</div>
          <h4 className="text-lg font-semibold">Redeemed Today</h4>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="md:col-span-4 p-4 bg-white rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Sales Overview</h3>
        
        {/* Dropdown to select timeframe */}
        <div className="mb-4">
          <select
            className="border rounded p-2"
            value={timeframe}
            onChange={handleTimeframeChange}
          >
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="Last Week">Last Week</option>
            <option value="Last Month">Last Month</option>
          </select>
        </div>

        {/* BarChart based on selected timeframe */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={vendorSalesData[timeframe]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {vendorSalesData[timeframe].map((data, index) => (
              <Bar
                key={index}
                dataKey="sales"
                fill={barColors[index % barColors.length]}  // Cycle through colors if more bars
                name={data.name}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="md:col-span-4 p-6 bg-white rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Products</h3>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Product Name</th>
            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Category</th>
            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Price</th>
            <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Availability</th>
          </tr>
        </thead>
        <tbody>
          {/* Updated products based on your categories */}
          {[
            { id: 1, name: "Fresh Lamb Chops", category: "Meat Shop", price: "$50", available: true },
            { id: 2, name: "Organic Vegetables", category: "Groceries", price: "$25", available: true },
            { id: 3, name: "Pizza Margherita", category: "Restaurant", price: "$15", available: false },
            { id: 4, name: "Chicken Drumsticks", category: "Meat Shop", price: "$18", available: true },
            { id: 5, name: "Frozen Vegetables", category: "Groceries", price: "$12", available: true },
            { id: 6, name: "Grilled Chicken Pizza", category: "Restaurant", price: "$20", available: true },
          ].map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-2 border-b text-sm">{product.name}</td>
              <td className="px-4 py-2 border-b text-sm">{product.category}</td>
              <td className="px-4 py-2 border-b text-sm">{product.price}</td>
              <td className={`px-4 py-2 border-b text-sm ${product.available ? 'text-green-500' : 'text-red-500'}`}>
                {product.available ? "Available" : "Out of Stock"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </div>
  );
};

export default Dashboard;
