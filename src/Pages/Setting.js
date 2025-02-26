import React, { useEffect, useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    companyName: "",
    employeeName: "",
    address: "",
    contact: "",
    email: "",
    description: "",
    theme: "light",
    emailNotifications: true,
    logo: null,
    companyImage: null,
  });

  // Theme change effect
  useEffect(() => {
    if (settings.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings.theme]);

  const handleChange = (e) => {
    const { name, type, checked, value, files } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings Saved!");
  };

  return (
    <div className="max-w-4xl p-6 mx-auto mt-6 transition-all bg-white rounded-lg shadow-md dark:bg-gray-900 dark:text-white">
      <h2 className="mb-4 text-2xl font-semibold">HR_Management Settings</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">

        {/* Employee Name & Company Name */}
        <div>
          <label className="block text-sm font-medium">Employee Name</label>
          <input
            type="text"
            name="employeeName"
            value={settings.employeeName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
            placeholder="Enter Employee Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={settings.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
            placeholder="Enter Company Name"
          />
        </div>

        {/* Address & Contact */}
        <div>
          <label className="block text-sm font-medium">Address</label>
          <textarea
            name="address"
            value={settings.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
            placeholder="Enter Address"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Contact</label>
          <input
            type="text"
            name="contact"
            value={settings.contact}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
            placeholder="Enter Contact"
          />
        </div>

        {/* Email & Description */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={settings.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
            placeholder="Enter Description"
          />
        </div>

        {/* Upload Logo & Company Image */}
        <div>
          <label className="block text-sm font-medium">Upload Logo</label>
          <input
            type="file"
            name="logo"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Upload Company Image</label>
          <input
            type="file"
            name="companyImage"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
          />
        </div>

        {/* Theme & Email Notifications */}
        <div>
          <label className="block text-sm font-medium">Theme</label>
          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm">Enable Email Notifications</label>
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full px-4 py-2 text-green-700 bg-green-100 border border-green-600 rounded"
          >
            Save Settings
          </button>
        </div>

      </form>
    </div>
  );
};

export default Settings;
