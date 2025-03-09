
import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { FaFileCsv, FaFileExcel, FaSearch } from "react-icons/fa";
import * as XLSX from "xlsx";
import axios from "axios";  // Make sure to install axios via npm or yarn

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch employees from API on component mount
    axios.get('http://localhost:4000/api/hr/get-employees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  const addEmployee = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const resetEmployee = (id) => {
    axios.get(`http://localhost:4000/api/hr/get-employees`)
      .then((response) => {
        setEmployees(response.data);
      });
  };

  const viewEmployee = (id) => {
    // Redirect or open modal to view the employee
    console.log(`Viewing employee with ID: ${id}`);
  };

  const editEmployee = (id) => {
    // Call the API to update employee
    console.log(`Editing employee with ID: ${id}`);
  };

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:4000/api/hr/delete-employees/${id}`)
      .then(() => {
        setEmployees(employees.filter(employee => employee.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(employees);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Employees");
    XLSX.writeFile(wb, "employees.xlsx");
  };

  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (indexOfLastItem < filteredEmployees.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      id: event.target.id.value,
      name: event.target.name.value,
      email: event.target.email.value,
      mobile: event.target.mobile.value,
      dob: event.target.dob.value,
      designation: event.target.designation.value,
      joiningDate: event.target.joiningDate.value,
      status: "Active"
    };

    // Send the POST request to create a new employee
    axios.post("http://localhost:4000/api/hr/create-employees", newEmployee)
      .then((response) => {
        setEmployees([...employees, response.data]);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  return (
    <div className="p-4 bg-white">
      <h2 className="mb-4 text-xl font-bold">Employee List</h2>
      <div className="flex justify-between mb-4">
        <div>
          <button className="p-2 mr-2 text-green-700 bg-green-100 border border-green-600 rounded" onClick={() => setShowFilter(!showFilter)}>Filter</button>
          <button className="p-2 text-green-700 bg-green-100 border border-green-600 rounded" onClick={addEmployee}>+ Add Employee</button>
        </div>
        <div className="flex items-center">
          <CSVLink data={employees} filename={"employees.csv"} className="flex items-center p-2 mr-2 text-green-700 bg-green-100 border border-green-600 rounded">
            <FaFileCsv className="mr-2" /> CSV
          </CSVLink>
          <button className="flex items-center p-2 text-green-700 bg-green-100 border border-green-600 rounded" onClick={downloadExcel}>
            <FaFileExcel className="mr-2" /> Excel
          </button>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="p-2 pr-8 border rounded" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute text-gray-500 right-3 top-3" />
        </div>
      </div>

      {/* Filter Section */}
      {showFilter && (
        <div className="p-4 mb-4 bg-gray-100 rounded">
          <h3 className="mb-2 text-lg font-bold">Filter Options</h3>
          <label className="block mb-2">Employee ID:
            <input type="text" className="w-full p-2 border rounded" />
          </label>
          <label className="block mb-2">Employee Name:
            <input type="text" className="w-full p-2 border rounded" />
          </label>
          <label className="block mb-2">Designation:
            <input type="text" className="w-full p-2 border rounded" />
          </label>
          <label className="block mb-2">Status:
            <select className="w-full p-2 border rounded">
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <label className="block mb-2">Joining Date:
            <input type="date" className="w-full p-2 border rounded" />
          </label>
          <button className="p-2 text-green-700 bg-green-100 border border-green-600 rounded">Apply Filter</button>
        </div>
      )}

      <table className="w-full bg-white border border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border">SI</th>
            <th className="p-2 border">Employee ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Mobile No</th>
            <th className="p-2 border">DOB</th>
            <th className="p-2 border">Designation</th>
            <th className="p-2 border">JoiningDate</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, index) => (
            <tr key={employee.id}>
              <td className="p-2 border">{indexOfFirstItem + index + 1}</td>
              <td className="p-2 border">{employee.id}</td>
              <td className="p-2 border">{employee.name}</td>
              <td className="p-2 border">{employee.email}</td>
              <td className="p-2 border">{employee.mobile}</td>
              <td className="p-2 border">{employee.dob}</td>
              <td className="p-2 border">{employee.designation}</td>
              <td className="p-2 border">{employee.joiningDate}</td>
              <td className="p-2 border">{employee.status}</td>
              <td className="p-2 border">
                <button className="p-1 mr-2 text-red-700 bg-red-100 border border-red-600 rounded" onClick={() => resetEmployee(employee.id)}>🔄</button>
                <button className="p-1 mr-2 text-blue-700 bg-blue-100 border border-blue-600 rounded" onClick={() => viewEmployee(employee.id)}>👁️</button>
                <button className="p-1 mr-2 text-blue-700 bg-blue-100 border border-blue-600 rounded" onClick={() => editEmployee(employee.id)}>✏️</button>
                <button className="p-1 text-red-700 bg-red-100 border border-red-600 rounded" onClick={() => deleteEmployee(employee.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button className="p-2 text-green-700 bg-green-100 border border-green-600 rounded" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <button className="p-2 text-green-700 bg-green-100 border border-green-600 rounded" onClick={nextPage} disabled={indexOfLastItem >= filteredEmployees.length}>Next</button>
      </div>

      {/* Add Employee Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="w-1/2 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-lg font-bold">Add Employee</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="id" className="w-full p-2 mb-2 border rounded" placeholder="Employee Id" required />
              <input type="text" name="name" className="w-full p-2 mb-2 border rounded" placeholder="Employee Name" required />
              <input type="email" name="email" className="w-full p-2 mb-2 border rounded" placeholder="Email" required />
              <input type="text" name="mobile" className="w-full p-2 mb-2 border rounded" placeholder="Mobile" required />
              <input type="text" name="dob" className="w-full p-2 mb-2 border rounded" placeholder="DOB" required />
              <input type="text" name="designation" className="w-full p-2 mb-2 border rounded" placeholder="Designation" required />
              <input type="text" name="joiningDate" className="w-full p-2 mb-2 border rounded" placeholder="JoiningDate" required />
              <div className="flex justify-end">
                <button type="button" className="p-2 mr-2 text-red-700 bg-red-100 border border-red-600 rounded" onClick={handleClose}>Cancel</button>
                <button type="submit" className="p-2 text-blue-700 bg-blue-100 border border-blue-600 rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;

