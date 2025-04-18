import { useState } from "react";

const CouponHistoryTable = () => {
  const [couponHistory] = useState([
    {
      id: 1,
      name: "Summer Feast",
      category: "Restaurant",
      discount: 20,
      totalUsed: 5,
      lastUsed: "2025-04-15",
      status: "Active",
      users: [
        { name: "Ravi Kumar", email: "ravi@example.com", phone: "9876543210" },
        { name: "Priya Sharma", email: "priya@example.com", phone: "9876543222" },
      ],
    },
    {
      id: 2,
      name: "Tech Fest",
      category: "Electronics",
      discount: 30,
      totalUsed: 3,
      lastUsed: "2025-04-10",
      status: "Expired",
      users: [
        { name: "Amit Verma", email: "amit@example.com", phone: "9999888877" },
      ],
    },
    {
      id: 3,
      name: "Winter Sale",
      category: "Showroom",
      discount: 25,
      totalUsed: 0,
      lastUsed: null,
      status: "Active",
      users: [],
    },
  ]);

  const getStatusStyle = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Coupon Usage History</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-green-100 text-gray-600">
              <tr>
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">Coupon Name</th>
                <th className="py-2 px-4 border">Category</th>
                <th className="py-2 px-4 border">Discount (%)</th>
                <th className="py-2 px-4 border">Used</th>
                <th className="py-2 px-4 border">Last Used</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Used By (Users)</th>
              </tr>
            </thead>
            <tbody>
              {couponHistory.map((coupon, index) => (
                <tr key={coupon.id} className="text-center">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border font-medium">{coupon.name}</td>
                  <td className="py-2 px-4 border">{coupon.category}</td>
                  <td className="py-2 px-4 border">{coupon.discount}%</td>
                  <td className="py-2 px-4 border">{coupon.totalUsed}</td>
                  <td className="py-2 px-4 border">
                    {coupon.lastUsed ? coupon.lastUsed : "N/A"}
                  </td>
                  <td className="py-2 px-4 border">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(coupon.status)}`}>
                      {coupon.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border text-left">
                    {coupon.users.length > 0 ? (
                      <ul className="list-disc ml-4">
                        {coupon.users.map((user, i) => (
                          <li key={i}>
                            <span className="font-semibold">{user.name}</span><br />
                            <span className="text-xs text-gray-600">{user.email} | {user.phone}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-400">No usage yet</span>
                    )}
                  </td>
                </tr>
              ))}
              {couponHistory.length === 0 && (
                <tr>
                  <td colSpan="8" className="py-4 text-gray-500 text-center">
                    No coupon usage history found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CouponHistoryTable;
