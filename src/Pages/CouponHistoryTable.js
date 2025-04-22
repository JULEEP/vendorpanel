import { useState } from "react";

const CouponHistoryTable = () => {
  const [couponHistory] = useState([
    // 1. Complete dummy data
    {
      customerId: "C001",
      couponId: "SUMMER20",
      discount: 20,
      couponDownloadDate: "2025-04-01",
      couponReadingDate: "2025-04-10",
      couponReadingTime: "2 minutes",
      couponOrderDetails: "Restaurant: Summer Feast, 2 pizzas",
      orderValue: 35.50,
      feedback: "Great offer, loved the meal!",
    },
    // 2. Partial data (some null fields)
    {
      customerId: "C002",
      couponId: "TECH30",
      discount: 30,
      couponDownloadDate: "2025-03-20",
      couponReadingDate: null,
      couponReadingTime: "3 minutes",
      couponOrderDetails: "Electronics: Tech Fest, Smartphone",
      orderValue: 299.99,
      feedback: null,
    },
    // 3. Partial data (some null fields)
    {
      customerId: "C003",
      couponId: "WINTER25",
      discount: 25,
      couponDownloadDate: null,
      couponReadingDate: "2025-03-01",
      couponReadingTime: "5 minutes",
      couponOrderDetails: null,
      orderValue: null,
      feedback: "Loved the jacket, a bit pricey though.",
    },
    // 4. Null data (all fields null)
    {
      customerId: "C004",
      couponId: null,
      discount: null,
      couponDownloadDate: null,
      couponReadingDate: null,
      couponReadingTime: null,
      couponOrderDetails: null,
      orderValue: null,
      feedback: null,
    },
    // 5. Complete dummy data
    {
      customerId: "C005",
      couponId: "PIZZA10",
      discount: 10,
      couponDownloadDate: "2025-04-05",
      couponReadingDate: "2025-04-08",
      couponReadingTime: "4 minutes",
      couponOrderDetails: "Restaurant: Pizza Night, 3 pizzas",
      orderValue: 45.00,
      feedback: "Awesome pizza, fast delivery.",
    },
    // 6. Complete dummy data
    {
      customerId: "C006",
      couponId: "GADGET20",
      discount: 20,
      couponDownloadDate: "2025-04-10",
      couponReadingDate: "2025-04-11",
      couponReadingTime: "2 minutes",
      couponOrderDetails: "Electronics: Gadget Discount, Bluetooth Speaker",
      orderValue: 75.25,
      feedback: "Great value for money, highly recommend.",
    },
  ]);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Coupon Usage History</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-green-100 text-gray-600">
              <tr>
                <th className="py-2 px-4 border">Customer ID</th>
                <th className="py-2 px-4 border">Coupon ID</th>
                <th className="py-2 px-4 border">Discount (%)</th>
                <th className="py-2 px-4 border">Coupon Download Date</th>
                <th className="py-2 px-4 border">Coupon Reading Date</th>
                <th className="py-2 px-4 border">Coupon Reading Time</th>
                <th className="py-2 px-4 border">Coupon Order Details</th>
                <th className="py-2 px-4 border">Order Value (Amount)</th>
                <th className="py-2 px-4 border">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {couponHistory.map((coupon, index) => (
                <tr key={coupon.couponId || index} className="text-center">
                  <td className="py-2 px-4 border">{coupon.customerId || "N/A"}</td>
                  <td className="py-2 px-4 border">{coupon.couponId || "N/A"}</td>
                  <td className="py-2 px-4 border">{coupon.discount ? `${coupon.discount}%` : "N/A"}</td>
                  <td className="py-2 px-4 border">{coupon.couponDownloadDate || "N/A"}</td>
                  <td className="py-2 px-4 border">{coupon.couponReadingDate || "N/A"}</td>
                  <td className="py-2 px-4 border">{coupon.couponReadingTime || "N/A"}</td>
                  <td className="py-2 px-4 border">{coupon.couponOrderDetails || "N/A"}</td>
                  <td className="py-2 px-4 border">{coupon.orderValue ? `$${coupon.orderValue.toFixed(2)}` : "N/A"}</td>
                  <td className="py-2 px-4 border">{coupon.feedback || "N/A"}</td>
                </tr>
              ))}
              {couponHistory.length === 0 && (
                <tr>
                  <td colSpan="9" className="py-4 text-gray-500 text-center">
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
