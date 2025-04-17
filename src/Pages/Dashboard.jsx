import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import { useState } from "react";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("Yearly");

  const vendorStats = [
    { id: 1, name: "Amy Aphrodite", department: "Production", date: "18-02-2025", img: "https://hrm.bdtask-demoserver.com/assets/user-1.png" },
    { id: 2, name: "Maisha Lucy", department: "Sales", date: "17-02-2025", img: "https://hrm.bdtask-demoserver.com/assets/user-1.png" },
  ];

  const bookingData = [
    { name: "Jan", orders: 120, returns: 5 },
    { name: "Feb", orders: 150, returns: 7 },
    { name: "Mar", orders: 200, returns: 8 },
    { name: "Apr", orders: 175, returns: 4 },
    { name: "May", orders: 190, returns: 10 },
  ];

  const vendorSalesData = [
    { name: "Jan", sales: 5000 },
    { name: "Feb", sales: 7000 },
    { name: "Mar", sales: 6500 },
    { name: "Apr", sales: 8000 },
    { name: "May", sales: 8500 },
  ];

  const recentProducts = [
    { id: 1, name: "Product A", category: "Electronics", price: "$300", available: true },
    { id: 2, name: "Product B", category: "Furniture", price: "$150", available: true },
    { id: 3, name: "Product C", category: "Clothing", price: "$50", available: false },
  ];

  const recentOrders = [
    { orderId: 101, productName: "Product A", quantity: 2, date: "2025-04-10", status: "Completed" },
    { orderId: 102, productName: "Product B", quantity: 1, date: "2025-04-12", status: "Pending" },
    { orderId: 103, productName: "Product C", quantity: 5, date: "2025-04-14", status: "Shipped" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gradient-to-r from-blue-100 to-green-100">
      {/* Stats Cards */}
      <div className="md:col-span-4 p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">50</div>
          <h4 className="text-lg font-semibold">Total Orders</h4>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-green-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">30</div>
          <h4 className="text-lg font-semibold">Products in Stock</h4>
        </div>

        <div className="bg-gradient-to-r from-red-400 to-red-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">5</div>
          <h4 className="text-lg font-semibold">New Returns</h4>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">10</div>
          <h4 className="text-lg font-semibold">Pending Deliveries</h4>
        </div>

        <div className="bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">2</div>
          <h4 className="text-lg font-semibold">Pending Orders</h4>
        </div>

        <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 shadow-lg rounded-lg p-4 text-center text-white">
          <div className="text-3xl font-bold">5</div>
          <h4 className="text-lg font-semibold">Completed Orders</h4>
        </div>
      </div>

      {/* Vendor Sales and Booking Graphs */}
      <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Sales Chart */}
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Vendor Sales (Last 5 Months)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vendorSalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#FF9800" name="Sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Orders and Returns Chart */}
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Orders and Returns (Last 5 Months)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#4CAF50" name="Orders" />
              <Bar dataKey="returns" fill="#F44336" name="Returns" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Products Table */}
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
            {recentProducts.map((product) => (
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

      {/* Recent Orders Table */}
      <div className="md:col-span-4 p-6 bg-white rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Orders</h3>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Order ID</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Product Name</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Quantity</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.orderId}>
                <td className="px-4 py-2 border-b text-sm">{order.orderId}</td>
                <td className="px-4 py-2 border-b text-sm">{order.productName}</td>
                <td className="px-4 py-2 border-b text-sm">{order.quantity}</td>
                <td className="px-4 py-2 border-b text-sm">{order.date}</td>
                <td className={`px-4 py-2 border-b text-sm ${order.status === "Completed" ? 'text-green-500' : order.status === "Pending" ? 'text-yellow-500' : 'text-red-500'}`}>
                  {order.status}
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
