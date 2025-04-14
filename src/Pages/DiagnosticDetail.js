import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DiagnosticDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [center, setCenter] = useState(null);

  useEffect(() => {
    // Fetch the diagnostic center details using the ID from the URL
    const fetchCenterDetails = async () => {
      try {
        const response = await fetch(`https://credenhealth.onrender.com/api/admin/get-single/${id}`);
        const data = await response.json();
        setCenter(data.diagnostic); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching center details:", error);
      }
    };

    fetchCenterDetails();
  }, [id]); // Trigger fetch when `id` changes

  if (!center) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold">Diagnostic Center Details</h2>

      {/* All Details in a Single Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full border rounded text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border text-left">Name</th>
              <th className="p-2 border text-left">Email</th>
              <th className="p-2 border text-left">Phone</th>
              <th className="p-2 border text-left">Address</th>
              <th className="p-2 border text-left">Center Type</th>
              <th className="p-2 border text-left">Country</th>
              <th className="p-2 border text-left">State</th>
              <th className="p-2 border text-left">City</th>
              <th className="p-2 border text-left">Pincode</th>
              <th className="p-2 border text-left">GST Number</th>
              <th className="p-2 border text-left">Center Strength</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">{center.name}</td>
              <td className="p-2 border">{center.email}</td>
              <td className="p-2 border">{center.phone}</td>
              <td className="p-2 border">{center.address}</td>
              <td className="p-2 border">{center.centerType}</td>
              <td className="p-2 border">{center.country}</td>
              <td className="p-2 border">{center.state}</td>
              <td className="p-2 border">{center.city}</td>
              <td className="p-2 border">{center.pincode}</td>
              <td className="p-2 border">{center.gstNumber}</td>
              <td className="p-2 border">{center.centerStrength}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Contact Persons Table */}
      <h3 className="mt-6 text-lg font-semibold">Contact Persons</h3>
      <div className="overflow-x-auto mt-2">
        <table className="w-full border rounded text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border text-left">Name</th>
              <th className="p-2 border text-left">Designation</th>
              <th className="p-2 border text-left">Email</th>
              <th className="p-2 border text-left">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {center.contactPersons.map((contact, idx) => (
              <tr key={idx} className="hover:bg-gray-100 border-b">
                <td className="p-2 border">{contact.name}</td>
                <td className="p-2 border">{contact.designation}</td>
                <td className="p-2 border">{contact.contactEmail}</td>
                <td className="p-2 border">{contact.contactNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tests Table */}
      <h3 className="mt-6 text-lg font-semibold">Tests Offered</h3>
      <div className="overflow-x-auto mt-2">
        <table className="w-full border rounded text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border text-left">Test Name</th>
              <th className="p-2 border text-left">Description</th>
              <th className="p-2 border text-left">Price</th>
              <th className="p-2 border text-left">Offer Price</th>
            </tr>
          </thead>
          <tbody>
            {center.tests.map((test, idx) => (
              <tr key={idx} className="hover:bg-gray-100 border-b">
                <td className="p-2 border">{test.test_name}</td>
                <td className="p-2 border">{test.description}</td>
                <td className="p-2 border">{test.price}</td>
                <td className="p-2 border">{test.offerPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticDetail;
