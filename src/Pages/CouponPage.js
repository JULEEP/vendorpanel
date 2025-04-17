import { useState } from "react";
import { FaHamburger, FaShoppingBag, FaTv, FaFilter } from "react-icons/fa"; // Icons for categories

const CouponsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [coupons] = useState([
    // Coupons for Restaurants
    {
      category: "Restaurant",
      coupons: [
        { id: 1, name: "Summer Feast", discount: 20, validTill: "31-07-2025", color: "bg-gradient-to-r from-yellow-400 to-yellow-600" },
        { id: 2, name: "Family Dinner", discount: 15, validTill: "31-12-2025", color: "bg-gradient-to-r from-orange-400 to-orange-600" },
        { id: 3, name: "Pizza Night", discount: 10, validTill: "15-06-2025", color: "bg-gradient-to-r from-red-400 to-red-600" },
        { id: 4, name: "Fast Food Frenzy", discount: 25, validTill: "01-09-2025", color: "bg-gradient-to-r from-green-400 to-green-600" },
        { id: 5, name: "Healthy Meal", discount: 30, validTill: "30-11-2025", color: "bg-gradient-to-r from-blue-400 to-blue-600" },
      ]
    },
    // Coupons for Showrooms
    {
      category: "Showroom",
      coupons: [
        { id: 6, name: "Winter Sale", discount: 25, validTill: "15-08-2025", color: "bg-gradient-to-r from-blue-400 to-blue-600" },
        { id: 7, name: "New Arrival", discount: 10, validTill: "31-01-2025", color: "bg-gradient-to-r from-green-400 to-green-600" },
        { id: 8, name: "Fashion Week", discount: 15, validTill: "30-09-2025", color: "bg-gradient-to-r from-purple-400 to-purple-600" },
        { id: 9, name: "Spring Collection", discount: 20, validTill: "10-12-2025", color: "bg-gradient-to-r from-yellow-400 to-yellow-600" },
        { id: 10, name: "Exclusive Deals", discount: 35, validTill: "01-07-2025", color: "bg-gradient-to-r from-pink-400 to-pink-600" },
      ]
    },
    // Coupons for Electronics
    {
      category: "Electronics",
      coupons: [
        { id: 11, name: "Tech Fest", discount: 30, validTill: "20-05-2025", color: "bg-gradient-to-r from-red-400 to-red-600" },
        { id: 12, name: "Gadget Discount", discount: 20, validTill: "30-09-2025", color: "bg-gradient-to-r from-purple-400 to-purple-600" },
        { id: 13, name: "Smartphone Sale", discount: 15, validTill: "31-12-2025", color: "bg-gradient-to-r from-blue-500 to-blue-700" },
        { id: 14, name: "Laptop Offer", discount: 25, validTill: "15-07-2025", color: "bg-gradient-to-r from-green-400 to-green-600" },
        { id: 15, name: "Headphone Deals", discount: 10, validTill: "30-06-2025", color: "bg-gradient-to-r from-orange-400 to-orange-600" },
      ]
    },
  ]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredCoupons = selectedCategory === "All" 
    ? coupons 
    : coupons.filter((category) => category.category === selectedCategory);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-green-100">
      <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">Vendor Coupons by Category</h1>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-6">
        <button 
          onClick={() => handleCategorySelect("All")}
          className={`px-4 py-2 rounded-md text-white ${selectedCategory === "All" ? "bg-blue-500" : "bg-gray-500 hover:bg-gray-600"}`}
        >
          <FaFilter className="inline-block mr-2" /> All
        </button>
        <button 
          onClick={() => handleCategorySelect("Restaurant")}
          className={`px-4 py-2 rounded-md text-white ${selectedCategory === "Restaurant" ? "bg-yellow-500" : "bg-gray-500 hover:bg-gray-600"}`}
        >
          <FaHamburger className="inline-block mr-2" /> Restaurant
        </button>
        <button 
          onClick={() => handleCategorySelect("Showroom")}
          className={`px-4 py-2 rounded-md text-white ${selectedCategory === "Showroom" ? "bg-green-500" : "bg-gray-500 hover:bg-gray-600"}`}
        >
          <FaShoppingBag className="inline-block mr-2" /> Showroom
        </button>
        <button 
          onClick={() => handleCategorySelect("Electronics")}
          className={`px-4 py-2 rounded-md text-white ${selectedCategory === "Electronics" ? "bg-red-500" : "bg-gray-500 hover:bg-gray-600"}`}
        >
          <FaTv className="inline-block mr-2" /> Electronics
        </button>
      </div>

      {/* Loop through each category and display its coupons */}
      {filteredCoupons.map((category) => (
        <div key={category.category} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h2>

          {/* Coupons List for each category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {category.coupons.map((coupon) => (
              <div
                key={coupon.id}
                className={`${coupon.color} shadow-lg rounded-lg p-4 text-white hover:shadow-xl transition-all`}
              >
                <div className="text-sm font-semibold mb-2">{coupon.name}</div>
                <div className="text-xs mb-1">Discount: {coupon.discount}%</div>
                <div className="text-xs mb-2">Valid Till: {coupon.validTill}</div>
                <div className="flex justify-between items-center mt-3 text-xs">
                  <button className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-200">
                    Edit
                  </button>
                  <button className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-200">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouponsPage;
